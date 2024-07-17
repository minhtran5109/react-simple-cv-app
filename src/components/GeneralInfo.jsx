import { useState } from 'react'
import '../styles/CVForms.css'

function GeneralInfo({genInfo, setGenInfo}) {

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <div className='cv-section'>
      <fieldset disabled={disableMode}>
        <legend>General Information</legend>
        <div className="form-row">
          <label htmlFor='name'>Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={genInfo.name}
            onChange={setGenInfo}
          />
        </div>

        <div className="form-row">
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type="email"
            name="email"
            value={genInfo.email}
            onChange={setGenInfo}
          />
        </div>
        
        <div className="form-row">
          <label htmlFor='phoneNumber'>Telephone</label>
          <input
            id='phoneNumber'
            type="tel"
            name="phoneNumber"
            value={genInfo.phoneNumber}
            onChange={setGenInfo}
          />
        </div>
      </fieldset>
        <button disabled={disableMode} onClick={handleDisableMode}>Save</button>
        <button disabled={!disableMode} onClick={handleDisableMode}>Edit</button>
    </div>
  ); 
}

export default GeneralInfo;