import Education from './Education'
import GeneralInfo from './GeneralInfo'
import Practical from './Practical'
import '../styles/CVForms.css'

function CVForms({genInfo, setGenInfo, eduExps, setEduExps, onAddFormEdu, pracExps, setPracExps, onAddFormPrac}) {
  return (
  <div className='cv'>
    <h1>Fill in your details</h1>
    <p>Chose "Edit" to modify each section, then just "Save"! A preview of your CV will be shown on the right as you go filling in your details.</p>
    <GeneralInfo genInfo={genInfo} setGenInfo={setGenInfo}/>
    <Education eduExps={eduExps} setEduExps={setEduExps} onAddFormEdu={onAddFormEdu}/>
    <Practical pracExps={pracExps} setPracExps={setPracExps} onAddFormPrac={onAddFormPrac} />
  </div>
  )
}

export default CVForms