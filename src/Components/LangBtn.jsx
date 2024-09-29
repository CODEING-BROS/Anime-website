import React from "react";
import styled from "styled-components";

const Button = ({lang,image}) => {
  return (
    <StyledWrapper>
      <button className="Btn flex gap-6  w-[250px]">
        <p>{lang}</p>
        <img
          src={image}
          alt="Luffy"
          className="BtnImg"
        />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .Btn {
    position: relative;
    height: 55px;
    border-radius: 45px;
    border: none;
    background-color: rgb(151, 95, 255);
    color: white;
    box-shadow: 0px 10px 10px rgb(210, 187, 253) inset, 0px 5px 10px rgba(5, 5, 5, 0.212),
      0px -10px 10px rgb(124, 54, 255) inset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Btn::before {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.678);
    content: "";
    filter: blur(1px);
    top: 7px;
    border-radius: 50%;
  }

  .Btn::after {
    width: 70%;
    height: 2px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.137);
    content: "";
    filter: blur(1px);
    bottom: 7px;
    border-radius: 50%;
  }

  .Btn:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }

    30% {
      transform: scale3d(1.25, 0.75, 1);
    }

    40% {
      transform: scale3d(0.75, 1.25, 1);
    }

    50% {
      transform: scale3d(1.15, 0.85, 1);
    }

    65% {
      transform: scale3d(0.95, 1.05, 1);
    }

    75% {
      transform: scale3d(1.05, 0.95, 1);
    }

    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  .BtnImg {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default Button;

