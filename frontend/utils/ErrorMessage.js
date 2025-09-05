// Replace example URL with your actual backend endpoint
const API_URL = "https://your-backend.com/api/jobs";

export async function fetchJobs(query) {
  try {
    const resp = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
    if (!resp.ok) throw new Error("Failed to fetch jobs");
    return await resp.json();
  } catch (error) {
    throw error;
  }
}
