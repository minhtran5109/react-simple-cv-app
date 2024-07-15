import { useState } from 'react'
import './App.css'
import CVForms from './components/CVForms.jsx'
import CVPreview from './components/CVPreview.jsx';

const eduForm = {
  name: '',
  degreeTitle: '',
  degreeLevel: '',
  fromDate: '',
  toDate: '',
}

const pracForm = {
  companyName: '',
  position: '',
  responsibilities: '',
  fromDate: '',
  toDate: '',
}

function App() {
  const [genInfo, setGenInfo] = useState({
    name: 'Example John',
    email: 'ejohn@email.com',
    phoneNumber: '0000 000 000',
  });
  const [eduExps, setEduExps] = useState([eduForm]);
  const [pracExps, setPracExps] = useState([pracForm]);

  function handleInputChange(e) {
    const {name, value} = e.target;
    setGenInfo({...genInfo, [name]: value});
  };

  function handleListInputChange(setter, index, event) {
    const {name, value} = event.target;
    setter(prevForms => {
      const newForms = prevForms.map((form, formIndex) => {
        if (index !== formIndex) return form;
        return { ...form, [name]: value };
      });
      return newForms;
    });
  } 

  function handleAddForm(setter, newForm) {
    setter(prevForms => [...prevForms, newForm])
  };

  return (
    <div className='container'>
      <CVForms 
      genInfo={genInfo} setGenInfo={handleInputChange} 
      eduExps={eduExps} 
      setEduExps={(index, event) => handleListInputChange(setEduExps, index, event)}
      onAddFormEdu={() => handleAddForm(setEduExps, eduForm)}
      pracExps={pracExps} 
      setPracExps={(index, event) => handleListInputChange(setPracExps, index, event)}
      onAddFormPrac={() => handleAddForm(setPracExps, pracForm)}
      />
      <CVPreview genInfo={genInfo} eduExps={eduExps} pracExps={pracExps}/>
    </div>
  )
}

export default App

// ToDo
// Test state change to display preview on the right screen