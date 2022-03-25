import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homePage/index";
import React from "react";
import SavedJobsPage from "./components/pages/savedJobsPage/index";
import JobLocationPage from "./components/pages/enterJobLocation";
import JobSkillsPage from "./components/pages/enterJobSkillsPage";
import SearchOnJobsPage from "./components/pages/searchOnJobsPage";
import { UserDataInterface, UserDataContext } from "./context/userDetails";

const App = () => {
  const [userData, setUserData] = React.useState<UserDataInterface>({});

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserDataContext.Provider value={{ userData, setUserData }}>
          <CssBaseline>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/job-location" element={<JobLocationPage />} />
              <Route path="/job-skills" element={<JobSkillsPage />} />

              <Route
                path="/jobs/saved"
                element={
                  <SavedJobsPage userLocation="East Marredpally, Secunderabad" />
                }
              />
              <Route path="/searchJob" element={<SearchOnJobsPage />} />
            </Routes>
          </CssBaseline>
        </UserDataContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
