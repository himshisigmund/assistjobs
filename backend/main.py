from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

# Allow all origins for quick prototyping. For production, restrict this!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

REMOTIVE_API = "https://remotive.com/api/remote-jobs"

@app.get("/api/jobs")
async def get_jobs(q: str = Query("", alias="search")):
    # Forward search query to Remotive API
    async with httpx.AsyncClient() as client:
        params = {"search": q} if q else {}
        resp = await client.get(REMOTIVE_API, params=params)
        data = resp.json()
        # You can modify/filter/sanitize data here if needed
        return {"jobs": data.get("jobs", [])}
