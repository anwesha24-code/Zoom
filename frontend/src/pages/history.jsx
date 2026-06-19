import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import 'D:/WebDev/MajorProject_Zoom/frontend/src/styles/history.css'; 

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (err) {
                console.log(err);
            }
        };
        fetchHistory();
    }, []);

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="history-container">
            <IconButton 
                className="home-btn" 
                onClick={() => routeTo("/home")}
            >
                <HomeIcon />
            </IconButton>

            {meetings.length !== 0 ? (
                <div className="meetings-grid">
                    {meetings.map((e, i) => (
                        <Card key={i} className="meeting-card" variant="outlined">
                            <CardContent>
                                <Typography className="card-code" sx={{ fontSize: 14 }} gutterBottom>
                                    Code: <span>{e.meetingCode}</span>
                                </Typography>

                                <Typography className="card-date" sx={{ fontSize: 13 }}>
                                    Date: {formatDate(e.date)}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="no-meetings">
                    <p>No meeting history found.</p>
                </div>
            )}
        </div>
    );
}