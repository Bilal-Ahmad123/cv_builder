import React from "react";
import ReactPDF from "@react-pdf/renderer";
import Resume from "./Resume";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useResume } from "../Zustand/store";
function Display() {
  const personalData = useResume((state) => state.personalDetails);
  const education = useResume((state) => state.education);
  const projects = useResume((state) => state.projects);
  const experience = useResume((state) => state.experience);
  const extras = useResume((state) => state.extra);

  const details = {
    personalData,
    education,
    projects,
    experience,
    extras,
  };

  return (
    <PDFDownloadLink document={<Resume data={details} />} filename="FORM">
      {({ loading }) =>
        loading ? (
          <button>Loading Document...</button>
        ) : (
          <button>Download</button>
        )
      }
    </PDFDownloadLink>
  );
}

export default Display;
