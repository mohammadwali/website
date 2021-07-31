import styled from "styled-components";

const StyledButton = styled.button`
  color: #bebebe;
  border: 2px solid;
  border-radius: 40px;
  background: none;
  font-size: 24px;
  padding: 12px 47px;
  font-family: "Saira", sans-serif;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 10px 28px;
  }
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
