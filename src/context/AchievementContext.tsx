import React, { useState, useEffect } from 'react';
import achievementsData from '../data/AchievementData';

export interface Achievement {
    id: number;
    name: string;
    description: string;
    condition: string;
    target?: number;
}

interface AchievementContextProps {
    children: React.ReactNode;
}

export const AchievementContext = React.createContext<{
    achievements: Achievement[];
    unlockAchievement: (condition: string) => void;
}>({
    achievements: [],
    unlockAchievement: () => {},
});

export const useAchievementContext = () => React.useContext(AchievementContext);

export const AchievementProvider: React.FC<AchievementContextProps> = ({ children }) => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [clickCount, setClickCount] = useState<number>(0);

    useEffect(() => {
        const handleClick = () => {
            setClickCount(prevCount => prevCount + 1);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        if (achievementsData.clickCount.target && clickCount >= achievementsData.clickCount.target) {
            unlockAchievement('clickCount');
        }
    }, [clickCount]);

    const unlockAchievement = (condition: string) => {
        const achievementToUnlock = achievementsData[condition];
        if (achievementToUnlock && !achievements.some(a => a.id === achievementToUnlock.id)) {
            setAchievements([...achievements, achievementToUnlock]);
        }
    };

    return (
        <AchievementContext.Provider value={{ achievements, unlockAchievement }}>
            {children}
        </AchievementContext.Provider>
    );
};