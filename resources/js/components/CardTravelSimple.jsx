import * as React from 'react';
import { styled } from '@mui/material/styles';
<<<<<<< HEAD
import Rating from '@mui/material/Rating';
import img1 from "../../img/img_travel_01.jpg"
import img2 from "../../img/img_travel_02.jpg"
import img3 from "../../img/img_travel_03.jpg"
import img4 from "../../img/img_travel_04.jpg"
import img5 from "../../img/img_travel_05.jpg"
import { Link } from 'react-router-dom';
import { useState } from 'react';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: "#39A9B7",
  },
  '& .MuiRating-iconHover': {
    color: '#3C587F',
  },
});
 


export default function CardTravelSipmle({ travel }) {
const [value, setValue] = useState(Number);

  return (
    
    <section className='card' >
      <Link to={`journeys/${travel.id}`} key={travel.id} >
        <div className='card__img_container'>
          {/* <img className='card__img' src={img2} alt={travel.city} /> */}
          <img className='card__img' src={require(`${travel.imgSrc}`).default} alt={travel.city} />
          <div className='card__mask'></div>
          <p className='card__price'>{travel.price }</p>
         <h2 className='card__head'>{travel.city}</h2>
        </div>
        </Link>
        <div className='card__bottom'>
        <StyledRating
          name="simple-controlled"
            value={travel.raiting}
            // readOnly 
             onChange={(event, newValue) => {
          setValue(newValue);
        }}
          />
          <p className='card__dura'>{travel.duration } часов</p>
          </div>
        
=======
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Rating from '@mui/material/Rating';
import img1 from "../../img/img_travel_01.jpg"

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '1369b9',
  },
  '& .MuiRating-iconHover': {
    color: '#1d54ed',
  },
});

export default function CardTravelSipmle({travels}) {

  // console.log(travels)

  return (
    <section className='card'>
      <img className='card__img' src={img1} alt={travels.city} />
      <h2 className='card__head'>{travels.city}</h2>     
      <Rating
        name="simple-controlled"
        // name="customized-color"
        value={travels.raiting}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus est recusandae laboriosam.
        </Typography>
      </CardContent>
>>>>>>> week1_sprint
    </section>
  );
}
