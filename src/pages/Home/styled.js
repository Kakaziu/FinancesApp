import styled from "styled-components";

export const Main = styled.div`
  background-color: white;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  left: 50%;
  border-radius: 4px;
  box-shadow: -1px 10px 20px -14px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  h1{
    font-size: 45px;
  }

  p {
    font-size: 17px;
  }
`