import React from "react";
import { About } from '../Components/About';
import { BestPracticies } from '../Components/BestPracticies';
import { Courses } from '../Components/Courses';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { Logo } from "../Components/Logo";
import { News } from '../Components/News';

export function Main() {
  return (
    <>
      <div className="container">
        <Header />
        <Logo />
        <About />
        <Courses />
        <News />
        <BestPracticies />
      </div>
      <Footer />
    </>
  )
}