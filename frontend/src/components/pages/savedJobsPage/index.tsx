import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Layout from "../../templates/layout/index";
import Card from "../../molecules/card/index";
import TypographyTag from "../../atoms/typography/index";
import { useAxios } from "../../../hooks";
import JobDetails from "../../organisms/jobDetail/index";
import theme from "../../../theme";

const Content = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto min-content",
  width: "100%",
});

const Description = styled("div")({
  width: "420px",
  paddingLeft: "12px",
});

const Wrapper = styled("div")({
  padding: "40px 60px 204px 60px",
  background: theme.palette.grey[100],
  minHeight: "100%",
});
const ActiveCard = styled(Card)({
  border: `2px solid ${theme.palette.primary[200]}`,
});

interface Pageprops {
  onChange?: any;
  userLocation?: string;
}

const SavedJobsPage: React.FC<Pageprops> = ({ onChange, userLocation }) => {
  const [open, setOpen] = React.useState(false);
  const [jobId, setJobId] = React.useState<number>(0);
  const { response } = useAxios(
    {
      method: "GET",
      url: "/users/1/jobs",
    },
    []
  );
  console.log(response);
  const handleEvent = (id: number) => {
    setOpen(true);
    setJobId(id);
  };

  const useStyled = (id: number) => {
    return jobId === id ? ActiveCard : Card;
  };

  const cards = (jobs: any) => {
    return jobs?.map((job: any, index: any) => {
      const StyledCard = useStyled(job.id);

      return (
        <Grid key={index} margin={0} item>
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
        </Grid>
      );
    });
  };

  return (
    <Layout location={userLocation} onChange={onChange}>
      <Wrapper>
        <TypographyTag variant="h3" children="Saved Jobs" />
        <Content>
          <Grid container direction="column" spacing={4} data-testid="cards">
            {cards(response?.[0].jobs)}
          </Grid>

          <Description>
            {open && (
              <JobDetails
                tabType="description"
                userId={1}
                jobId={jobId}
                routeTabType="bus"
                jobDescription={""}
                about={""}
              ></JobDetails>
            )}
          </Description>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default SavedJobsPage;
