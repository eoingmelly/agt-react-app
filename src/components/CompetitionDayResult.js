import React from "react";

const CompetitionDayResult = (data) => {
  const { id, name, image, date, winner, winningPoints } = data;

  return (
    <div>
      <article key={id} className="competitionDayResult">
        <img src={winner.image} alt={winner.displayName} />
        <img src={image} alt={name} />
        <p>
          {winner.displayName} wins @{name} with {winningPoints} points
        </p>
        <h4>
          {name} - {date}
        </h4>
      </article>
    </div>
  );
};

export default CompetitionDayResult;
