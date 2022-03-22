export async function fetchData<T>(url: string): Promise<T> {

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await (response.json() as Promise<T>);
    } catch (e) {
        throw new Error('Failed to fetch data');
    }
}