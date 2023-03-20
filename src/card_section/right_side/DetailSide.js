import React from "react";
import classes from "./DetailSide.module.css";

const DetailSide = (props) => {
  return (
    <div className={classes.side}>
      <div className={classes.title}>
        <h2>{props.detail.name} </h2>
        <span>code:{props.detail.ProductCode}</span>
      </div>
      <div className={classes["price"]}>
        Rs. <span>{props.detail.price}</span>
      </div>
      <div className={classes.selectColor}>
        <h3>Select Color</h3>
        <div className={classes.colorFlex}>
          <div
            className={classes.color}
            style={{ backgroundColor: props.detail.ProductColors[1] }}
          ></div>
          <div
            className={classes.color}
            style={{ backgroundColor: props.detail.ProductColors[2] }}
          ></div>
          <div
            className={classes.color}
            style={{ backgroundColor: props.detail.ProductColors[3] }}
          ></div>
          <div
            className={classes.color}
            style={{ backgroundColor: props.detail.ProductColors[4] }}
          ></div>
          <div
            className={classes.color}
            style={{ backgroundColor: props.detail.ProductColors[5] }}
          ></div>
        </div>
      </div>
      <div>
        <h3>Features</h3>
        <ul>
          <li>{props.detail.features[1]}</li>
          <li>{props.detail.features[2]}</li>
          <li>{props.detail.features[3]}</li>
          <li>{props.detail.features[4]}</li>
        </ul>
      </div>
      <button className={classes.cart}>ADD TO CART</button>
    </div>
  );
};
export default DetailSide;
