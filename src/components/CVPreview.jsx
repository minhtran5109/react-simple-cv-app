function CVPreview({genInfo, eduExps}) {
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
            {eduItem.fromDate} - {eduItem.toDate}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CVPreview