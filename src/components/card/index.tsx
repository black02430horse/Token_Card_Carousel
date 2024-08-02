import React, { useCallback, forwardRef } from "react";
import {
  Balance,
  BalanceAmount,
  BarGroup,
  Card,
  CardBox,
  Header,
  Icon,
  Label,
  Network,
  Symbol,
  ThickBar,
  ThinBar,
} from "./styled";
import { Item } from "types";
import { Direction } from "enums";

interface Props {
  level: number;
  item: Item;
  isFull: boolean;
  setIsHover: (value: boolean) => void;
  onCardClick: (value: number) => void;
  isHover: boolean;
  directionByCard?: Direction;
}

export const CardComponent = forwardRef<HTMLDivElement, Props>(
  (
    { level, directionByCard, isFull, item, isHover, setIsHover, onCardClick },
    ref
  ) => {
    const layer = Math.abs(level);
    const handleMouseOver = useCallback(() => setIsHover(true), [setIsHover]);
    const handleMouseLeave = useCallback(() => setIsHover(false), [setIsHover]);
    return (
      <CardBox
        ref={ref}
        layer={layer}
        position={2 - level}
        onClick={() => onCardClick(level)}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        $isFull={isFull}
        $directionByCard={directionByCard}
        $isHover={isHover}
        color={item.color ?? "#ffffff"}
      >
        <Card layer={layer} color={item.color ?? "#ffffff"}>
          <Header>
            <Network layer={layer}>{item.name}</Network>
            <Symbol layer={layer}>{item.symbol}</Symbol>
          </Header>
          <Icon layer={layer}>
            <img alt="symbol" width={"100%"} height={"100%"} src={item.icon} />
          </Icon>
          <Balance>
            <Label layer={layer}>balance: </Label>
            <BalanceAmount layer={layer}>{item.balance}</BalanceAmount>
          </Balance>
        </Card>
        <BarGroup>
          <ThinBar layer={layer} />
          <ThickBar layer={layer} />
        </BarGroup>
      </CardBox>
    );
  }
);
