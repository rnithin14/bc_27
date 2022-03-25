import Typography from "../../../atoms/typography";
import React from "react";
import { JobDescriptionProps } from "../props";

import { ContentDiv, Margin, StyledButton } from "../styles";

import Image from "../../../atoms/image";
import go from "../../../../assets/images/go.svg";

export const JobDescription: React.FC<JobDescriptionProps> = ({
  jobDescription,
  about,
  onClick,
}) => {
  return (
    <>
      <Margin>
        <ContentDiv>
          <Typography variant="body1" color="text.primary">
            Description
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {jobDescription}
          </Typography>
        </ContentDiv>
        <ContentDiv>
          <Typography variant="body1" color="text.primary">
            About the Company
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {about}
          </Typography>
        </ContentDiv>
      </Margin>
      <StyledButton
        endIcon={<Image src={go} alt="go" />}
        variant="text"
        onClick={onClick}
      >
        <Typography variant="body1" color="primary.main">
          Green Commute Routes
        </Typography>
      </StyledButton>
    </>
  );
};
