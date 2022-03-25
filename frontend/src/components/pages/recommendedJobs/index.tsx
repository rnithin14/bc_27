import React from "react";
import Layout from "../../templates/layout/index";
import Typography from "../../atoms/typography/index";
import {
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "../../molecules/card/index";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "../../../assets/icons/search.svg";
import Icon from "../../atoms/icon";
import Filter from "../../organisms/filter/index";
import theme from "../../../theme";
import { useAxios } from "../../../hooks";

const FormattedTextField = styled(TextField)({
  padding: "16px 28px",
});

const StyledDiv = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto max-content auto",
  backgroundColor: theme.palette.background.default,
  alignItems: "center",
  borderRadius: "32px",
});

const LocationDiv = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto max-content",
  alignItems: "center",
});

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto max-content",
  alignItems: "center",
  width: "100%",
  gap: "17px",
  marginTop: "8px",
});

const RecommendedJobsPage: React.FC<any> = () => {

  const [open, setOpen] = React.useState(false);
  const [jobId, setJobId] = React.useState<any>();

  const { response } = useAxios(
    {
      url: "/jobs?_start=0&_end=8",
      method: "GET",
    },
    jobId
  );


  const handleEvent = (jobId: number) => {
    setOpen(true);
    setJobId(jobId);
  };

  return (
    <Layout location="East Marredpally, Secunderabad">
      <Grid container padding="40px 60px 204px 60px" bgcolor="grey.100">
        <Grid container>
          <Typography variant="h3">Find Jobs</Typography>
        </Grid>
        <Wrapper>
          <StyledDiv>
            <FormattedTextField
              variant="standard"
              data-testid="text-field"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkOutlineIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search Skills"
            />
            <Divider
              orientation="vertical"
              sx={{
                height: "calc(100% - 20px)",
                color: "palette.grey.400",
                margin: "10px 0px",
                boxSizing: "border-box",
              }}
              flexItem
            />
            <LocationDiv>
              <FormattedTextField
                variant="standard"
                data-testid="text-field"
                InputProps={{
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Location"
              />
              <IconButton
                sx={{
                  bgcolor: "primary.300",
                  marginRight: "5px",
                  padding: "13px",
                  height: "44px",
                  width: "44px",
                  "&:hover": {
                    backgroundColor: "primary.300",
                  },
                }}
              >
                <Icon src={SearchIcon}></Icon>
              </IconButton>
            </LocationDiv>
          </StyledDiv>
          <Filter />
        </Wrapper>

        <Grid container direction="column" paddingTop="36px">
          <Typography variant="h3" sx={{ color: "#373C38" }}>
            Recommended for you
          </Typography>
          <Typography variant="body2" sx={{ color: "#656E66" }}>
            Based on your profile, skills and search history.
          </Typography>
        </Grid>
        <Grid
          container
          paddingTop="20px"
          spacing={4}
          columnSpacing={6}
          columns={{ xs: 3, sm: 3, md: 3 }}
        >
          {response?.map((job: any, index: any) => (
            <Grid item key={index}>
              <Card
                skill={job.title}
                src={job.logo}
                orientation="horizontal"
                company={job.company}
                location={job.location}
                postTime={job.datePosted}
                routes={job.commuteMode}
                onClick={() => handleEvent(job.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default RecommendedJobsPage;
