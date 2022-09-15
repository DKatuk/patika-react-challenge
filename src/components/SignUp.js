import React from 'react'

const SignUp = ({
  nameRef,
  surnameRef,
  emailRef,
  passwordRef,
  handleSignUp,
}) => {
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
              ref={nameRef}
              placeholder="Enter Your Name"
              className="rounded-lg m-2"
              name="name"
            />
            <label htmlFor="surname" className="text-secondary-300">
              <b>Surame</b>
            </label>
            <input
              type="text"
              ref={surnameRef}
              placeholder="Enter Your Surname"
              className="rounded-lg m-2"
              name="surname"
            />
            <label htmlFor="email" className="text-secondary-300">
              <b>Email</b>
            </label>
            <input
              type="text"
              ref={emailRef}
              placeholder="Enter Email"
              className="rounded-lg m-2"
              name="email"
            />

            <label htmlFor="psw" className="text-secondary-300">
              <b>Password</b>
            </label>
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter Your Password"
              className="rounded-lg m-2"
              name="psw"
            />
          </form>
          <h2 className="text-secondary-300">
            Use the app as a <button className="text-primary-200">Guest</button>
          </h2>
          <button
            onClick={handleSignUp}
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