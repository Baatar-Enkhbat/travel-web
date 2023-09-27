"use client"
import React from "react";
import ImagePage from "../../images/navbar/page";
import NavbarComponent from "../../components/navbar/page";
import CardConponent from "../../components/card/page";

export default function HomeScreen() {
  return (
    <div>
      <NavbarComponent />
      {/* <ImagePage /> */}
      <CardConponent/>
    </div>
  );
}
