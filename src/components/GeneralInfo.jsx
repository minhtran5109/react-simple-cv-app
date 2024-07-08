import { useState } from 'react'

function GeneralInfo() {
  const [name, setName] = useState("");

  return (
    <label>
      Name: {" "}
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </label>
  );
}

export default GeneralInfo;