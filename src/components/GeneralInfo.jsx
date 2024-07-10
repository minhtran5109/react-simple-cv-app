import { useState } from 'react'

function GeneralInfo({genInfo, setGenInfo}) {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phoneNumber: '',
  // });

  // function handleInputChange(e) {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name]: value});
  // };

  // function handleSubmit(e) {
  //   e.preventDefault;
  //   console.log(formData);
  // }

  const [disableMode, setDisableMode] = useState(true);

  function handleDisableMode(e) {
    setDisableMode(!disableMode)
  }

  return (
    <>
    <fieldset disabled={disableMode}>
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
    <br/>
    </fieldset>
    <button disabled={disableMode} onClick={handleDisableMode}>Save</button>
    <button disabled={!disableMode} onClick={handleDisableMode}>Edit</button>
    </>
  ); 
}

export default GeneralInfo;