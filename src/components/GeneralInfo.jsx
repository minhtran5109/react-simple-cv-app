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

  return (
    <>
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
    <button>Submit</button>
    </>
  ); 
}

export default GeneralInfo;