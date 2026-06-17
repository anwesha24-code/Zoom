import React, { useContext } from 'react'
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import { IconButton, TextField } from '@mui/material';
import { AuthContext,addToUserHistory } from 'D:/WebDev/MajorProject_Zoom/frontend/src/contexts/AuthContext.jsx';
import { useState,Navigate } from 'react';
import Button from '@mui/material/Button';
import RestoreIcon from '@mui/material/Icon';
function HomeComponent() {

    let navigate=useNavigate();
    const [meetingCode,setMeetingCode]=useState("");
    const {addToUserHistory}=useContext(AuthContext);
    let handleJoinVideoCall=async()=>{
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }
    return (
        <>
        <div className='navBar'>
            <div style={{display:"flex",alignItems:"center"}}>

                <h2>Apna Video Call</h2>
            </div>

            <div style={{display:"flex",alignItems:"center"}}>
                <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                    <RestoreIcon/>
                    <p>History</p>
                </IconButton>
                <Button onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/auth")
                }}>Logout
                </Button>
            </div>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2></h2>
                        <div style={{display:"flex",gap:"10px"}}>
                            <TextField onChange={e=>setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined"></TextField>
                        <Button onClick={handleJoinVideoCall} variant="contained">Join</Button>
                </div>
                    </div>
                    <div className="rightPanel">
                        <img srcSet='/logo3.png' alt=""/>
                    </div>
                </div>
            </div>


        </div>
        </>
    )






  return (
    <div>HomeComponent</div>
  )
}

export default withAuth(HomeComponent);