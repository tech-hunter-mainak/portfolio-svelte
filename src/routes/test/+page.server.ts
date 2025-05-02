// src/routes/+page.server.ts
import { json, error } from '@sveltejs/kit';

export async function load() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return JSON.stringify({ body: data, status: response.status });
  }
  catch (err) {
    console.error('Error fetching data:', err);
    throw error(400, 'Internal Server Error');
  }
}
