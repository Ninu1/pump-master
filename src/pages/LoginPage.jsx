import { useState } from 'react';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      alert('Login success!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="overlay" />
      <div className="login-content">
        <div className="navbar">
          <span className="logo">INFORM AG</span>
          <nav>
            <a href="#about">About</a>
            <a href="#technology">Technology</a>
          </nav>
        </div>

        <div className="slogan">
          <h1>Future Proofing Farming</h1>
          <p>
            Discover what happens when farmers work hand in hand with engineers
          </p>
        </div>

        <div className="login-card">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error-msg">{error}</p>}

            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-button" type="submit">
              Log in
            </button>

            <p className="register-text">
              Don’t have an account? <a href="#">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
