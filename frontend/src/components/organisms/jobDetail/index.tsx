import axios from "axios";
import React, { useState } from "react";
import { useAxios } from "../../../hooks";
import ResumeUploadModal from "../../molecules/resumeUploadModal";
import UploadSuccessfulModal from "../../molecules/uploadSuccessfulModal";

import { handleApply, handleSave, handleUnsave } from "./hooks";
import { JobDetailProps, modalType, TabType } from "./props";

import { StyledCard, StyledDivider, Wrapper } from "./styles";
import { JobDescription } from "./tabs/JobDescription";
import { JobRoutes } from "./tabs/JobRoutes";

const JobDetail: React.FC<JobDetailProps> = ({
  tabType,
  jobId,
  userId,
  saved,
  routeTabType,
}) => {
  const [tab, setTab] = useState<TabType>(tabType);
  const [activeModal, setActiveModal] = useState<modalType>("");
  const [saveJobState, setSaveJobState] = useState<boolean | undefined>(saved);
  const [name,setName] = useState<string>("");

  const handleUpload = (event: any) => {
    var formData = new FormData();
    formData.append("file", event.target.files[0]);
    axios
          .post("http://18.119.118.9:8090/v1/upload/", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
          .then((res) => {
            setName(res.data);
            handleApply("success", setActiveModal)
          })
          .catch((err) => {
            console.log(err);
          });
  }

  const handleChange = (tabValue: TabType) => {
    setTab(tabValue);
  };

  const { response } = useAxios(
    {
      method: "GET",
      url: `/jobs/${jobId}`,
    },
    [jobId]
  );

  const savedJob = useAxios(
    {
      method: "GET",
      url: `/savedJobs/${userId}`,
    },
    [saveJobState]
  );

  saved = savedJob.response?.jobs?.some((job: any) => job.id === jobId);
  const jobDescription =
    "Open Text is seeking a talented,personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.";
  const about =
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.";
  return (
    <Wrapper>
      {activeModal === "upload" && (
        <ResumeUploadModal
          onChange={handleUpload}
        ></ResumeUploadModal>
      )}
      {activeModal === "success" && (
        <UploadSuccessfulModal
          userName={name}
          onClick={() => handleApply("", setActiveModal)}
        ></UploadSuccessfulModal>
      )}

      <StyledCard
        orientation="horizontalButton"
        src={response?.company.logo}
        skill={response?.jobTitle}
        company={response?.company.name}
        location={response?.locations[0].city}
        onApply={() => handleApply("upload", setActiveModal)}
        onSave={() =>
          handleSave(
            userId,
            jobId,
            response,
            savedJob,
            setSaveJobState,
            saveJobState
          )
        }
        onUnsave={() =>
          handleUnsave(userId, jobId, savedJob, setSaveJobState, saveJobState)
        }
        postTime={response?.datePosted}
        routes={["metro", "bus"]}
        saved={saved}
      ></StyledCard>
      <StyledDivider variant="fullWidth"></StyledDivider>
      {tab === "description" ? (
        <JobDescription
          about={response?.company.about}
          jobDescription={response?.description}
          onClick={() => handleChange("routes")}
        ></JobDescription>
      ) : (
        <JobRoutes
          userId={userId}
          jobId={jobId}
          routeTabType={routeTabType}
          onClick={() => handleChange("description")}
        ></JobRoutes>
      )}
    </Wrapper>
  );
};

export default JobDetail;
