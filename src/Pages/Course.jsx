import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

import { CourseHeader } from "../Components/CourseHeader";
import { CourseDesc } from "../Components/CourseDesc";
import { CourseBenefits } from "../Components/CourseBenefits";
import { CourseSchedule } from "../Components/CourseSchedule";
import { CourseAuthors } from "../Components/CourseAuthors";
import axios from "axios";

export function Course() {
  const getData = async () => {
    const { data } = await axios.get('https://hack.webink.site//wp-json/mr/v1/get/cources');
    return data;
  }
  const data = getData();
  console.log(data)
  return (
    <>
      <Header />
      <CourseHeader />
      <CourseDesc />
      <CourseBenefits />
      <CourseSchedule />
      <CourseAuthors />
      <Footer />
    </>
  )
}