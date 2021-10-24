import styled from "styled-components";

export const RescueShipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1140px;
  margin: auto;
  @media (max-width: 375px) {
    margin-bottom: 85px;
  }
`;

export const Title = styled.h4`
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-right: auto;
  margin-top: 36px;
  letter-spacing: 0.1em;
  @media (max-width: 375px) {
    padding: 0 25px;
    margin-top: 17px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 30px;
  @media (max-width: 375px) {
    gap: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 360px;
  margin-bottom: 195px;
  @media (max-width: 375px) {
    margin: 0 15px;
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  max-width: 360px;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
`;

export const CardTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  color: #000000;
  margin-top: 17px;
  margin-bottom: 16px;
  background: #ffffff;
  margin-left: 15px;
`;

export const LineBreak = styled.hr`
  border: 1px solid #e8e8e8;
  width: 330px;
  @media (max-width: 375px) {
    margin: 0 15px;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 360px;
  background: #ffffff;
  margin-left: 15px;
  align-items: baseline;
  gap: 38px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  margin-top: 14px;
`;

export const HomePortTitle = styled.h2`
  display: flex;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #868686;
  background: #ffffff;
`;

export const WeightTitle = styled.h2`
  display: flex;
  font-size: 12px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #868686;
  background: #ffffff;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  margin-top: 14px;
`;

export const HomePort = styled.h2`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #000000;
  background: #ffffff;
`;

export const Weight = styled.h2`
  display: flex;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  color: #000000;
  background: #ffffff;
`;
