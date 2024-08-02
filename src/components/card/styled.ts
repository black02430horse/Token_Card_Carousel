import styled from "styled-components";
import {
  CARD_SIZE,
  CARD_PADDING,
  FONT_SIZE,
  BAR_TOP,
  ICON_SIZE,
  LEFT,
  TOP,
  DEGREE,
  Z_INDEX,
  HOVER_TOP,
} from "consts";
import { Direction } from "enums";

interface MainProps {
  layer: number;
}

interface CardBoxProps extends MainProps {
  position: number;
  $isFull: boolean;
  $isHover: boolean;
  $directionByCard?: Direction;
}

export const CardBox = styled.div<CardBoxProps>`
  overflow: hidden;
  width: ${({ layer }) => CARD_SIZE[layer].width};
  height: ${({ layer }) => CARD_SIZE[layer].height};
  position: absolute;
  opacity: ${({ $isHover }) => ($isHover ? 0.5 : 0.9)};
  border-radius: 16px;
  background: ${({ color }) =>
    `linear-gradient(0deg, ${color || "#ffffff"}, ${color || "#ffffff"})`};
  left: ${({ position }) => LEFT[position]};
  top: ${({ position }) => TOP[position]};
  transform: ${({ position }) => `rotate(${DEGREE[position]})`};
  z-index: ${({ layer }) => Z_INDEX[layer]};
  cursor: pointer;
  transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease,
    transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    box-shadow: ${({ color }) => `0px 0px 20px 0px ${color || "#ffffff"}`};
    z-index: 10;
    opacity: 0.9;
    top: ${({ position }) => HOVER_TOP[position]};
  }
`;

export const Card = styled.div<MainProps>`
  width: 100%;
  height: 100%;
  opacity: 0.85;
  border: ${({ color }) => `4px solid ${color || "#ffffff"}`};
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  box-sizing: border-box;
  padding: ${(props) => CARD_PADDING[props.layer]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 10;
`;

export const Header = styled.div`
  color: rgba(34, 34, 34, 1);
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Network = styled.h3<MainProps>`
  margin: 0;
  font-size: ${({ layer }) => FONT_SIZE[layer].network};
  font-weight: 700;
  text-align: left;
`;
export const Symbol = styled.h4<MainProps>`
  font-size: ${({ layer }) => FONT_SIZE[layer].symbol};
  margin: 0;
  font-weight: 400;
  text-align: right;
`;

export const Icon = styled.div<MainProps>`
  width: ${({ layer }) => ICON_SIZE[layer]};
  height: ${({ layer }) => ICON_SIZE[layer]};
  transition: width 0.3s, height 0.3s;
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.h6<MainProps>`
  font-size: ${({ layer }) => FONT_SIZE[layer].label};
  font-weight: 400;
  text-align: left;
  margin: 0;
`;
export const BalanceAmount = styled.p<MainProps>`
  font-size: ${({ layer }) => FONT_SIZE[layer].balance};
  font-weight: 700;
  text-align: left;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BarGroup = styled.div`
  width: 332px;
  height: 231.17px;
  top: -40px;
  left: -44px;
  position: absolute;
`;

export const ThinBar = styled.div<MainProps>`
  height: 5.7px;
  transform: rotate(-30deg);
  width: 344.35px;
  top: ${({ layer }) => BAR_TOP[layer].thin};
  background: rgba(255, 255, 255, 0.5);
  position: relative;
`;

export const ThickBar = styled.div<MainProps>`
  width: 344.35px;
  height: 58.56px;
  top: ${({ layer }) => BAR_TOP[layer].thick};
  left: 2.26px;
  transform: rotate(-30deg);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
`;
