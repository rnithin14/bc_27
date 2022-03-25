import Typography from "../../atoms/typography";
import React from "react";
import Image from "../../atoms/image";
import { CustomListProps } from "./props";
import { ContentDiv, RateDiv, Wrapper } from "./styles";
import Button from "../../atoms/button";
import RsIcon from "../../../assets/images/rs.svg";

const List: React.FC<CustomListProps> = ({
  company,
  src,
  rate,
  className,
  onClick,
}) => {
  return (
    <Wrapper data-testid="card" className={className}>
      <div>
        <Image src={src} alt={company}></Image>
      </div>
      <ContentDiv>
        <div>
          <Typography variant="caption1" color="text.primary">
            {company}
          </Typography>
        </div>
        <RateDiv>
          <Typography variant="caption2" color="text.secondary">
            Approximately
          </Typography>
          <div>
            <Image src={RsIcon} alt="currency"></Image>
            <Typography variant="caption2" color="text.primary">
              {rate}
            </Typography>
          </div>
        </RateDiv>
      </ContentDiv>
      <Button variant="text" onClick={onClick}>
        <Typography variant="caption1" color="primary.400">
          Book Now
        </Typography>
      </Button>
    </Wrapper>
  );
};

export default List;
