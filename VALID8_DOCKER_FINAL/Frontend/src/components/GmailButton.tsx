import React from "react";

const GMAIL_SENDER_URL = "https://gmail-sender-flax.vercel.app";

const GmailButton: React.FC = () => {
    const handleClick = () => {
        window.open(GMAIL_SENDER_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
                onClick={handleClick}
                id="gmailConnectBtn"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.65rem 1.4rem",
                    backgroundColor: "#EA4335",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(234,67,53,0.35)",
                    transition: "background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#c5221f";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 16px rgba(234,67,53,0.4)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#EA4335";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(234,67,53,0.35)";
                }}
                title="Open Gmail Attendance Sender"
            >
                {/* Gmail envelope icon */}
                <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.273l8.073-5.78C21.691 2.279 24 3.434 24 5.457z" />
                </svg>
                Gmail
            </button>
            <p style={{ fontSize: "0.78rem", color: "#6c757d", marginTop: "0.4rem" }}>
                Send attendance via Gmail
            </p>
        </div>
    );
};

export default GmailButton;
