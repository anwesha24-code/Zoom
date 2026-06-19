import React, { useContext } from 'react'
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { IconButton, TextField } from '@mui/material';
import { AuthContext, addToUserHistory } from 'D:/WebDev/MajorProject_Zoom/frontend/src/contexts/AuthContext.jsx';
import { useState, Navigate } from 'react';
import Button from '@mui/material/Button';
import RestoreIcon from '@mui/icons-material/Restore';
function HomeComponent() {

    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return (
        <div className="homePage">

            <nav className="navBar">
<h2 className="logoTitle">
    Gather
    <img src="/mainLogo.png" alt="Gather Logo" />
</h2>
                <div className="navActions">
                    <IconButton onClick={() => navigate("/history")}>
                        <RestoreIcon />
                    </IconButton>

                    <Button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/auth");
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </nav>

            <div className="heroSection">

                <div className="heroLeft">
                    <h1>
                        Premium Video Meetings
                        <br />
                        For Everyone
                    </h1>

                    <p>
                        Connect, collaborate and communicate
                        seamlessly with high-quality video calls.
                    </p>

                    <div className="joinBox">
                        <TextField
                            label="Meeting Code"
                            variant="outlined"
                            onChange={(e) =>
                                setMeetingCode(e.target.value)
                            }
                        />

                        <Button
                            variant="contained"
                            onClick={handleJoinVideoCall}
                        >
                            Join
                        </Button>
                    </div>
                </div>

                <div className="heroRight">
                    <img
                        src="\home.png"
                        alt="Video Meeting"
                    />
                </div>

            </div>
</div>

    )
}

export default withAuth(HomeComponent);