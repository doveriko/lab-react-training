import React from "react";

const IdCard = (props) => {
  return (
    <div>
      <div className="idcard-info rectangle">
        <div>
          <img src={props.picture} alt="" />
        </div>
        <div>
          <strong>First name</strong>: {props.firstName} <br />
          <strong>Last name</strong>: {props.lastName} <br />
          <strong>Gender</strong>: {props.gender} <br />
          <strong>Height</strong>: {props.height} <br />
          <strong>Birth</strong>: {props.birth.toDateString()} <br />
        </div>
      </div>
    </div>
  );
};

export default IdCard;
