import React from "react";
import Image from "next/image";
import {
  RescueShipsWrapper,
  Title,
  CardsWrapper,
  Card,
  ImageWrapper,
  CardInfo,
  CardTitle,
  LineBreak,
  LeftSection,
  CardDetails,
  HomePortTitle,
  HomePort,
  RightSection,
  WeightTitle,
  Weight,
} from "./RescueShips.styles";

const RescueShips = () => {
  return (
    <RescueShipsWrapper>
      <Title>RESCUE SHIPS</Title>

      <CardsWrapper>
        <Card>
          <ImageWrapper>
            <Image src="/spacex-rocket.jpg" width={360} height={200} alt="" />
          </ImageWrapper>

          <CardInfo>
            <CardTitle>GO Ms Tree</CardTitle>
            <LineBreak />
            <CardDetails>
              <LeftSection>
                <HomePortTitle>HOME PORT</HomePortTitle>
                <WeightTitle>WEIGHT [KG]</WeightTitle>
              </LeftSection>

              <RightSection>
                <HomePort>Port Canaveral</HomePort>
                <Weight>449964</Weight>
              </RightSection>
            </CardDetails>
          </CardInfo>
        </Card>

        <Card>
          <ImageWrapper>
            <Image
              src="/spacex-rocket-launch.jpg"
              width={360}
              height={200}
              alt=""
            />
          </ImageWrapper>

          <CardInfo>
            <CardTitle>GO Ms Chief</CardTitle>
            <LineBreak />
            <CardDetails>
              <LeftSection>
                <HomePortTitle>HOME PORT</HomePortTitle>
                <WeightTitle>WEIGHT [KG]</WeightTitle>
              </LeftSection>

              <RightSection>
                <HomePort>Port Canaveral</HomePort>
                <Weight>449964</Weight>
              </RightSection>
            </CardDetails>
          </CardInfo>
        </Card>

        <Card>
          <ImageWrapper>
            <Image
              src="/spacex-rocket-start.jpg"
              objectFit="cover"
              width={360}
              height={200}
              alt=""
            />
          </ImageWrapper>

          <CardInfo>
            <CardTitle>Just read the Instructions 2</CardTitle>
            <LineBreak />

            <CardDetails>
              <LeftSection>
                <HomePortTitle>HOME PORT</HomePortTitle>
                <WeightTitle>WEIGHT [KG]</WeightTitle>
              </LeftSection>

              <RightSection>
                <HomePort>Port Canaveral</HomePort>
                <Weight>449964</Weight>
              </RightSection>
            </CardDetails>
          </CardInfo>
        </Card>
      </CardsWrapper>
    </RescueShipsWrapper>
  );
};

export default RescueShips;
