import * as React from "react";
import LandingPage from "../../templates/landingPage";
import { jobCount, pageDetails } from "../../../constants/index";
import image from "../../../assets/images/jobs.svg";
import { useAxios } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../../context/userDetails";

type HomePageProps = {};

const JobSkillsPage = (props: HomePageProps) => {

  const numberOfInputs = 2

  const { userData, setUserData } = React.useContext(UserDataContext);

  let detailsData = " ";

  if (userData.jobLocations) {
    detailsData = userData.jobLocations[0];
    if (userData.jobLocations[1]) {
      detailsData += " & " + userData.jobLocations[1];
    }
  }

  const navigate = useNavigate();

  const [userInputValue, setUserInputValue] = React.useState<string[]>([]);

  const { response } = useAxios(
    {
      method: "GET",
      url: "/skills",
    },
    []
  );

  const autocompleteOptions: any = [];

  async function options() {
    try {
      var data = await response;
      for (const skill of data) {
        autocompleteOptions.push({formatted: skill.name});
        console.log(autocompleteOptions)
      }
    } catch (err) {
      console.log(err);
    }
  }
  options();

  const [userInputResult, setUserInputResult] = React.useState<string[]>([]);

  const [isInputSet, setIsInputSet] = React.useState(false);

  const handleNext = () => {
    if (isInputSet) {
      navigate("/searchJob");
      setUserData({ ...userData, jobSkills: userInputValue });
    } else alert("Enter the fields!!");
  };
  const handleBack = () => {
    navigate("/job-location");
  };

  const handleChange = (event: any, value: any) => {
    if (value.length > numberOfInputs) {
      alert("You can enter only " + numberOfInputs + " input(s)");
    } else {
      let temparr: string[] =[]
      for(let option of value){
        temparr.push(option.formatted)
      }
      handleCallback(temparr);
    }
  };

  const handleCallback = (searchResult: string[]) => {
    if (searchResult.length == 0) {
      setIsInputSet(false);
    } else {
      setUserInputValue(searchResult);
      setIsInputSet(true);
      let numberOfJobs: number = 0;

      for (let serachValue of searchResult) {
        for (let skill of jobCount) {
          if (serachValue == skill.name) {
            numberOfJobs += skill.count;
          }
        }
      }

      setUserInputResult([numberOfJobs.toString()]);
    }
  };

  return (
    <LandingPage
      currentPage={pageDetails[2].pageNumber}
      searchLabel={pageDetails[2].searchLabel}
      autocompleteOptions={autocompleteOptions}
      isInputSet={isInputSet}
      detailsLabelLine1={pageDetails[2].detailsLabelLine1 + detailsData}
      detailsLabelLine2={pageDetails[2].detailsLabelLine2}
      inputValues={[]}
      inputValuesResult={userInputResult}
      isInputValueChip={true}
      autocompletePlaceholder={pageDetails[2].autocompletePlaceholder}
      handleNext={handleNext}
      handleBack={handleBack}
      handleChange={handleChange}
      imageCaptionLine1={pageDetails[2].imageCaptionLine1}
      imageCaptionLine2={pageDetails[2].imageCaptionLine2}
      image={image}
    />
  );
};

export default JobSkillsPage;
