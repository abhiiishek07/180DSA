import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Card = (props) => {
  const navigate = useNavigate();
  const navi = props.pathName;
  const fun = () => {
    navigate("/topic/" + navi);
  };
  const topicsList = useSelector((state) => state.topics);

  return (
    <Wrapper>
      <div className="card_container">
        <Title>{props.topicName}</Title>
      </div>
      <Descrip> Total Question : {props.totalQ} </Descrip>
      <BtnCont>
        <Button onClick={fun}>
          {topicsList.find((ele) => ele.topicName === props.pathName)
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
  background-color: #0059b2;
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
