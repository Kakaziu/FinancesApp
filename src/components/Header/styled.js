import styled from "styled-components";

export const HeaderEl = styled.header`
  padding: 20px;
  background-color: #bf1953;
  height: 35vh;
  color: white;

  h2 {
    font-size: 28px;
  }
`

export const Menu = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 8px 20px;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    border: none;
    color: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`