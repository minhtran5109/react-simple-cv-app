import { useState } from "react";

function Practical({pracExps, setPracExps, onAddFormPrac}) {

  const [disableMode, setDisableMode] = useState(true);
  const [workingStatus, setWorkingStatus] = useState(false);

  function handleDisableMode() {
    setDisableMode(!disableMode)
  }

  function handleWorkingStatus() {
    setWorkingStatus(!workingStatus);
  }

  console.log(workingStatus);
  console.log(pracExps[0])
  return (
    <div className='cv-section'>
      <fieldset disabled={disableMode}>
        <legend>Practical Experience</legend>
        {pracExps.map((pracItem, index) => (
          <div key={index}>
            <div className="form-row">
              <label htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                type="text"
                name="companyName"
                value={pracItem.companyName}
                onChange={(event) => setPracExps(index, event)}
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="position">Position</label>
              <input
                id="position"
                type="text"
                name="position"
                value={pracItem.position}
                onChange={(event) => setPracExps(index, event)}
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="responsibilities">Responsibilities</label>
              <textarea
                id="responsibilities"
                type="text"
                name="responsibilities"
                rows="5" cols="33"
                value={pracItem.responsibilities}
                onChange={(event) => setPracExps(index, event)}>
              </textarea>
            </div>

            <div className="form-row">
              <label htmlFor="fromDate">From</label>
              <input
                id="fromDate"
                type="month"
                name="fromDate"
                value={pracItem.fromDate}
                onChange={(event) => setPracExps(index, event)}
              />
            </div>
            
            <div className="form-row">
              <label htmlFor="toDate">To</label>
                <input
                id="toDate"
                type="month"
                name="toDate"
                disabled={workingStatus}
                value={pracItem.toDate}
                onChange={(event) => setPracExps(index, event)}
                />
                <input
                id="toDate"
                type="checkbox"
                name="toDate"
                value="Present"
                onClick={(event) => {
                  handleWorkingStatus();
                  setPracExps(index, event)
                }}
                /> Currently in this position
            </div>

          </div>
        ))}
        <button type="button" onClick={onAddFormPrac}>
          +
        </button>
      </fieldset>
      <button disabled={disableMode} onClick={handleDisableMode}>Save</button>
      <button disabled={!disableMode} onClick={handleDisableMode}>Edit</button>
    </div>
  )
}

export default Practical