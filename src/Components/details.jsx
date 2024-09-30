import React from "react";
import styled from "styled-components";

const Button = ({text}) => {
  return (
    <StyledWrapper>
      <div className="detailcontainer flex items-center justify-center">
        <button className="button px-[2em] py-[0.4em] text-[20px] detailbtn">{text}</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
  border-radius: 0.5em;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 2px 3px #000000b4;
}

.detailcontainer {
  position: relative;
  padding: 3px ;
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  border-radius: 0.9em;
  transition: all 0.4s ease;
}

.detailcontainer::before {
  content: "";
  position: absolute;
  inset: 0;
  margin: auto;
  border-radius: 0.9em;
  z-index: -10;
  filter: blur(0);
  transition: filter 0.4s ease;
}

.detailcontainer:hover::before {
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  filter: blur(1.2em);
}
.detailcontainer:active::before {
  filter: blur(0.2em);
}

`;

export default Button;
