from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class BannerConfig(BaseModel):
    message: str
    isClosable: bool

@app.get("/api/banner", response_model=BannerConfig)
async def get_banner_settings():
    # In a real app, this would query the database
    return {
        "message": "Welcome to our platform! Experience the next generation of SSE tools.",
        "isClosable": True
    }