export async function action({ request }) {
    try {
        const data = await request.json();
        console.log('Form Submitted: ', data);
        return null;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Failed to process the request' };
    }
}
