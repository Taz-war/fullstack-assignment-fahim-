export const fetchCardByTitle = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/cards/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch card with id: ${id}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching card by ID:', error);
        throw error;
    }
};
