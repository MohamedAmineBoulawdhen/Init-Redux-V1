import React from "react";
import Task from "./Task";

const initTasks = [
  { id: 0, title: "Project1", description: "first project" },
  { id: 1, title: "Project2", description: "second project" },
];
export default function ListTask() {
  const listOftasks = initTasks.map((item) => (
    <Task key={item.id} title={item.title} description={item.description} />
  ));
  return <div>{listOftasks}</div>;
}
