import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import Button from "./Button";
import openWhatsApp from "../utils/openWhatsApp";
import config from "../config";

const BodyContainer = styled(FlexContainer)`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const BodyContent = styled.div`
  width: 100%;
  max-width: 550px;
  flex: 1;

  & h2 {
    line-height: 60px;
    font-weight: 600;
    color: #bebebe;
    font-size: 48px;
    margin-bottom: 26px;
  }

  & p {
    line-height: 36px;
    font-size: 28px;
    margin-bottom: 26px;
  }

  @media (max-width: 480px) {
    flex: 0.7;

    & h2 {
      line-height: 50px;
      font-size: 38px;
      margin-bottom: 16px;
    }

    & p {
      line-height: 26px;
      font-size: 24px;
      margin-bottom: 24px;
    }
  }
`;

const BackgroundLayer = styled.div`
  background: url(/assets/img/wali-picture.png) no-repeat center 0;
  width: 350px;
  height: 808px;
  mix-blend-mode: normal;

  @media (max-width: 480px) {
    flex: 1;
    height: auto;
    background-size: 55%;
  }
`;

export default function Body() {
  const handleClick = () =>
    openWhatsApp(config.message.to, config.message.text);

  return (
    <BodyContainer>
      <BodyContent>
        <h2>Hi, my name is Mohammad Wali.</h2>
        <p>I turn ideas into real world apps.</p>
        <Button onClick={handleClick}>Text me now!</Button>
      </BodyContent>
      <BackgroundLayer />
    </BodyContainer>
  );
}
