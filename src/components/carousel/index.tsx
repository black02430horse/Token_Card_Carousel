import React, { useState, useCallback, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ArrowLeft, ArrowRight, Arrows, Carousel } from "./styled";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { CardComponent } from "../card";
import { Item } from "types";
import { Direction, EventType } from "enums";

interface Props {
  items: Item[];
}

export const CarouselComponent: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState<number>(0);
  const [eventType, setEventType] = useState<EventType>();
  const [isHover, setIsHover] = useState(false);
  const [directionByCard, setDirectionByCard] = useState<Direction>();

  const newItems = items.length < 7 ? [...items, ...items] : [...items];

  const refs = useRef(newItems.map(() => React.createRef<HTMLDivElement>()));

  const generateItems = useCallback(() => {
    return Array.from({ length: 5 }, (_, i) => {
      let index = active - 2 + i;
      if (index < 0) index += newItems.length;
      if (index >= newItems.length) index %= newItems.length;
      const level = 2 - i;
      return (
        <CSSTransition
          key={index}
          classNames={`carousel-${eventType}`}
          timeout={300}
          nodeRef={refs.current[index]}
        >
          <CardComponent
            item={newItems[index]}
            level={level}
            directionByCard={directionByCard}
            isFull={items.length === 5}
            setIsHover={setIsHover}
            isHover={isHover}
            onCardClick={onCardClick}
            ref={refs.current[index]}
          />
        </CSSTransition>
      );
    });
  }, [active, eventType, newItems]);

  const onMoveLeft = useCallback(() => {
    setActive((prev) => (prev + 1) % newItems.length);
    setEventType(EventType.left);
  }, []);

  const onMoveRight = useCallback(() => {
    setActive((prev) => (prev - 1 + newItems.length) % newItems.length);
    setEventType(EventType.right);
  }, []);

  const onCardClick = useCallback((level: number) => {
    setActive((prev) => (prev - level) % newItems.length);
    setEventType(EventType.card);
    setDirectionByCard(level < 0 ? Direction.left : Direction.right);
  }, []);

  return (
    <Carousel>
      <Arrows>
        <ArrowLeft onClick={onMoveLeft}>
          <img src={left} alt="left arrow" />
        </ArrowLeft>
        <ArrowRight onClick={onMoveRight}>
          <img src={right} alt="right arrow" />
        </ArrowRight>
      </Arrows>
      <TransitionGroup>{generateItems()}</TransitionGroup>
    </Carousel>
  );
};
