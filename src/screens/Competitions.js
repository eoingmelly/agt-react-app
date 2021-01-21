import React, { useState } from "react";
import Course from "../components/Course";

import { upcomingCompetitions } from "../data";

const Competitions = () => {
  const [comps] = useState(upcomingCompetitions);

  return (
    <div>
      {comps.map((cmp) => {
        const { id, name, competition_type, image, courses } = cmp;
        return (
          <article key={id}>
            <h2>{name}</h2>
            <aside>{competition_type}</aside>
            <img src={image} alt={name} />
            {courses.map((crs) => {
              return <Course {...crs} />;
            })}
          </article>
        );
      })}
    </div>
  );
};

export default Competitions;
