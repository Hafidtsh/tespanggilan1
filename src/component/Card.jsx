import { data } from "autoprefixer";
import React from "react";
import eyecam from "../Assets/images/eyecam-co.svg";
import { Users } from "../data";

export default function Card(props) {
  return (
    <div className="m-10 p-5 border rounded-lg bg-white shadow-md flex gap-2 justify-between hover:border-l-8 hover:border-cyan-800 ">
      <img src={eyecam} alt="" />
      <div>
        <h1>{props.company}</h1>
        <p>{props.position}</p>
        <div className="flex gap-3">
          <p>{props.time}</p>
          <p>{props.work}</p>
          <p>{props.place}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="hover:bg-cyan-400 ">Front End</button>
        <button className="hover:bg-cyan-400 ">Back End </button>
        <button className="hover:bg-cyan-400 ">Full Stack</button>
        <button className="hover:bg-cyan-400 ">Junior</button>
      </div>
    </div>
  );
}
