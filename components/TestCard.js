import React from "react";
import Image from 'next/image'

const TestCard = (props) => {
  return (
    <div className="test-card">
      <div className="test-image">
        <Image src={props.imgSrc} alt={props.alt} />{" "}
      </div>
    </div>
  );
};

export default TestCard;
