import Typography from "../../../atoms/typography";
import React, { useState } from "react";
import { CommuteRoutesProps, RouteTabType } from "../props";

import {
  LocationDiv,
  Locations,
  LocationWrapper,
  Margin,
  RideInfo,
  RouteButton,
  RoutesHead,
  RoutesIcons,
  StyledDivider,
  Wrapper,
} from "../styles";

import Avatar from "../../../atoms/avatar";
import Image from "../../../atoms/image";
import Icon from "../../../atoms/icon";

import back from "../../../../assets/images/back.svg";
import current from "../../../../assets/images/current.svg";
import location from "../../../../assets/images/location.svg";
import swap from "../../../../assets/images/swap.svg";
import bus from "../../../../assets/images/bus.svg";
import busWhite from "../../../../assets/images/bus-white.svg";
import car from "../../../../assets/images/car.svg";
import carWhite from "../../../../assets/images/car-white.svg";
import rupee from "../../../../assets/icons/rupee.svg";
import ellipse from "../../../../assets/icons/ellipse.svg";

import theme from "../../../../theme";
import { CarTab } from "./CarTab";
import { BusTab } from "./BusTab";
import { fetchRoutes } from "../hooks";
import Grid from "@mui/material/Grid";

export const JobRoutes: React.FC<CommuteRoutesProps> = ({
  jobId,
  userId,
  routeTabType,
  onClick,
}) => {
  const [tab, setTab] = useState<RouteTabType>(routeTabType);

  const handleRouteTabChange = (tabValue: RouteTabType) => {
    setTab(tabValue);
  };

  const {
    currentLocation,
    jobLocation,
    routesDescription,
    rate,
    distance,
    duration,
  } = fetchRoutes(jobId, userId);

  return (
    <>
      <Margin>
        <Wrapper>
          <RoutesHead>
            <RouteButton variant="text" onClick={onClick}>
              <Image src={back} alt="go" />
            </RouteButton>
            <Typography variant="body1">Common Routes</Typography>
          </RoutesHead>
          <LocationWrapper>
            <LocationDiv>
              <Locations>
                <Image src={current} alt="current"></Image>
                <Typography variant="caption2">{currentLocation}</Typography>
              </Locations>
              <Grid direction="column" spacing="0px" marginTop="-8px" justifyContent="flex-start" padding="0px" marginLeft="10px" marginBottom="10px">
                <Grid item maxHeight="8px"><Icon src={ellipse} /></Grid>
                <Grid item maxHeight="8px"><Icon src={ellipse} /></Grid>
                <Grid item maxHeight="8px"><Icon src={ellipse} /></Grid>
              </Grid>
              <Locations>
                <Image src={location} alt="location"></Image>
                <Typography variant="caption2">{jobLocation}</Typography>
              </Locations>
            </LocationDiv>
            <div>
              <Image src={swap} alt="swap"></Image>
            </div>
          </LocationWrapper>
          <RoutesIcons>
            <RouteButton
              variant="text"
              onClick={() => handleRouteTabChange("bus")}
            >
              <Avatar
                sx={{
                  background:
                    tab === "bus" ? theme.palette.primary.main : "transparent",
                }}
              >
                <Icon src={tab === "bus" ? busWhite : bus}></Icon>
              </Avatar>
            </RouteButton>

            <RouteButton
              variant="text"
              onClick={() => handleRouteTabChange("car")}
            >
              <Avatar
                sx={{
                  background:
                    tab === "car" ? theme.palette.primary.main : "transparent",
                }}
              >
                <Icon src={tab === "car" ? carWhite : car}></Icon>
              </Avatar>
            </RouteButton>
          </RoutesIcons>
          <StyledDivider variant="fullWidth"></StyledDivider>
          <RideInfo>
            <Typography variant="body2">{routesDescription}</Typography>
            <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing="7px">
                <Grid item>
                  <Icon src={rupee} />
                </Grid>
                <Grid item>
                  <Typography variant="caption2" color="text.secondary">
                    {rate}
                  </Typography>
                </Grid>
                <Grid item marginBottom="2px" marginLeft="3px"><Icon src={ellipse} /></Grid>
                <Grid item><Typography variant="caption2" color="text.secondary">
                  {distance}
                </Typography></Grid>
                <Grid item marginBottom="2px" marginLeft="7px"><Icon src={ellipse} /></Grid>
                <Grid item>
                  <Typography variant="caption2" color="text.secondary">
                    {duration}
                  </Typography>
              </Grid>           
            </Grid>
          </RideInfo>
        </Wrapper>
        {tab === "car" ? (
          <CarTab jobId={jobId} userId={userId}></CarTab>
        ) : (
          <BusTab jobId={jobId} userId={userId}></BusTab>
        )}
      </Margin>
    </>
  );
};
