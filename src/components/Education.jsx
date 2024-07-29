import { useState } from "react";

function Education({eduExps, setEduExps, onAddFormEdu}) {

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <div className='cv-section'>
      <fieldset disabled={disableMode}>
        <legend>Educational Experience</legend>
        {eduExps.map((eduItem, index) => (
          <div key={index}>
            <div className="form-row">
              <label htmlFor="name">School Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={eduItem.name}
                onChange={(event) => setEduExps(index, event)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="degreeTitle">Degree Title</label>
              <input
                id="degreeTitle"
                type="text"
                name="degreeTitle"
                value={eduItem.degreeTitle}
                onChange={(event) => setEduExps(index, event)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="degreeLevel">Degree Level</label>
              <select
                id="degreeLevel"
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
            </div>

            <div className="form-row">
              <label htmlFor="fromDate">Start</label>
              <input
                id="fromDate"
                type="month"
                name="fromDate"
                value={eduItem.fromDate}
                onChange={(event) => setEduExps(index, event)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="toDate">Graduation</label>
              <input
                id="toDate"
                type="month"
                name="toDate"
                value={eduItem.toDate}
                onChange={(event) => setEduExps(index, event)}
                />
            </div>
            <hr />
          </div>
        ))}
        <button type="button" className="add-btn" onClick={onAddFormEdu}>
          +
        </button>
      </fieldset>
      <button disabled={disableMode} onClick={handleDisableMode} className="save-btn">Save</button>
      <button disabled={!disableMode} onClick={handleDisableMode} className="edit-btn">Edit</button>
    </div>
  )
}

export default Education