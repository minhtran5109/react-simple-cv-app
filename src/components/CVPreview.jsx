import formatMonth from "../utils"
import "../styles/CVPreview.css"

function CVPreview({genInfo, eduExps, pracExps}) {

  return (
    <div className='preview'>
      preview
      <br />
      <div>
        <h3>General Info</h3>
        N: {genInfo.name}<br />
        E: {genInfo.email}<br />
        Tel: {genInfo.phoneNumber}<br />
      </div>

      <div>
        <h3>Education</h3>
        {eduExps.map((eduItem, index) => (
          <div key={index}>
            School: {eduItem.name}<br />
            Degree: {eduItem.degreeTitle} ({eduItem.degreeLevel})<br />
            {eduItem.fromDate ?
            formatMonth(eduItem.fromDate) : ""}
            {" - "}
            {eduItem.toDate ? formatMonth(eduItem.toDate) : ""}
          </div>
        ))}
      </div>

      <div>
        <h3>Practical Experience</h3>
        {pracExps.map((pracItem, index) => (
          <div key={index}>
            Company: {pracItem.companyName}<br />
            Position: {pracItem.position}<br />
            Responsibilities: <br />{pracItem.responsibilities}<br />
            {pracItem.fromDate ?
            formatMonth(pracItem.fromDate) : ""}
            {" - "}
            {pracItem.toDate && pracItem.toDate !== "Present" ? formatMonth(pracItem.toDate) : 
            pracItem.toDate}
          </div>
        ))}
      </div>

    </div>
  )
}

export default CVPreview;