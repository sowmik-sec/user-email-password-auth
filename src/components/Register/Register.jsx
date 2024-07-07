function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-3/4 px-2 py-4"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
          />
          <br />
          <input
            className="mb-4 w-3/4 px-2 py-4"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
          <br />
          <input
            className="btn btn-secondary mb-4 w-3/4"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
