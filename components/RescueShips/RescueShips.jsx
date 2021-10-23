import React from "react";
import Image from "next/image";
import {
  RescueShipsWrapper,
  Title,
  CardsWrapper,
  Card,
  CardTitle,
  StyledBreakLine,
  HomePort,
  Weight,
} from "./RescueShips.styles";

const RescueShips = () => {
  return (
    <RescueShipsWrapper>
      <Title>RESCUE SHIPS</Title>
      <CardsWrapper>
        <Card>
          <Image src="/spacex-logo.svg" width={360} heiight={200} alt="" />
          <CardTitle>GO Ms Tree</CardTitle>
          <StyledBreakLine></StyledBreakLine>
          <HomePort></HomePort>
          <Weight></Weight>
        </Card>
      </CardsWrapper>
    </RescueShipsWrapper>
  );
};

export default RescueShips;
