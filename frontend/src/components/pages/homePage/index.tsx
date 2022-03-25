import * as React from "react";
import LandingPage from "../../templates/landingPage";
import { pageDetails } from "../../../constants/index";
import image from "../../../assets/images/stay.svg";
import { useAxios } from "../../../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../../context/userDetails";
import { AutocompleteOptionsInterface } from "../../organisms/autocomplete";
import axios from "axios";

type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  const numberOfInputs = 1;

  const { userData, setUserData } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  const [userText, setUserText] = React.useState<string>("");

  const [userInputValue, setUserInputValue] = React.useState<string[]>([]);

  const [userInputResult, setUserInputResult] = React.useState<string[]>([]);

  const [isInputSet, setIsInputSet] = React.useState(false);

  const [aqi, setAqi] = React.useState<any>(null);

  const { response } = useAxios(
    {
      method: "GET",
      url: `/locations/${userText}`,
    },
    [userText]
  );

  const [autocompleteOptions, setAutocompleteOptions] = React.useState<any>([]);

  useEffect(() => {
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
      navigate("/job-location");
      setUserData({ ...userData, userLocation: userInputValue[0] });
    } else alert("Enter the fields!!");
  };

  const handleCallback = (searchResult: AutocompleteOptionsInterface[]) => {
    if (searchResult.length == 0) {
      setIsInputSet(false);
    } else {
      let aqiValues: string[] = [];
      let temparr: string[] = [];
      for (let value of searchResult) {
        temparr.push(value.formatted);
        axios
          .get("http://18.119.118.9:8090/v1/aqi/" + value.lat + "," + value.lon)
          .then((res) => {
            aqiValues.push(res.data);
            setUserInputValue(temparr);
            setIsInputSet(true);
            setUserInputResult(aqiValues);
            console.log(aqiValues);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const handleChange = (event: any, value: AutocompleteOptionsInterface[]) => {
    if (value.length > numberOfInputs) {
      alert("You can enter only " + numberOfInputs + " input(s)");
    } else {
      let temparr: string[] = [];
      for (let option of value) {
        temparr.push(option.formatted);
      }
      handleCallback(value);
    }
  };

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setUserText(value);
  };

  return (
    <LandingPage
      currentPage={pageDetails[0].pageNumber}
      searchLabel={pageDetails[0].searchLabel}
      autocompleteOptions={autocompleteOptions}
      isInputSet={isInputSet}
      detailsLabelLine1={pageDetails[0].detailsLabelLine1}
      detailsLabelLine2={pageDetails[0].detailsLabelLine2}
      inputValues={[""]}
      inputValuesResult={userInputResult}
      isInputValueChip={false}
      autocompletePlaceholder={pageDetails[0].autocompletePlaceholder}
      handleNext={handleNext}
      handleChange={handleChange}
      handleInputChange={handleInputChange}
      imageCaptionLine1={pageDetails[0].imageCaptionLine1}
      imageCaptionLine2={pageDetails[0].imageCaptionLine2}
      image={image}
    />
  );
};

export default HomePage;
