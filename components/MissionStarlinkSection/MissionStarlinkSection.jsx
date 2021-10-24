import React from "react";
import {
  MissionSectionWrapper,
  LeftMissionSection,
  Mission,
  MissionName,
  RocketInfo,
  Rocket,
  RocketState,
  StyledButton,
  RocketName,
  RightMissionSection,
  LaunchDateTitle,
  LaunchDateInfo,
  LaunchSiteTitle,
  LaunchSiteInfo,
  LaunchSiteDetails,
} from "./MissionStarlinkSection.styles";

const MissionStarlinkSection = () => {
  return (
    <MissionSectionWrapper>
      <LeftMissionSection>
        <Mission>MISSION</Mission>
        <MissionName>Starlink-12 (v1.0)</MissionName>
        <Rocket>ROCKET</Rocket>
        <RocketInfo>
          <RocketName>Falcon 9</RocketName>
          <RocketState>RECOVERED</RocketState>
        </RocketInfo>
        <StyledButton>LEARN MORE</StyledButton>
      </LeftMissionSection>

      <RightMissionSection>
        <LaunchDateTitle>LAUNCH DATE</LaunchDateTitle>
        <LaunchDateInfo>24 Jan 2021</LaunchDateInfo>
        <LaunchSiteTitle>LAUNCH SITE</LaunchSiteTitle>

        <LaunchSiteInfo>KSC LC 39A</LaunchSiteInfo>

        <LaunchSiteDetails>link add href</LaunchSiteDetails>
      </RightMissionSection>
    </MissionSectionWrapper>
  );
};

export default MissionStarlinkSection;
