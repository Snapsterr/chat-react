import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': '29ab5734-8baa-4383-a34b-8627bde037d3', 'User-Name': username, 'User-Secret': '12345678' }

        try {
           await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Invalid property');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">chat-react</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username" required
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password" required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                        <span> Start Chatting </span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;