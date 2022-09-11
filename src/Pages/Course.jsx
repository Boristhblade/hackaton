import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

import { CourseHeader } from "../Components/CourseHeader";
import { CourseDesc } from "../Components/CourseDesc";
import { CourseBenefits } from "../Components/CourseBenefits";
import { CourseSchedule } from "../Components/CourseSchedule";

export function Course() {
  return (
    <>
      <Header />
      <CourseHeader />
      <CourseDesc />
      <CourseBenefits />
      <CourseSchedule />
      <Footer />
    </>
  )
}