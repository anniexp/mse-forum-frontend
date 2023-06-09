import { Button, TextField } from "@mui/material";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import api from '../services/api'

export default () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        api.post('/users/register', {username, password, email})
            .then(() => {
                navigate('/topics');
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New User</h1>
            <TextField 
                id="username" 
                label="Username" 
                variant="filled"
                onChange={e => setUsername(e.target.value)}
                required
                type="input"
                sx={{mb: 3}}
                fullWidth
                value={username}/>
                <TextField 
                id="password" 
                label="Password" 
                variant="filled"
                onChange={e => setPassword(e.target.value)}
                required
                type="input"
                sx={{mb: 3}}
                fullWidth
                value={password}/>
                <TextField 
                id="email" 
                label="Email" 
                variant="filled"
                onChange={e => setEmail(e.target.value)}
                required
                type="input"
                sx={{mb: 3}}
                fullWidth
                value={email}/>
            <Button variant="contained" type="submit">Submit</Button>
            <Button variant="contained" component={Link} to="/topics">Cancel</Button>
        </form>
    )
}