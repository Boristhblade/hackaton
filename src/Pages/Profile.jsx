import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { ProfileInfo } from "../Components/ProfileInfo";

export function Profile() {
  return (
    <>
      <Header />
      <ProfileInfo />
      <Footer />
    </>
  )
}