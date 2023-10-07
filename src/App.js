import React , {useState} from "react";
import { FullName } from "./components/FullName";
import { SalSlip } from "./components/SalSlip";
import "./components/common.css"

function App() {
  const [basic, setBasic]=useState(0);
  const [fname, setFname]=useState("");
  const [lname, setLname]=useState("");
  const [empid , setEmpid]=useState("");
  const [dept, setDept]=useState("");
  return (
    <div className="main">
      <input type="text" placeholder="Enter First Name "onChange={(e)=> setFname(e.target.value)}/>
      <input type="text" placeholder="Enter Last Name " onChange={(e)=> setLname(e.target.value)}/>
      <input type="number" placeholder="Enter Basic Salary" onChange={(e)=> setBasic(Number(e.target.value))} />
      <input type="number" placeholder="Enter Employee Id" onChange={(e)=> setEmpid(e.target.value)} />
      <input type="text" placeholder="Enter Department Name" onChange={(e)=> setDept(e.target.value)} />
      <FullName  fname={fname} lname={lname} empid={empid} department={dept}/>
      <SalSlip  basic={basic}/>
    </div>
  );
}

export default App;
