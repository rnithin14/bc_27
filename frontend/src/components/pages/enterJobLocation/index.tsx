import * as React from "react";
import LandingPage from "../../templates/landingPage";
import { pageDetails } from "../../../constants/index";
import { useAxios } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import work from "../../../assets/images/work.svg";
import { UserDataContext } from "../../../context/userDetails";
import { AutocompleteOptionsInterface } from "../../organisms/autocomplete";
import axios from "axios";

type JobLocationProps = {};

const JobLocationPage = (props: JobLocationProps) => {
  const numberOfInputs = 2;

  const [userText, setUserText] = React.useState<string>("");

  const { userData, setUserData } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const [userInputValue, setUserInputValue] = React.useState<string[]>([]);

  const [userInputResult, setUserInputResult] = React.useState<string[]>([]);

  const [isInputSet, setIsInputSet] = React.useState(false);

  const { response } = useAxios(
    {
      method: "GET",
      url: `/locations/${userText}`,
    },
    [userText]
  );

  const [autocompleteOptions, setAutocompleteOptions] = React.useState<any>([]);

  React.useEffect(() => {
    const tempOptions: any[] = [];
    if (response) {
      for (let value of response.results) {
        tempOptions.push(value);
      }
      setAutocompleteOptions(tempOptions);
    }
  }, [response]);

  const handleNext = () => {
    if (isInputSet) {
      navigate("/job-skills");
      setUserData({ ...userData, jobLocations: userInputValue });
    } else alert("Enter the fields!!");
  };
  const handleBack = () => {
    navigate("/");
  };

  const handleChange = async (
    event: any,
    searchResult: AutocompleteOptionsInterface[]
  ) => {
    if (searchResult.length == 0) {
      setIsInputSet(false);
    } else {
      let aqiValues: string[] = [];
      let temparr: string[] = [];
      for (let value of searchResult) {
        temparr.push(value.formatted);
        await axios
          .get("http://18.119.118.9:8090/v1/aqi/" + value.lat + "," + value.lon)
          .then((res) => {
            aqiValues.push(res.data);
            setUserInputResult(aqiValues);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setUserInputValue(temparr);
      setIsInputSet(true);
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setUserText(value);
  };

  return (
    <LandingPage
      currentPage={pageDetails[1].pageNumber}
      searchLabel={pageDetails[1].searchLabel}
      autocompleteOptions={autocompleteOptions}
      isInputSet={isInputSet}
      detailsLabelLine1={pageDetails[1].detailsLabelLine1}
      detailsLabelLine2={pageDetails[1].detailsLabelLine2}
      inputValues={userInputValue}
      inputValuesResult={userInputResult}
      isInputValueChip={true}
      autocompletePlaceholder={pageDetails[1].autocompletePlaceholder}
      handleNext={handleNext}
      handleBack={handleBack}
      handleChange={handleChange}
      handleInputChange={handleInputChange}
      imageCaptionLine1={pageDetails[1].imageCaptionLine1}
      imageCaptionLine2={pageDetails[1].imageCaptionLine2}
      image={work}
    />
  );
};

export default JobLocationPage;
