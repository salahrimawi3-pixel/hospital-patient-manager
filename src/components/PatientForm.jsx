import { useState } from "react";



const PatientForm = () => {



   
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Department, setDepartment] = useState("");

    const [patient, setPatient] = useState([]);

    const handleSubmit = (e) => {

        e.preventDefault();

        let newPatient = { Name, Age, Department };

    

         setPatient([...patient, newPatient]);

         setName("");
         setAge("");
         setDepartment("");
    }
    const handleDelete = (index) => {
    setPatient(patient.filter((person, i) => i !== index));
};

    
return(
    <>
     <h1>here is the patient form</h1>
    
 <form onSubmit={handleSubmit}>
<input 
type="text" 
placeholder="Patient Name"
value={Name}
onChange={(e) => setName(e.target.value)} />

<input 
type="text"
 placeholder="Age"
 value={Age}
onChange={(e) => setAge(e.target.value)}
  />

<input 
type="text"
 placeholder="Department"
  value={Department}
onChange={(e) => setDepartment(e.target.value)}
  />


  <button type="submit"> Add Person </button>
 </form>
<p>name: {Name}</p>

 <p> number of patients : {patient.length}</p>

 <h3>patients</h3>

 <ul>
                {patient.map((patient, index) => {
                  
                    return (
                        <li key={index}>
                             Name : {patient.Name}   Age: {patient.Age},  - Department: {patient.Department}
                             <button onClick={() => handleDelete(index)}> Delete </button>
                        </li>
                    );
                })}
            </ul>

   
    </>
);


}

export default PatientForm;