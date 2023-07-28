import React, { useState, useEffect } from "react";
import { HeartContainer, Heart } from "./style";

function InfoAnswers({ chances }) {
  const [errorAnimation, setErrorAnimation] = useState(false);

  useEffect(() => {
    if (chances < 3) {
      setErrorAnimation(true);
      setTimeout(() => {
        setErrorAnimation(false);
      }, 3000);
    }
  }, [chances]);

  return (
    <HeartContainer>
      <Heart error={chances < 3} animated={errorAnimation} />
      <Heart error={chances < 2} animated={errorAnimation} />
      <Heart error={chances < 1} animated={errorAnimation} />
    </HeartContainer>
  );
}

export default InfoAnswers;
