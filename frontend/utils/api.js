// Uses Remotive API for real job data
const API_URL = "https://remotive.com/api/remote-jobs";

export async function fetchJobs(query) {
  try {
    const url = query
      ? `${API_URL}?search=${encodeURIComponent(query)}`
      : API_URL;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("Failed to fetch jobs");
    const data = await resp.json();
    // Remotive returns jobs in data.jobs
    return data.jobs || [];
  } catch (error) {
    throw error;
  }
}
