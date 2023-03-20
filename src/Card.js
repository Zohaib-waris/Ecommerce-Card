import React from "react";
import ImageSide from "./card_section/left_side/ImageSide";
import DetailSide from "./card_section/right_side/DetailSide";
import classes from "./Card.module.css";

const Card = (props) => {
  console.log(props.data.ProductImages)
  return (
    <div className={classes.card}>
      <ImageSide images={props.data.ProductImages} />
      <DetailSide detail={props.data.ProductDetails} />
    </div>
  );
};
export default Card;
