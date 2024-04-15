import React, { useState } from "react";
import Task from "../Task";
import classes from "./styles.module.css";
// import { useGetTodosQuery } from "../../app/slices/apiSLice.js";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../app/slices/taskSlice";

export default function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [Filter, setFilter] = useState("all");
  const showedTask = tasks.filter((elem) => {
    if (Filter === "all") {
      return elem;
    } else if (Filter === "isDone" && elem.isDone) {
      return elem;
    } else if (Filter === "notDone" && !elem.isDone) {
      return elem;
    }
  });
  return (
    <div className={classes.container}>
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input
            onClick={() => {
              setFilter("all");
            }}
            type="radio"
            id="huey"
            name="drone"
            value="huey"
          />
          <label for="huey">All</label>
        </div>

        <div>
          <input
            onClick={() => {
              setFilter("isDone");
            }}
            type="radio"
            id="dewey"
            name="drone"
            value="dewey"
          />
          <label for="dewey">isDone</label>
        </div>

        <div>
          <input
            onClick={() => {
              setFilter("notDone");
            }}
            type="radio"
            id="louie"
            name="drone"
            value="louie"
          />
          <label for="louie">notDone</label>
        </div>
      </fieldset>
      {showedTask.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </div>
  );
}
