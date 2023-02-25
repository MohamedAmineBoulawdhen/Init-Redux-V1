import React from "react";
import "../index.css";
export default function Task({ id, title, description }) {
  return (
    <div id="task">
      <h1> {title}</h1>
      <p id="taskdescription">
        <strong>Description: </strong>
        {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Non rerum nemo laborum modi, laudantium voluptate. Nam, nostrum. Ipsa
        quam voluptatem inventore soluta quae nam. Soluta rem illum et ad vero.
        In, labore esse obcaecati aspernatur facere ratione, dolor provident
        ducimus quibusdam, sit repudiandae voluptas fugiat porro laudantium a
        dolorem? Libero?
      </p>
    </div>
  );
}
