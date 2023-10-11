import { useState } from 'react';
import './App.css';


function App() {

  const initialValues ={username:"" ,email:"" ,password:""};
  const [formvalues , setvalues] = useState(initialValues);
  const [formerrors , seterrors] = useState({});
  const [issubmit , setissubmit] = useState(false);

  const handleChange = (e) => {
    const{name ,value} = e.target;
    setvalues({...formvalues ,[name] : value});
    console.log(formvalues);
   
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const isError = validate(JSON.stringify(formvalues))
    console.log(isError);
    seterrors(isError);
    setissubmit(true);
  }

  // useEffect( () => {
  //   console.log(formerrors);
  //   if(Object.keys(formerrors).length === 0 && issubmit){
  //     console.log(formvalues);
  //   }
  // },[formerrors]);

  const validate = (values)=>{
    const errors = {};
    console.log("Values " + values);
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(values.email=== "" || values.password==="" || values.username===""){
      errors.email ="fields is required";
    }
    // if(values.username === "" ){
    //   errors.username ="username is required";
      
    // }
    // else if( regex.test(values.email) === false){
    //   errors.email ="email format is not correct";
    // }
  //  if(values.password === " " ){
  //   errors.password ="password is required";
  // }
   if(values.password < 4){
    errors.password ="password length should be greater than 4"
  }
  if(values.password > 10){
    alert('Password')
    errors.password ="password length should be less than 10"
  }
 console.log("Errors " + JSON.stringify(errors));
 return errors
  }

  return (
    <div className="main">
      <div className='inner'>
        {/* <pre>{JSON.stringify(formvalues,undefined ,2)}</pre> */}

        <h1>Login Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">UserName</label>
          <input type="text" placeHolder="username" name="username" value={formvalues.username} onChange={handleChange}/>
          <p style={{color:'red'}}>{formerrors.username}</p>

          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" name="email" value={formvalues.email} 
          onChange={handleChange}/>
          <p style={{color:'red'}}>{formerrors.email}</p>

          <label htmlFor="">Password</label>
          <input type="text" placeholder="Password" name="password" value={formvalues.password} onChange={handleChange}/>
          <p style={{color:'red'}}>{formerrors.password}</p>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
