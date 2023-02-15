import React, { useState } from "react";
import { Users } from "../data";

export default function Filtering() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex justify-between border m-5 p-3 rounded-md bg-white h-max">
      <input type="text" placeholder=" " className="border-none w-full" onChange={(e) => setQuery(e.target.value)} />

      <ul className="list-item">
        {Users.map((user) => {
          <li key={user.id} className="list-item">
            {user.company}
          </li>;
        })}
      </ul>
    </div>
  );
}
