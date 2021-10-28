import styled from "styled-components";

export const MissionSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #5c5c5d;
  max-width: 1140px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const LeftMissionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Mission = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-top: 36px;
  letter-spacing: 0.1em;
`;

export const MissionName = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 49px;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 23px;
  @media (max-width: 515px) {
    font-size: 22px;
  }
`;

export const Rocket = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  letter-spacing: 0.1em;
`;

export const RocketInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

export const RocketName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const RocketState = styled.div`
  display: flex;
  align-items: center;
  background: #6fb46e;
  border-radius: 4px;
  max-width: 77px;
  height: 14px;
  font-size: 12px;
  line-height: 16px;
  padding: 3px 5px 3px 6px;
  margin-bottom: 33px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 160px;
  min-height: 54px;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  border: 1px solid #ffffff;
  margin-bottom: 40px;
  @media (max-width: 375px) {
    margin: auto;
    min-width: 345px;
    min-height: 54px;
  }
`;

export const RightMissionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: auto;
    padding-left: 15px;
  }
`;

export const LaunchDateTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-top: 36px;
  margin-bottom: 8px;
  letter-spacing: 0.1em;
`;

export const LaunchDateInfoShort = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
  margin-left: auto;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const LaunchDateInfoLong = styled.h3`
  display: none;
  @media (max-width: 375px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #ffffff;
    display: block;
  }
`;

export const LaunchSiteTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-top: 23px;
  margin-bottom: 8px;
  letter-spacing: 0.1em;
  margin-left: auto;
  @media (max-width: 375px) {
    margin-left: 0;
  }
`;

export const LaunchSiteInfo = styled.h3`
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 166px;
  @media (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

export const LaunchSiteDetails = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  padding: 8px 10px 8px 10px;
  margin-top: 12px;
  background: #ffffff;
  border-radius: 4px;
  display: none;
`;
