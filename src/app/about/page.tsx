"use client";

import { NextUIProvider } from "@nextui-org/react";
import { FC } from "react";
import AboutPage from "../../components/AboutPage";

const About: FC = () => {
  return (
    <NextUIProvider>
      <AboutPage />
    </NextUIProvider>
  );
};

export default About;
