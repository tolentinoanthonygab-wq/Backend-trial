from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import users, events, programs, departments, auth, attendance 
from app.services.face_recognition import FaceRecognitionService
from app.database import engine
from app.models.base import Base

# Import all models so they are registered with Base.metadata
from app.models import associations, attendance as attendance_model, department, event, program, role, user


app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users.router)
app.include_router(events.router)
app.include_router(programs.router)
app.include_router(departments.router)
app.include_router(auth.router)
app.include_router(attendance.router)

# Load face encodings at startup
face_service = FaceRecognitionService()
face_service.load_encodings("face_encodings.pkl")

@app.on_event("startup")
def on_startup():
    """Create database tables on startup if they don't exist."""
    Base.metadata.create_all(bind=engine)

@app.get("/")
async def root():
    return {
        "message": "Welcome to the Student Attendance System API",
        "endpoints": {
            "users": "/users",
            "events": "/events",
            "programs": "/programs",
            "departments": "/departments"
        }
    }

@app.on_event("shutdown")
def save_face_encodings():
    face_service.save_encodings("face_encodings.pkl")