import { useState } from "react"
import './login.css'
import { login } from "../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"


function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const handleLogin = () => {
    const payload = {
      email: formData.email,
      password: formData.password,
    }

    if(formData.email.length > 3 && formData.password.length > 3 ){
      dispatch(login(payload))
      navigate('/dashboard');
    }else {
      setError(true);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="text-login">Login</h1>
          <input
            type="email"
            placeholder="Input email"
            onChange={(e) => {setFormData({...formData, email: e.target.value})}}
            value={formData.email}
            className={error ? 'input-error' : 'input'}
            onFocus={() => setError(false)}
          />
          <input
            type="password"
            placeholder="Input password"
            onChange={(e) => {setFormData({...formData, password: e.target.value})}}
            value={formData.password}
            className={error ? 'input-error' : 'input'}
            onFocus={() => setError(false)}
          />
          {error ? <p style={{textAlign: "center", padding: '0 50px', fontSize: 12}}>to bypass login you must insert email and password greater than 3 </p> : null}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login