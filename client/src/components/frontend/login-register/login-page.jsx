import {useState} from 'react';
import {useLogin} from './../../../hooks/useLogin.js';
import {Link} from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, loader, error} = useLogin();

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login(username, password);
  }
  return (
    <div class="d-flex align-items-center justify-content-center lg">
      <div className="p-5 border login">
        <h3 className="d-flex align-items-center justify-content-center pb-3">Login</h3>
        <form action="" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input autoComplete="true" type="text" className="form-control mb-3" id="username" required placeholder="Username" value={username} onChange={event => handleChange(event, setUsername)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input autoComplete="true" type="password" className="form-control" id="password" required placeholder="Password" value={password} onChange={event => handleChange(event, setPassword)} />
          <label htmlFor="password">Password</label>
        </div>
        <div className="text-center my-3">
          <button className="btn btn-secondary rounded-0 py-2" style={{width: "100%"}}>SIGN IN</button>
        </div>
        {error && <div className="bg-danger p-1">{error}</div>}
        <div className="text-center fst-light mt-1 justify-content-between d-flex mx-5" style={{fontSize: "13px"}}>
          <Link className="text-decoration-none" to="/register">Create an account</Link>
          <Link className="text-decoration-none text-dark" to="/reset-password">Forgot your password?</Link>
        </div>
        </form>
      </div>
    </div>
  )
}
