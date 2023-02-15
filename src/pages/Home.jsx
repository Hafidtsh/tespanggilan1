import React from "react";
import Card from "../component/Card";
import Filtering from "../component/Filtering";
import Navbar from "../component/Navbar";
import { Users } from "../data";

export default function Home() {
  return (
    <div className="bg-slate-100 h-[100vh] w-[100vw]">
      <Navbar />
      <Filtering data={Users} />
      <Card company="Eyecam" position="Front End Developer" time="1day" work="Fulltime" place="USA only" />
    </div>
  );
}
