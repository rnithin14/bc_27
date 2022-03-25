import React from "react";
import { RouteTabProps } from "../props";
import Typography from "../../../atoms/typography";
import { StyledLink } from "../styles";
import { fetchBusRides } from "../hooks";
import Image from "../../../atoms/image";

export const BusTab: React.FC<RouteTabProps> = ({ userId, jobId }) => {
  const { url, src } = fetchBusRides(jobId, userId);

  return (
    <>
      <Image src={src} alt="map"></Image>
      <div>
        <StyledLink to={url}>
          <Typography variant="caption1" color="primary.main">
            View in Google Maps
          </Typography>
        </StyledLink>
      </div>
    </>
  );
};
