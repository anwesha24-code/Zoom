import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {

const router=useNavigate();


  return (
    <div className='landingPageContainer'>
<nav>
    <div className='navHeader'><h2>Video Conference</h2></div>
    <div className='navlist'>
        <p onClick={()=>{
            router("/ad23")
        }}>Join as Guest</p>
        <p onClick={()=>{
            router("/auth")
        }}>Register</p>
        <div onClick={()=>{
            router("/auth")
        }} role='button'>
            <p>Login</p>
        </div>
    </div>
</nav>
<div className="landingMainContainer">
    <div>
        <h1><span style={{color:"#D97500"}}>Connect</span> With Your Loved Ones</h1>
        <p>Cover a distance by Anwesha</p>
        <div role="button">
            <Link to={"/auth"}>Get Started</Link>
        </div>
    </div>
    <div>
        <img src="/mobile.png" alt="mobile" />
    </div>
</div>
    </div>
  )
}
