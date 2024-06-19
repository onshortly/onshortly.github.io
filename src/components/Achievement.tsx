import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAchievementContext } from '../context/AchievementContext';

const AchievementContainer = styled.div<{ visible: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateX(${props => (props.visible ? '0' : '100%')});
    transition: transform 0.5s ease-in-out;
`;

const AchievementItem: React.FC = () => {
    const { achievements } = useAchievementContext();

    useEffect(() => {
        // Additional logic if needed when achievement unlocks
    }, [achievements]);

    return (
        <>
            {achievements.map(achievement => (
                <AchievementContainer key={achievement.id} visible={true}>
                    <h3>{achievement.name}</h3>
                    <p>{achievement.description}</p>
                </AchievementContainer>
            ))}
        </>
    );
};

export default AchievementItem;