export async function action({ request }) {
    try {
        const data = await request.json();
        console.log(data);
        return null;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Failed to process the request' };
    }
}
