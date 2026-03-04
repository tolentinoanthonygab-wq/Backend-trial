import "../App.css";
import LoginForm from "./LoginForm";
import schoolImage from "../assets/images/logo-jrmsu.jpg";
import backgroundImage from "../assets/images/bg_image.jpg"; // Replace with a high-quality institutional image

export const Home = () => {
  return (
    <div
      className="home-page"
      style={{
        background: "var(--gradient-bg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="main-content">
        {/* Barangay Information */}
        <div className="university-info">
          <h1 className="university-name">
            Barangay Official Attendance System
          </h1>
          <h2 className="system-title">Secure & Efficient Attendance Tracking</h2>
          <p className="campus-location">Serving Our Community</p>
        </div>

        {/* Login Form */}
        <div className="form-container">
          <div className="logo-wrapper">
            <img src={schoolImage} alt="JRMSU Logo" className="school-logo" />
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
