import Education from './Education'
import GeneralInfo from './GeneralInfo'

function CVForms({genInfo, setGenInfo, eduExps, setEduExps, onAddFormEdu}) {
  return (
  <div id='cv'>
    <h1>Fill in your details</h1>
    <br />
    <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo}/>
    <Education eduExps={eduExps} setEduExps={setEduExps} onAddFormEdu={onAddFormEdu}/>
  </div>
  )
}

export default CVForms