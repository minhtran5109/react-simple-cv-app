import { useState } from 'react'

function GeneralInfo({genInfo, setGenInfo}) {

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <div>
    <fieldset disabled={disableMode}>
      <legend>General Information</legend>
      <label>
        Name: {" "}
        <input
          type="text"
          name="name"
          value={genInfo.name}
          onChange={setGenInfo}
        />
      </label>
      <label>
        Email: {" "}
        <input
          type="email"
          name="email"
          value={genInfo.email}
          onChange={setGenInfo}
        />
      </label>
      <label>
        Telephone: {" "}
        <input
          type="tel"
          name="phoneNumber"
          value={genInfo.phoneNumber}
          onChange={setGenInfo}
        />
      </label>
    </fieldset>
      <button disabled={disableMode} onClick={handleDisableMode}>Save</button>
      <button disabled={!disableMode} onClick={handleDisableMode}>Edit</button>
    </div>
  ); 
}

export default GeneralInfo;