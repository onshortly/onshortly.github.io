import { Achievement } from "../context/AchievementContext";

const achievementsData: Record<string, Achievement> = {
    visitedAllSections: {
        id: 1,
        name: "Explorer",
        description: "Visit all sections of the website.",
        condition: "visitedAllSections"
    },
    clickCount: {
        id: 2,
        name: "Click Master",
        description: "Click on elements 50 times.",
        condition: "clickCount",
        target: 5
    },
};

export default achievementsData;