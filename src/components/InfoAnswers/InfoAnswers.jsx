import React from "react";
import { HeartContainer, Heart } from "./style";

function InfoAnswers({ chances }) {
  return (
    <HeartContainer>
      <Heart error={chances < 3} />
      <Heart error={chances < 2} />
      <Heart error={chances < 1} />
    </HeartContainer>
  );
}

export default InfoAnswers;
