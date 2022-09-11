import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import RotateLeftRoundedIcon from "@mui/icons-material/RotateLeftRounded";
const Card = (props) => {
  const navigate = useNavigate();
  const navi = props.pathName;
  const items = useSelector((state) => state.cart);
  const loading = useSelector((state) => state.loading);
  const fun = () => {
    navigate("/topic/" + navi);
  };
  const totalSolved = (a, b) => {
    let arr = items.filter((ele) => ele >= a && ele <= b);
    return arr.length;
  };
  console.log(totalSolved(props.start, props.end));
  return (
    <Wrapper bgColor={props.bgColor}>
      <div className="card_container">
        <Title>{props.topicName}</Title>
      </div>
      <Descrip>
        Total Solved :{" "}
        {loading ? (
          <RotateLeftRoundedIcon />
        ) : (
          totalSolved(props.start, props.end)
        )}{" "}
        / {props.totalQ}
      </Descrip>
      <BtnCont>
        <Button onClick={fun}>
          {totalSolved(props.start, props.end) > 0
            ? "CONTINUE"
            : "START SOLVING"}
        </Button>
      </BtnCont>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  width: 15rem;
  min-height: 20vh;
  background-color: ${(props) => props.bgColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  /* #0059b2; */
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;
const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  margin: 1rem 0rem;
  background: transparent;
  color: white;
  border-radius: 0.3rem;
  border: 2px solid #4caf50;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
  cursor: pointer;
`;
const Title = styled.h2`
  color: rgb(8, 255, 8);
  padding: 0.5rem;
  height: 6vh;
  font-weight: bold;
`;
const Descrip = styled.h3`
  color: whitesmoke;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
`;
const BtnCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default Card;
