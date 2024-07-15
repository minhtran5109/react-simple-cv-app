import { useState } from "react";

function Education({eduExps, setEduExps, onAddFormEdu}) {

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <div>
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
                value={eduItem.degreeTitle}
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
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </label>
            <label>
              Start: 
              <input type="month"
              name="fromDate"
              value={eduItem.fromDate}
              onChange={(event) => setEduExps(index, event)}
              />
            </label>
            <label>
              Graduation: 
              <input type="month"
              name="toDate"
              value={eduItem.toDate}
              onChange={(event) => setEduExps(index, event)}
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={onAddFormEdu}>
          +
        </button>
      </fieldset>
      <button disabled={disableMode} onClick={handleDisableMode}>Save</button>
      <button disabled={!disableMode} onClick={handleDisableMode}>Edit</button>
    </div>
  )
}

export default Education