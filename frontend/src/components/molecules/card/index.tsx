import Typography from "../../atoms/typography";
import React from "react";
import Image from "../../atoms/image";
import {
  ButtonDiv,
  ContentDiv,
  LogoDiv,
  MoreDiv,
  RoutesDescription,
  RoutesDiv,
  RoutesImageDiv,
  StyledButton,
  TimeDiv,
  LogoImage,
} from "./styles";
import { CustomCardProps } from "./props";
import { useStyle } from "./hooks";
import more from "../../../assets/images/more.svg";

import bike from "../../../assets/images/bike.svg";
import train from "../../../assets/images/train.svg";
import car from "../../../assets/images/car.svg";
import bus from "../../../assets/images/bus.svg";

const commuteMode = (mode: string) => {
  switch (mode) {
    case "bike":
      return bike;
    case "car":
      return car;
    case "bus":
      return bus;
    case "metro":
      return train;
  }
};

const Card: React.FC<CustomCardProps> = ({
  company,
  location,
  postTime,
  routes,
  src,
  skill,
  orientation,
  className,
  saved,
  onClick,
  onSave,
  onUnsave,
  onApply,
}) => {
  const Wrapper = useStyle(orientation);
  return (
    <Wrapper onClick={onClick} data-testid="card" className={className}>
      <LogoDiv>
        <LogoImage src={src} alt={company}></LogoImage>
      </LogoDiv>
      <MoreDiv>
        <Image src={more} alt="more"></Image>
      </MoreDiv>
      <ContentDiv>
        <div>
          <Typography variant="subtitle1" color="text.primary">
            {skill}
          </Typography>
        </div>
        <div>
          <Typography variant="caption2" color="gamma.200">
            {company}
          </Typography>
        </div>
        <div>
          <Typography variant="caption2" color="text.secondary">
            {location}
          </Typography>
        </div>
      </ContentDiv>
      {orientation !== "horizontalButton" && (
        <RoutesDiv>
          <RoutesDescription>
            <Typography variant="caption2" color="text.primary">
              Commute routes available :
            </Typography>
          </RoutesDescription>

          <RoutesImageDiv>
            {routes.map((item: string, index: number) => (
              <Image src={commuteMode(item)} alt="route" key={index} />
            ))}
          </RoutesImageDiv>
        </RoutesDiv>
      )}
      {orientation === "horizontalButton" && (
        <ButtonDiv>
          {saved === true ? (
            <StyledButton variant="outlined" onClick={onUnsave}>
              <Typography variant="caption1">Unsave</Typography>
            </StyledButton>
          ) : (
            <StyledButton variant="outlined" onClick={onSave}>
              <Typography variant="caption1">Save</Typography>
            </StyledButton>
          )}
          <StyledButton variant="contained" onClick={onApply}>
            <Typography variant="caption1">Apply</Typography>
          </StyledButton>
        </ButtonDiv>
      )}
      <TimeDiv
        style={orientation === "horizontalButton" ? { textAlign: "left" } : {}}
      >
        <Typography variant="caption1" color="text.secondary">
          {postTime}
        </Typography>
      </TimeDiv>
    </Wrapper>
  );
};

export default Card;
