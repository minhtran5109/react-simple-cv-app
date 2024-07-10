import GeneralInfo from './GeneralInfo'

function CVforms({genInfo, setGenInfo}) {
  return (
  <div id='cv'>
    cv
    <br />
    <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo}/>
  </div>
  )
}

export default CVforms