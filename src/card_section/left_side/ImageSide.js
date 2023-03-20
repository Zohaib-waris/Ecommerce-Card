import React, { useState } from 'react'
import classes from './ImageSide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import image1 from '../../assets/yellow-watch1.png';
import image2 from '../../assets/yellow-watch2.png';
import image3 from '../../assets/yellow-watch3.png';
const ImageSide=(props)=>{
   const [imageClicked,setImageClicked]= useState({ first: false, second: false, third: false})
  //  var image1 = `../../assets/yellow-watch1.png`;
   const imageName = `${props.images[2]}-watch1.png`;
   console.log(imageName)
// const filePath = `../../assets/${imageName}`;
const image1 = require(`../../assets/${imageName}`);
   const changeImage=(e)=>{
    const showImage={
      first: false,
      second: false,
      third: false
    }
    setImageClicked(()=>({
      ...showImage,
      [e]: true,  
    }
    ))
  }
  return(
    <div className={classes.side}>
      <div className={classes.top}>
        <FontAwesomeIcon icon="fa-solid fa-share-nodes" />
        <FontAwesomeIcon icon="fa-regular fa-heart" />
      </div>
      <div className={classes.view}>
        <img src={
          imageClicked.first? image1 : imageClicked.second? image2 : imageClicked.third? image3: image1
        } alt='Not found' width='100%' style={imageClicked.first? {left: '0px'} : imageClicked.second? {left: 0} : 
         imageClicked.third? {left: 0}: {left: '0px'}} />
      </div>
      <div className={classes.bottom}>
      <img src={image1} alt='not' onClick={()=> changeImage("first")} />
      <img src={image2} alt='not' onClick={()=> changeImage("second")} />
      <img src={image3} alt='not' onClick={()=> changeImage("third")} />
      </div>
    </div>
  );
}
export default ImageSide;