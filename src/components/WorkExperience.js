import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import "./WorkExperience.css";
import WSILogoIcon from "../assets/svg/wsilogo.svg";
import PSBankLogoIcon from "../assets/svg/psbanklogo.svg";
import { duration } from "@mui/material";

const wsiJobData = [
  {
    title: "Sr. Programmer",
    duration: "Sep 2018 - Aug 2019 · 11 months",
  },
  {
    title: "Information System Specialist",
    duration: "Aug 2016 - Aug 2018 · 2 years",
  },
  {
    title: "Information System Assistant",
    duration: "Aug 2015 - Aug 2016 · 1 year",
  },
];

const psbJobData = [
  {
    title: "Technical Lead",
    duration: "Jul 2022 - Present · 2 years 1 month",
  },
  {
    title: "System Analyst",
    duration: "Sep 2019 - Jul 2022 · 2 years 10 months",
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <div className="work-experience-section">
        <h2>Work Experience</h2>
        <hr className="work-experience-hr"></hr>
        <div style={{ display: "flex", alignItems: "left" }}>
          <img id="psbanklogo" src={PSBankLogoIcon} alt="PSBank Logo" />
          <div>
            <h3>Philippine Savings Bank</h3>
            <p>5 years</p>
          </div>
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {psbJobData.map((job, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < psbJobData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ ml: "2.4rem" }}>
                <div>
                  <div>
                    <label>{job.title}</label>
                  </div>
                  <div style={{ fontSize: "0.875rem" }}>
                    <label>{job.duration}</label>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <hr className="work-experience-hr2"></hr>
        <div style={{ display: "flex", alignItems: "left" }}>
          <img id="wsilogo" src={WSILogoIcon} alt="WSI Logo" />
          <div>
            <h3>Wordtext Systems, Inc. (WSI)</h3>
            <p>4 years</p>
          </div>
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {wsiJobData.map((job, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index < wsiJobData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ ml: "2.4rem" }}>
                <div>
                  <div>
                    <label>{job.title}</label>
                  </div>
                  <div style={{ fontSize: "0.875rem" }}>
                    <label>{job.duration}</label>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default WorkExperience;
