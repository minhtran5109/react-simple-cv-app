import { useState } from "react";

function Education({eduExps, setEduExps, onAddFormEdu}) {

  return (
    <fieldset>
      <legend>Educational Experience</legend>
      {eduExps.map((eduItem, index) => (
        <div key={index}>
          <label>
            School Name:
            <input
              type="text"
              name="name"
              value={eduItem.name}
              onChange={(event) => setEduExps(index, event)}
            />
          </label>
          <label>
            Degree Title:
            <input
              type="text"
              name="degreeTitle"
              value={eduItem.price}
              onChange={(event) => setEduExps(index, event)}
            />
          </label>
          <label>
            Degree Level:
            <select
              name="degreeLevel"
              value={eduItem.degreeLevel}
              onChange={(event) => setEduExps(index, event)}
            >
              <option value="">Select Level</option>
              <option value="hs">High School</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
              <option value="doctorate">Doctorate</option>
            </select>
          </label>
        </div>
      ))}
      <button type="button" onClick={onAddFormEdu}>
        +
      </button>
    </fieldset>
  )
}

export default Education