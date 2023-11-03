import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    
    onLogin(username);
    navigate('/');
  }

  return (
    <div className="flex items-center justify-center h-screen p-5 text-gray-100">
      <form
        className="border flex flex-col w-full max-w-lg p-12 rounded-xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <label className="text-xs font-semibold text-gray-900">Username or Email</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 px-4 mt-2 rounded border border-blue-400 text-gray-900 shadow-md"
        />

        <label className="mt-3 text-xs font-semibold text-gray-900">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-12 px-4 mt-2 rounded border border-blue-400 text-gray-900 shadow-md"
        />

        <button
          type="submit"
          className="h-12 px-6 mt-8 text-sm font-semibold rounded bg-blue-400 text-gray-900 shadow-lg hover:bg-blue-600 hover:outline-inherit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
