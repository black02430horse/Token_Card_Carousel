import styled from "styled-components";

export const Arrows = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  z-index: 9;
  bottom: 30px;
`;

export const ArrowLeft = styled.button`
  background: rgba(15, 15, 18, 1);
  border-radius: 50%;
  width: 32px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(23, 24, 29, 1);
  cursor: pointer;
`;
export const ArrowRight = styled.button`
  background: rgba(15, 15, 18, 1);
  border-radius: 50%;
  width: 32px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(23, 24, 29, 1);
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const Carousel = styled.div`
  width: 1024.08px;
  height: 400px;
  position: relative;
  margin: 0 auto;
`;
