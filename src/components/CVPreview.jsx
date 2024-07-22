import formatMonth from "../utils"
import "../styles/CVPreview.css"

function CVPreview({genInfo, eduExps, pracExps}) {

  return (
    <div className='preview'>
      <div className="a4">
        <div className="preview-section">
          <h3>General Info</h3>
          N: {genInfo.name}<br />
          E: {genInfo.email}<br />
          Tel: {genInfo.phoneNumber}<br />
        </div>
        <div className="preview-section">
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
        <div className="preview-section">
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

    </div>
  )
}

export default CVPreview;