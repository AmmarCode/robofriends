import React from "react";
import "tachyons";

const Card = (props) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${props.id}?set=set3`} />
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  );
};

export default Card;
