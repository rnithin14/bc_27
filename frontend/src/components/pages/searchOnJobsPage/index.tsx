import React from "react";
import Layout from "../../templates/layout/index";
import Typography from "../../atoms/typography/index";
import {
  Autocomplete,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Popper,
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
import JobDetails from "../../organisms/jobDetail/index";
import Chip from "../../atoms/chip/index";
import { Chip as MuiChip } from "@mui/material";
import { UserDataContext } from "../../../context/userDetails";
import MenuItem from "../../atoms/menuItem/index";
import { createStyles, makeStyles } from "@mui/styles";
import { Locations } from "../../organisms/jobDetail/styles";

const FormattedTextField = styled(TextField)({
  padding: "12px 28px",
});

const StyledDiv = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto max-content auto",
  backgroundColor: theme.palette.background.default,
  alignItems: "center",
  borderRadius: "32px",
});

const GridVertical = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(4),
});

const GridHorizontal = styled("div")({
  display: "grid",
  gap: theme.spacing(4),
  height: "max-content",
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
const Content = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto min-content",
  width: "100%",
  gap: theme.spacing(4),
});
const ActiveCard = styled(Card)({
  border: `2px solid ${theme.palette.primary[200]}`,
});

const Description = styled("div")({ width: "420px" });

const Chips = styled(Chip)({
  borderRadius: "8px",
  backgroundColor: "white",
});
const ChipStyled = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5,max-content)",
  gap: "8px",
  alignItems: "center",
  margin: `${theme.spacing(3)} 0 ${theme.spacing(5)} 0`,
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiAutocomplete-listbox": {
        backgroundColor: "white",

        "& li:nth-child(even)": { backgroundColor: "white" },

        "& li:nth-child(odd)": { backgroundColor: "white" },
      },
    },
  })
);

