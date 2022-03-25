import React from "react";
import { Button, Grid, Typography, styled } from "@mui/material";
import SearchStepHeader from "../../organisms/searchStepperHeader";
import Autocomplete, {
  AutocompleteOptionsInterface,
} from "../../organisms/autocomplete";
import Image from "../../atoms/image";
import GreenCommuteLogo from "../../../assets/logo/logo.svg";
import theme from "../../../theme";
import DetailsImage from "../../molecules/detailsImage";
import DetailsData from "../../molecules/detailsData";
import { stepperHeadings, landingPageHeading } from "../../../constants/index";
import Link from "../../atoms/link";

type LandingPageProps = {
  currentPage: number;
  searchLabel: string;
  handleBack?: any;
  handleNext?: any;
  autocompleteOptions: any[];
  handleCallback?: any;
  isInputSet: boolean;
  detailsLabelLine1: string;
  detailsLabelLine2: string;
  inputValues: string[];
  inputValuesResult: string[];
  isInputValueChip: boolean;
  autocompletePlaceholder: string;
  imageCaptionLine1: string;
  imageCaptionLine2: string;
  image: any;
  handleInputChange?: (event: React.SyntheticEvent, value: string) => void;
  handleChange?: any;
};

//Need to check how to use atom button
const StyledButton = styled(Button)({
  textTransform: "none",
  width: 140,
  height: 46,
  borderRadius: 8,
});

const LandingPage = (props: LandingPageProps) => {
  return (
    <Grid container id="LandingPage">
      <Grid item direction="column" xs={8}>
        <Grid
          container
          direction="row"
          paddingLeft="100px"
          justifyContent="flex-start"
          alignItems="flex-start"
          marginTop="32px"
          marginBottom="90px"
        >
          <Grid item>
            <Image src={GreenCommuteLogo} alt="Green Commute Logo" />
          </Grid>

          <Grid container>
            <SearchStepHeader
              stepperHeadings={stepperHeadings}
              currentPage={props.currentPage}
            />
          </Grid>

          <Grid
            width="672px"
            height="96px"
            marginTop="72px"
            marginBottom="64px"
          >
            <Typography variant="h1">{landingPageHeading}</Typography>
          </Grid>

          <Grid container marginTop="64px" marginBottom="8px">
            <Typography variant="subtitle1" color={theme.palette.text.primary}>
              {props.searchLabel}
            </Typography>
          </Grid>

          <Grid container marginTop="8px">
            <Autocomplete
              placeholder={props.autocompletePlaceholder}
              autocompleteOptions={props.autocompleteOptions}
              isInputValueChip={props.isInputValueChip}
              callback={props.handleCallback}
              onInputChange={props.handleInputChange}
              onChange={props.handleChange}
              
            />
          </Grid>

          <Grid container spacing={2} marginTop="36px">
            {props.currentPage > 1 && (
              <Grid item>
                <StyledButton
                  data-testid="LandingPageBackButton"
                  onClick={props.handleBack}
                  variant="outlined"
                >
                  Back
                </StyledButton>
              </Grid>
            )}
            <Grid item>
              <StyledButton
                data-testid="LandingPageNextButton"
                onClick={props.handleNext}
                variant="contained"
              >
                Next
              </StyledButton>
            </Grid>
          </Grid>

          <Grid container marginTop="100px">
            <Link component="button" variant="subtitle1">
              Skip
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* add color from theme */}
      <Grid item xs={4} sx={{ backgroundColor: "#EFFEFF" }}>
        <Grid
          height="768px"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {!props.isInputSet && (
            <Grid item>
              <DetailsImage
                imageCaptionLine1={props.imageCaptionLine1}
                imageCaptionLine2={props.imageCaptionLine2}
                image={props.image}
              />
            </Grid>
          )}

          {props.isInputSet && (
            <Grid item>
              <DetailsData
                values={props.inputValuesResult}
                valuesTag={props.inputValues}
                labelLine1={props.detailsLabelLine1}
                labelLine2={props.detailsLabelLine2}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
