import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function MovieCard(props){

    const navigate = useNavigate()

    function handleClick(){
        navigate(`/details/${props.title}`, {state: {movieId: props.id}})
    }

    return (
        <Card sx={{ maxHeight: 500 }}>
            <CardActionArea onClick={handleClick}>
            <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
                alt={props.title}
            />
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
                    {props.title.substring(0,13) + '...'}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                    {props.description.substring(0,100) + '...'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href='/' size="small">Show More</Button>
            </CardActions>
            </CardActionArea>
        </Card>
    )
}

export default MovieCard