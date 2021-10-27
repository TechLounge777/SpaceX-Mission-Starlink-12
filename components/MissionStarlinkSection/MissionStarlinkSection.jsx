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
  LaunchDateInfoShort,
  LaunchDateInfoLong,
  LaunchSiteTitle,
  LaunchSiteInfo,
  LaunchSiteDetails,
} from "./MissionStarlinkSection.styles";

const MissionStarlinkSection = ({ starlink12 }) => {
  let newLaunchApiDate = starlink12.launch_date_local;
  let timestamp = new Date(newLaunchApiDate).getTime();
  let Day = new Date(timestamp).getDate();
  let Month = new Date(timestamp).toLocaleString("en-US", { month: "short" });
  let Year = new Date(timestamp).getFullYear();
  let newDateFormat = `${Day} ${Month} ${Year}`;

  return (
    <MissionSectionWrapper>
      <LeftMissionSection>
        <Mission>MISSION</Mission>
        <MissionName>{starlink12.mission_name}</MissionName>
        <Rocket>ROCKET</Rocket>
        <RocketInfo>
          <RocketName>{starlink12.rocket.rocket_name}</RocketName>
          <RocketState>RECOVERED</RocketState>
        </RocketInfo>
        <StyledButton>LEARN MORE</StyledButton>
      </LeftMissionSection>

      <RightMissionSection>
        <LaunchDateTitle>LAUNCH DATE</LaunchDateTitle>
        <LaunchDateInfoShort>{newDateFormat}</LaunchDateInfoShort>
        <LaunchDateInfoLong>{starlink12.launch_date_local}</LaunchDateInfoLong>
        <LaunchSiteTitle>LAUNCH SITE</LaunchSiteTitle>

        <LaunchSiteInfo>{starlink12.launch_site.site_name}</LaunchSiteInfo>

        <LaunchSiteDetails>
          {starlink12.launch_site.site_name_long}
        </LaunchSiteDetails>
      </RightMissionSection>
    </MissionSectionWrapper>
  );
};

export default MissionStarlinkSection;
