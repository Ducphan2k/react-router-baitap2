import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleLogin = () => {
      if (email === "admin@gmail.com" && password === "letmein") {
        navigate("/employee", { state: { email } });
      } else {
        alert("Sai thông tin đăng nhập!");
      }
    };
  return (
    <div className="Container">
      <h2>Login</h2>
      <div className="input-label">
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-label">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn-login" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login