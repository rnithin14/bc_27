import React from "react";
import { RouteTabProps } from "../props";

import { CustomListProps } from "../../../molecules/list/props";

import { StyledList } from "../styles";
import { fetchCarRides } from "../hooks";

export const CarTab: React.FC<RouteTabProps> = ({ jobId, userId }) => {
  const { rides } = fetchCarRides(jobId, userId);
  return (
    <>
      {rides.map((item: CustomListProps, key: number) => (
        <StyledList {...item} key={key}></StyledList>
      ))}
    </>
  );
};
