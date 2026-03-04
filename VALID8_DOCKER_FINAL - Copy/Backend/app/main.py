from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import users, events, programs, departments, auth, attendance 
from app.services.face_recognition import FaceRecognitionService


from contextlib import asynccontextmanager

# Load face encodings at startup
face_service = FaceRecognitionService()

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Load face encodings
    face_service.load_encodings("face_encodings.pkl")
    yield
    # Shutdown: Save face encodings
    face_service.save_encodings("face_encodings.pkl")

app = FastAPI(lifespan=lifespan)