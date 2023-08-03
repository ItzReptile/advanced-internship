import React, { useState } from "react";
import { Nav } from "../Components/Nav";
import { Landing } from "../Components/Landing";
import { Features } from "../Components/Features";
import { Numbers } from "../Components/Numbers";
import { Reviews } from "../Components/Reviews";
import { Footer } from "../Components/Footer";

export const Home = () => {
  return (
    <>
      <Nav />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
};
