import React from "react"
// import { Button } from "@mui/material"
import Button from 'react-bootstrap/Button'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router-dom'

function Home(){
    const navigate = useNavigate()
    
    function handleClick(){
        navigate('/discover')
    }

    return(
        <div className="home">
            <img className='bg-img' src='https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/c18df626-e6fc-4dbb-818a-55d299b11842/IN-en-20220606-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
            <div className="home-text">
                Watch Unlimited Movie Trailers
                <br/>
                <Button onClick={handleClick} className="get-started-btn" variant="danger" size="lg">Get Started <ArrowForwardIosIcon/></Button>
            </div>
        </div>
    )
}

export default Home