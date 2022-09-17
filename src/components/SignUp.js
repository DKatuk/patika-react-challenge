import React,{useState, useEffect} from 'react'

const SignUp = ({
  nameRef,
  surnameRef,
  emailRef,
  passwordRef,
}) => {
  const initialValues= {name: "",surname: "", email: "", password: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  function handleChange(e){
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
    console.log(formValues)
  }
  function handleSubmit(e){
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
        localStorage.setItem("name", nameRef.current.value);
        localStorage.setItem("surname", surnameRef.current.value);
        localStorage.setItem("email", emailRef.current.value);
        localStorage.setItem("password", passwordRef.current.value);
        window.location.reload();
    }
  },[formErrors])
  const validate = (values) => {
    const errors ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name = "Name is required!"
    }
    if(!values.surname){
      errors.surname = "Surname is required!"
    }
    if(!values.email){
      errors.email = "Email is required!"
    }else if(!regex.test(values.email)){
      errors.email = "Invalid email"
    }
    if(!values.password){
      errors.password = "Password is required!"
    }else if(values.password.length < 6){
      errors.password = "Password must be at least 6 characters!"
    } 
    return errors;
  }
  function handleGuestSignIn(){
    localStorage.setItem("name", "Guest");
    localStorage.setItem("surname", "Guest");
    localStorage.setItem("email", "guest@guest.com");
    localStorage.setItem("password", "guest");
    window.location.reload();
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="relative">
        <div className="absolute inset-0 bg-primary-100 rounded-xl blur"></div>
        <div className=" relative flex w-min flex-col justify-center items-center text-center rounded-xl bg-secondary-100 md:px-10 px-8 py-6">
          <div className="flex justify-center ">
            <img src="../images/todo-logo.jpeg" alt="logo" className="w-2/3" />
          </div>
          <div>
            <h1 className="font-bold text-primary-200">Create an Account</h1>
          </div>
          <form className="flex flex-col">
            <label htmlFor="name" className="text-secondary-300">
              <b>Name</b>
            </label>
            <input
              type="text"
              value={formValues.name}
              onChange={handleChange}
              minLength={3}
              ref={nameRef}
              placeholder="Enter Your Name"
              className="rounded-lg m-2"
              name="name"
            />
            <p className="text-red-500">{formErrors.name}</p>
            <label htmlFor="surname" className="text-secondary-300">
              <b>Surame</b>
            </label>
            <input
              type="text"
              value={formValues.surname}
              onChange={handleChange}
              minLength={3}
              ref={surnameRef}
              placeholder="Enter Your Surname"
              className="rounded-lg m-2"
              name="surname"
            />
            <p className="text-red-500">{formErrors.surname}</p>
            <label htmlFor="email" className="text-secondary-300">
              <b>Email</b>
            </label>
            <input
              type="text"
              value={formValues.email}
              onChange={handleChange}
              ref={emailRef}
              placeholder="Enter Email"
              className="rounded-lg m-2"
              name="email"
            />
            <p className="text-red-500">{formErrors.email}</p>
            <label htmlFor="password" className="text-secondary-300">
              <b>Password</b>
            </label>
            <input
              type="password"
              value={formValues.password}
              onChange={handleChange}
              minLength={3}
              ref={passwordRef}
              placeholder="Enter Your Password"
              className="rounded-lg m-2"
              name="password"
            />
            <p className="text-red-500">{formErrors.password}</p>
          </form>
          <h2 className="text-secondary-300">
            Use the app as a <button onClick={handleGuestSignIn} className="text-primary-200">Guest</button>
          </h2>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 rounded-lg bg-primary-100 text-secondary-300 hover:text-secondary-100"
          >
            <b>Sign Up</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp