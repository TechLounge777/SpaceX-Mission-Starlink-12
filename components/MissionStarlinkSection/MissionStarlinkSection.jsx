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

const MissionStarlinkSection = ({ starlink12 }) => {
  let newLaunchApiDate = starlink12.launch_date_local;
  let timestamp = new Date(newLaunchApiDate).getTime();
  let Day = new Date(timestamp).getDate();
  let Month = new Date(timestamp).getMonth() + 1;
  let Year = new Date(timestamp).getFullYear();
  let newDateFormat = `${Day} ${Month} ${Year}`;
  console.log(newDateFormat);

  return (
    <MissionSectionWrapper>
      <LeftMissionSection>
        <Mission>MISSION</Mission>
        <MissionName>{starlink12.mission_name}</MissionName>
        <Rocket>ROCKET</Rocket>
        <RocketInfo>
          <RocketName>{newDateFormat}</RocketName>
          <RocketState>RECOVERED</RocketState>
        </RocketInfo>
        <StyledButton>LEARN MORE</StyledButton>
      </LeftMissionSection>

      <RightMissionSection>
        <LaunchDateTitle>LAUNCH DATE</LaunchDateTitle>
        <LaunchDateInfo>{starlink12.launch_date_local}</LaunchDateInfo>
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