const CustomPopper = function (props: any) {
  const classes = useStyles();

  return <Popper {...props} className={classes.root} placement="bottom" />;
};
const SearchOnJobsPage: any = () => {
  const { userData } = React.useContext(UserDataContext);
  const [jobId, setJobId] = React.useState<any>();

  const getInput = (input: any) => {
    if (input === undefined) return [];
    else return input;
  };

  const [location, setLocation] = React.useState<any>(
    getInput(userData.jobLocations)
  );

  const [skill, setSkill] = React.useState<any>(getInput(userData.jobSkills));

  const handleChangeLocation = (event: any, value: any) => {
    console.log(value);
    setLocation(value);
    handleSearch();
  };

  const handleChangeSkill = (event: any, value: any) => {
    console.log(value);
    setSkill(value);
    handleSearch();
  };
  const [click, setClick] = React.useState<any>(false);

  const handleSearch = () => {
    setClick(!click);
  };
  const skillUrl = (skills: any) => {
    var tempSkillUrl: any = "";
    for (let value = 0; value < skills.length; value++) {
      tempSkillUrl += `&skills_like=${skills[value]}`;
    }
    return tempSkillUrl;
  };
  const locationUrl = (locations: any) => {
    var tempUrl: any = "";
    for (let value = 0; value < locations.length; value++) {
      tempUrl += `&locations_like=${locations[value]}`;
    }
    return tempUrl;
  };
  const [filterDist, setFilterDist] = React.useState<any>("");
  const { response } = useAxios(
    {
      url: `/jobs`,
      method: "get",
    },
    [click]
  );
  console.log(response);
  const [distances, setDistances] = React.useState<any>([]);

  const filterUrlForDistance = (dist: any) => {
    const url: any = [
      "&distance_like=0 - 10 kms",
      "&distance_like=11 - 20 kms",
      "&distance_like=21 - 30 kms",
      "&distance_like=31 - 40 kms",
    ];
    var tempUrl: any = "";

    dist.map((option: any, index: number) => {
      if (option) tempUrl += url[index];
    });

    setFilterDist(tempUrl);
    setClick(!click);
  };

  const handleCallback = (data: any) => {
    const dist: any = [
      data.distance["0-10"],
      data.distance["11-20"],
      data.distance["21-30"],
      data.distance["31-40"],
    ];
    setDistances(dist);

    filterUrlForDistance(dist);
  };

  const handleDelete = (index: number) => () => {
    distances[index] = false;
    setDistances(distances);
    filterUrlForDistance(distances);
  };

  const handleClearAll = () => {
    setDistances([]);
    setFilterDist("");
    setClick(!click);
  };

  const displayClearAll = () => {
    if (filterDist === "") {
      return false;
    } else {
      return true;
    }
  };

  const locationOptions = [
    "Hyderabad",
    "Mumbai",
    "Banglore",
    "Delhi",
    "Chennai",
  ];
  const skillOptions = [
    "Angular",
    "Uxdesign",
    "UiDesign",
    "Spring",
    "React",
    "NodeJs",
    "VersionControl",
    "Java",
    "Flutter",
    "MachineLearning",
  ];

  const handleEvent = (id: number) => {
    setJobId(id);
  };

  const JobGrid = jobId ? GridHorizontal : GridVertical;

  const useStyled = (id: number) => {
    return jobId === id ? ActiveCard : Card;
  };

  return (
    <Layout location="East Marredpally, Secunderabad">
      <Grid container padding="40px 60px 204px 60px" bgcolor="grey.100">
        <Grid container>
          <Typography variant="h3">Find Jobs</Typography>
        </Grid>
        <Wrapper>
          <StyledDiv>
            <Autocomplete
              data-testid="autofill"
              fullWidth={true}
              options={skillOptions}
              multiple
              onChange={handleChangeSkill}
              value={skill}
              renderTags={(value: string[], getTagProps) => {
                return value.map((option: string, index: number) => (
                  <MuiChip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ));
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    style={{ padding: "12px 28px" }}
                    variant="standard"
                    placeholder="Search skills"
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <>
                          <InputAdornment position="start">
                            <WorkOutlineIcon />
                          </InputAdornment>
                          {params.InputProps.startAdornment}
                        </>
                      ),

                      disableUnderline: true,
                    }}
                  />
                );
              }}
              PopperComponent={CustomPopper}
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
              <Autocomplete
                data-testid="autofill"
                fullWidth={true}
                multiple
                options={locationOptions}
                selectOnFocus
                onChange={handleChangeLocation}
                value={location}
                renderTags={(value: string[], getTagProps) =>
                  value.map((option: string, index: number) => (
                    <MuiChip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => {
                  return (
                    <TextField
                      {...params}
                      style={{ padding: "12px 28px" }}
                      variant="standard"
                      placeholder="Search Location"
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                          <>
                            <InputAdornment position="start">
                              <LocationOnOutlinedIcon />
                            </InputAdornment>
                            {params.InputProps.startAdornment}
                          </>
                        ),

                        disableUnderline: true,
                      }}
                    />
                  );
                }}
                PopperComponent={CustomPopper}
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
                onClick={handleSearch}
              >
                <Icon src={SearchIcon}></Icon>
              </IconButton>
            </LocationDiv>
          </StyledDiv>
          <Filter handleEvent={handleCallback} />
        </Wrapper>

        <Grid container direction="column" paddingTop="36px">
          <Typography variant="h3" sx={{ color: "text.primary" }}>
            Job list
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Based on your search
          </Typography>
          <ChipStyled>
            {distances[0] && (
              <Chips label="0 - 10 kms" handleDelete={handleDelete(0)} />
            )}
            {distances[1] && (
              <Chips label="11 - 20 kms" handleDelete={handleDelete(1)} />
            )}
            {distances[2] && (
              <Chips label="21 - 30 kms" handleDelete={handleDelete(2)} />
            )}
            {distances[3] && (
              <Chips label="31 - 40 kms" handleDelete={handleDelete(3)} />
            )}

            {displayClearAll() && (
              <MenuItem onClick={handleClearAll} to="">
                <Typography variant="body1" sx={{ color: "primary.300" }}>
                  Clear All
                </Typography>
              </MenuItem>
            )}
          </ChipStyled>
        </Grid>
        <Content>
          <JobGrid>
            {response?.map((job: any, index: any) => {
              const StyledCard = useStyled(job.id);
              return (
                <StyledCard
                  key={index}
                  skill={job.jobTitle}
                  src={job.company.logo}
                  orientation={jobId ? "vertical" : "horizontal"}
                  company={job.company.name}
                  location={job.locations[0].city}
                  postTime={job.datePosted}
                  routes={["metro", "bus"]}
                  sx={{ height: "max-content" }}
                  onClick={() => handleEvent(job.id)}
                />
              );
            })}
          </JobGrid>
          {jobId !== undefined && (
            <Description>
              <JobDetails
                tabType="description"
                userId={1}
                jobId={jobId}
                routeTabType="bus"
                jobDescription={""}
                about={""}
              ></JobDetails>
            </Description>
          )}
        </Content>
      </Grid>
    </Layout>
  );
};

export default SearchOnJobsPage;
