import React from "react";
import { useState, memo } from "react";
function WokoutType({ workouts, number, setNumber }) {
  return (
    <div>
      <label>Type of workout</label>
      <select value={number} onChange={(e) => setNumber(+e.target.value)}>
        {workouts.map((workout) => (
          <option value={workout.numExercises} key={workout.name}>
            {workout.name} ({workout.numExercises} exercises)
          </option>
        ))}
      </select>
    </div>
  );
}
export default memo(WokoutType);
