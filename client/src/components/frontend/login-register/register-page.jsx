import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");

  function handleChange(event, setter) {
    setter(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const body = {
        username: username,
        name: name,
        adresse: adresse,
        email: email,
        nonHashedPassword: password
      }
      const res = await axios.post('/api/users/create', body);

      if (res.data.status === "ok") {
        alert("Account created successfully");
      } else {
        alert(res.data.error);
      }
    } catch(error) {
      alert("There was an error while creatin the account");
    }
  }
  return (
    <div class="d-flex align-items-center justify-content-center lg">
      <div className="p-5 border login m-5">
        <h3 className="d-flex align-items-center justify-content-center pb-3">Register</h3>
        <form action="" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input type="text" className="form-control mb-3" id="username" required placeholder="Username" value={username} onChange={event => handleChange(event, setUsername)} />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control mb-3" id="name" required placeholder="Full name" value={name} onChange={event => handleChange(event, setName)} />
          <label htmlFor="name">Full name</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control mb-3" id="Email" required placeholder="Email" value={email} onChange={event => handleChange(event, setEmail)} />
          <label htmlFor="Email">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control mb-3" id="adresse" required placeholder="Adresse" value={adresse} onChange={event => handleChange(event, setAdresse)} />
          <label htmlFor="adresse">Adresse</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control mb-3" id="password" required placeholder="Password" value={password} onChange={event => handleChange(event, setPassword)} />
          <label htmlFor="password">Password</label>
        </div>
        <div className="text-center my-3">
          <button className="btn btn-secondary rounded-0 py-2" style={{width: "100%"}}>SIGN UP</button>
        </div>
        <div className="text-center fst-light mt-1 mx-5" style={{fontSize: "13px"}}>
          Already have an account? <Link className="text-decoration-none" to="/login">Login</Link>
        </div>
        </form>
      </div>
    </div>
  )
}
