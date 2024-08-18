export const fetchCardsData = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/cards');
        if (!response.ok) {
            throw new Error('Failed to fetch cards');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};
