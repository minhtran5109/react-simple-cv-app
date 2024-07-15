import Education from './Education'
import GeneralInfo from './GeneralInfo'
import Practical from './Practical'

function CVForms({genInfo, setGenInfo, eduExps, setEduExps, onAddFormEdu, pracExps, setPracExps, onAddFormPrac}) {
  return (
  <div id='cv'>
    <h1>Fill in your details</h1>
    <br />
    <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo}/>
    <Education eduExps={eduExps} setEduExps={setEduExps} onAddFormEdu={onAddFormEdu}/>
    <Practical pracExps={pracExps} setPracExps={setPracExps} onAddFormPrac={onAddFormPrac} />
  </div>
  )
}

export default CVForms