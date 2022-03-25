const distances = [
  { label: "0-10 kms", value: "0-10" },
  { label: "11-20 Kms", value: "11-20" },
  { label: "21-30 Kms", value: "21-30" },
  { label: "31-40 Kms", value: "31-40" },
];

const datePosted = [
  { label: "Past 24 hours", value: "Past 24 hours" },
  { label: "Past Week", value: "Past Week" },
  { label: "Past month", value: "Past month" },
  { label: "Anytime", value: "Anytime" },
];
const jobType = [
  { label: "Full time", value: "Full time" },
  { label: "Internship", value: "Internship" },
  { label: "Contract", value: "Contract" },
  { label: "Remote", value: "Remote" },
];
const experienceLevel = [
  { label: "Fresher", value: "Fresher" },
  { label: "Mid-level", value: "Mid-level" },
  { label: "Director", value: "Director" },
  { label: "Executive", value: "Executive" },
];
const transport = [
  { label: "Metro", value: "Metro" },
  { label: "Bus", value: "Bus" },
  { label: "Car pooling", value: "Car pooling" },
  { label: "Motor Cycle", value: "Motor cycle" },
];
const greenCommutes = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const stepperHeadings = ["Your Location", "Job Location", "Your Skills"];

const landingPageHeading = "More than 2000 people are using Green Commute";

const pageDetails = [
  {
    pageNumber: 1,
    searchLabel: "Where do you stay?",
    autocompletePlaceholder: "Enter your location",
    detailsLabelLine1: "Real Time Air Quality Index(AQI) ",
    detailsLabelLine2: "in this location",
    autocompleteOptions: ["East Marredpally, Secunderabad"],
    imageCaptionLine1: "Enter Location to know",
    imageCaptionLine2: "Time Air Quality Index (AQI)",
  },
  {
    pageNumber: 2,
    searchLabel: "Where do you want to work?",
    autocompletePlaceholder: "Enter your job location",
    detailsLabelLine1: "Real Time Air Quality Index(AQI) ",
    detailsLabelLine2: "in this location",
    autocompleteOptions: ["East Marredpally, Secunderabad"],
    imageCaptionLine1: "Enter Location to know",
    imageCaptionLine2: "Time Air Quality Index (AQI)",
  },
  {
    pageNumber: 3,
    searchLabel: "What do you want to do?",
    autocompletePlaceholder: "Enter your skills",
    detailsLabelLine1: "Jobs found in ",
    detailsLabelLine2: "",
    autocompleteOptions: [
      "Uxdesign",
      "UiDesign",
      "Spring",
      "React",
      "NodeJs",
      "VersionControl",
      "Java",
      "Flutter",
      "MachineLearning",
    ],
    imageCaptionLine1: "Enter your Skills to know how many",
    imageCaptionLine2: "jobs are in this Location",
  },
];

const jobCount = [
  {
    "id": 1,
    "name": "Angular",
    "count": 0
  },
  {
    "id": 2,
    "name": "Spring",
    "count": 2
  },
  {
    "id": 3,
    "name": "Java",
    "count": 1
  },
  {
    "id": 4,
    "name": "React",
    "count": 1
  },
  {
    "id": 5,
    "name": "Flutter",
    "count": 0
  },
  {
    "id": 6,
    "name": "Uxdesign",
    "count": 2
  },
  {
    "id": 7,
    "name": "UiDesign",
    "count": 2
  }
]


export {
  distances,
  datePosted,
  jobType,
  experienceLevel,
  transport,
  greenCommutes,
  stepperHeadings,
  landingPageHeading,
  pageDetails,
  jobCount,
};
