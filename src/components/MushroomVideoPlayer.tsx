import React, { useState, useRef, useEffect } from 'react';

interface MushroomTimelapsePlayerProps {
  githubRepo: string; // e.g., "username/mushroom-cam"
  hoursToShow?: number; // default 24
}

const MushroomTimelapsePlayer: React.FC<MushroomTimelapsePlayerProps> = ({ 
  githubRepo,
  hoursToShow = 24 
}) => {
  const [currentHour, setCurrentHour] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadRef = useRef<HTMLVideoElement>(null);
  const [availableHours, setAvailableHours] = useState<string[]>([]);

  // Generate video URLs based on current date/time
  const generateVideoUrl = (hourOffset: number): string => {
    const now = new Date();
    const targetTime = new Date(now.getTime() - (hourOffset * 60 * 60 * 1000));
    const year = targetTime.getFullYear();
    const month = String(targetTime.getMonth() + 1).padStart(2, '0');
    const day = String(targetTime.getDate()).padStart(2, '0');
    const hour = String(targetTime.getHours()).padStart(2, '0');
    
    const filename = `mushroom-${year}-${month}-${day}-${hour}.mp4`;
    return `https://github.com/${githubRepo}/releases/download/latest/${filename}`;
  };

  // Fetch available video segments from GitHub releases
  useEffect(() => {
    const fetchAvailableSegments = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${githubRepo}/releases/latest`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch release data');
        }
        
        const data = await response.json();
        const videoAssets = data.assets
          .filter((asset: any) => asset.name.endsWith('.mp4'))
          .map((asset: any) => asset.browser_download_url);
        
        setAvailableHours(videoAssets);
        setIsLoading(false);
      } catch (err) {
        setError('Unable to load timelapse videos. They may not be available yet.');
        setIsLoading(false);
      }
    };

    fetchAvailableSegments();
  }, [githubRepo]);

  // Handle video end - move to next segment
  const handleVideoEnd = () => {
    if (currentHour < hoursToShow - 1) {
      setCurrentHour(prev => prev + 1);
    } else {
      setIsPlaying(false);
      setCurrentHour(0); // Loop back to start
    }
  };

  // Preload next video segment
  useEffect(() => {
    if (preloadRef.current && currentHour < hoursToShow - 1) {
      const nextUrl = availableHours[currentHour + 1] || generateVideoUrl(hoursToShow - currentHour - 2);
      preloadRef.current.src = nextUrl;
      preloadRef.current.load();
    }
  }, [currentHour, availableHours, hoursToShow]);

  // Update main video source when currentHour changes
  useEffect(() => {
    if (videoRef.current && availableHours.length > 0) {
      const videoUrl = availableHours[currentHour] || generateVideoUrl(hoursToShow - currentHour - 1);
      videoRef.current.src = videoUrl;
      
      if (isPlaying) {
        videoRef.current.play().catch(err => {
          console.error('Playback error:', err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentHour, availableHours, isPlaying, hoursToShow]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const jumpToHour = (hour: number) => {
    setCurrentHour(hour);
    if (videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  };

  const formatHourLabel = (hourOffset: number): string => {
    const now = new Date();
    const targetTime = new Date(now.getTime() - (hourOffset * 60 * 60 * 1000));
    return targetTime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading timelapse...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#dc2626' }}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ position: 'relative', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          style={{ width: '100%', display: 'block' }}
          onEnded={handleVideoEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          playsInline
        />
        
        {/* Preload next video (hidden) */}
        <video
          ref={preloadRef}
          style={{ display: 'none' }}
          preload="auto"
        />

        {/* Overlay with current hour indicator */}
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          {formatHourLabel(hoursToShow - currentHour - 1)}
        </div>
      </div>

      {/* Controls */}
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={togglePlayPause}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <div style={{ flex: 1 }}>
          <input
            type="range"
            min="0"
            max={hoursToShow - 1}
            value={currentHour}
            onChange={(e) => jumpToHour(parseInt(e.target.value))}
            style={{ width: '100%' }}
          />
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '12px',
            color: '#666',
            marginTop: '4px'
          }}>
            <span>24h ago</span>
            <span>Hour {currentHour + 1} of {hoursToShow}</span>
            <span>Now</span>
          </div>
        </div>
      </div>

      {/* Quick jump buttons */}
      <div style={{ 
        marginTop: '1rem', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
        gap: '8px'
      }}>
        {Array.from({ length: Math.min(12, hoursToShow) }, (_, i) => i * 2).map(hour => (
          <button
            key={hour}
            onClick={() => jumpToHour(hour)}
            style={{
              padding: '6px',
              backgroundColor: currentHour === hour ? '#2563eb' : '#e5e7eb',
              color: currentHour === hour ? 'white' : '#374151',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            -{hoursToShow - hour}h
          </button>
        ))}
      </div>
    </div>
  );
};

export default MushroomTimelapsePlayer;