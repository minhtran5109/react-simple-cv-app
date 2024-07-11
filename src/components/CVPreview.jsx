
function CVPreview({genInfo, eduExps}) {
  return (
    <div className='preview'>
      preview
      <br />
      N: {genInfo.name}<br />
      E: {genInfo.email}<br />
      Tel: {genInfo.phoneNumber}<br />

      {eduExps.map((eduItem, index) => (
        <div key={index}>
          School: {eduItem.name}<br />
          Degree: {eduItem.degreeTitle}<br />
        </div>
      ))}
    </div>
  )
}

export default CVPreview