import React from "react";
import CustomAccordion from "../components/CustomAccordion";
import items from "../constants/ProgramText";

function CourseProgramm() {
  return (
    <div>
      <CustomAccordion items={items} />
    </div>
  );
}

export default CourseProgramm;
