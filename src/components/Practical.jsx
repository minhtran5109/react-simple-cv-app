import { useState } from "react";

function Practical({pracExps, setPracExps, onAddFormPrac}) {

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <div>
      <fieldset>
        <legend>Practical Experience</legend>
        {pracExps.map((pracItem, index) => (
          <div key={index}>
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={pracItem.companyName}
                onChange={(event) => setPracExps(index, event)}
              />
            </label>
            <label>
              Position Title:
              <input
                type="text"
                name="position"
                value={pracItem.position}
                onChange={(event) => setPracExps(index, event)}
              />
            </label>
            <br />
            <label>
              Responsibilities:
              <br />
              <textarea
                type="text"
                name="responsibilities"
                rows="5" cols="33"
                value={pracItem.responsibilities}
                onChange={(event) => setPracExps(index, event)}>
              </textarea>
            </label>
            <br />
            <label>
              From: 
              <input type="month"
              name="fromDate"
              value={pracItem.fromDate}
              onChange={(event) => setPracExps(index, event)}
              />
            </label>
            <label>
              To: 
              <input type="month"
              name="toDate"
              value={pracItem.toDate}
              onChange={(event) => setPracExps(index, event)}
              />
            </label>
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