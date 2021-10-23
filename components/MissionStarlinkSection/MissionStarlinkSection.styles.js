import styled from "styled-components";

export const MissionSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #5c5c5d;
  max-width: 1140px;
  margin: auto;
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
`;

export const MissionName = styled.h1`
  font-size: 42px;
  font-weight: 700;
  line-height: 49px;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 23px;
`;

export const Rocket = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
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
  height: 54px;
  color: #ffffff;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  border: 1px solid #ffffff;
  margin-bottom: 40px;
`;

export const RightMissionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const LaunchDateTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-top: 36px;
  margin-bottom: 8px;
`;

export const LaunchDateInfo = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
`;

export const LaunchSiteTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  color: #868686;
  margin-top: 23px;
  margin-bottom: 8px;
`;

export const LaunchSiteInfo = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 166px;
  &:hover {
    ${LaunchSiteDetails} {
      display: block;
    }
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
