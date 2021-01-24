import React, { useState } from "react";
import Course from "../components/Course";
import CompetitionDayResult from "../components/CompetitionDayResult";

import { upcomingCompetitions } from "../data";

import { competitionHistory } from "../data";

const Competitions = () => {
  const [comps] = useState(upcomingCompetitions);

  const [hist] = useState(competitionHistory);

  return (
    <div>
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
      <div>
        {hist.map((his) => {
          const { id, name, competition_type, image, courses, winner } = his;
          return (
            <article key={id}>
              <h3>{name}</h3>
              <h4>Champion: {winner.displayName}</h4>
              <aside>{competition_type}</aside>
              <img src={image} alt={name} />
              {courses.map((crs) => {
                return <CompetitionDayResult {...crs} />;
              })}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Competitions;
