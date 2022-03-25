import { listData } from "../../molecules/list/props";
import map from "../../../assets/images/map.svg";
import Api from "../../../service/Api";
import React from "react";
import { modalType } from "./props";

export const handleSave = (
  userId: number,
  jobId: number,
  job: any,
  savedJobs: any,
  setSaveJobState: any,
  saveJobState: boolean | undefined
) => {
  const jobList = { ...savedJobs?.response };
  const updatedJobList = {
    ...jobList,
    jobs: [...savedJobs?.response.jobs, job],
  };

  return  Api({
    url: `/savedJobs/${userId}`,
    method: "PUT",
    data: { ...updatedJobList },
  })
    .then((res) => {
      setSaveJobState(!saveJobState);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleApply = (
  activeModal: modalType,
  setActiveModal: React.Dispatch<React.SetStateAction<modalType>>
) => {
  setActiveModal(activeModal);
};

export const handleUnsave = (
  userId: number,
  jobId: number,
  savedJobs: any,
  setSaveJobState: any,
  saveJobState: boolean | undefined
) => {
  const index = savedJobs?.response?.jobs?.findIndex((job: any) => {
    return job.id === jobId;
  });
  savedJobs?.response?.jobs?.splice(index, 1);
  return Api({
    url: `/savedJobs/${userId}`,
    method: "PUT",
    data: { ...savedJobs.response },
  })
    .then((res) => {
      setSaveJobState(!saveJobState);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchRoutes = (jobId: number, userId: number) => {
  return {
    jobId: "id",
    currentLocation: "E Marredpally, Secunderabad",
    jobLocation: "Hitech City, Telanagana, Hyderabad.",
    routesDescription: "Catch a blue line metro towards Raidurg ",
    rate: "100",
    distance: "25 Kms",
    duration: "1 hr 20 mins",
    routeTabType: "bus",
  };
};

export const fetchCarRides = (jobId: number, userId: number) => {
  return {
    rides: [{ ...listData }, { ...listData }, { ...listData }],
  };
};

export const fetchBusRides = (jobId: number, userId: number) => {
  return {
    url: "#",
    src: map,
  };
};
