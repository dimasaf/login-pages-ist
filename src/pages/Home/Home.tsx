import './home.css'
import { useAppDispatch } from "../../app/hooks"
import { logout } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'


function Home() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <div>
      <div className="dashboard">
        <div className="sidebar">
          <h1>Dashboard</h1>
          <ul>
              <li><div onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</div></li>
          </ul>
        </div>

        <div className="main-content">
          <div className="card">
            <h2>Card 1</h2>
            <p>This is some sample content for Card 1.</p>
          </div>

          <div className="card">
            <h2>Card 2</h2>
            <p>This is some sample content for Card 2.</p>
          </div>
        </div>
    </div></div>
  )
}

export default Home