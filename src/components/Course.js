import React from "react";

const Course = (course) => {
  const { id, name, rating, image, date, par, metres } = course;

  console.log("crs: ", course);

  return (
    <div>
      <article key={id} className="player">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>
          Par: {par} | Rating: {rating} | Length: {metres}m
        </p>
        <p>{date}</p>
      </article>
    </div>
  );
};

export default Course;
