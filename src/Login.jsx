import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import vd2 from './components/Hero/vds.mp4';
import './registre.css';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // État de chargement
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://backend-projecteco.onrender.com/login', formData);
            setErrorMessage('');
            setFormData({
                email: '',
                password: ''
            });
            console.log(response.data.name);
            localStorage.setItem('userName', response.data.name);
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage(error.response?.data?.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <center className='mt-16'>
                <Link to='/' className="text-3xl font-medium text-indigo-950">
                    retour à l'accueil
                </Link>
            </center>
            {loading && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="loader">Loading...</div>
                </div>
            )}
            <div style={{ marginTop: '60px' }} className="container flex justify-center items-stretch w-[75%] h-full mb-80">
                <div className="text-section flex-1 bg-indigo-950 rounded-l-lg p-3">
                    <video src={vd2} muted autoPlay loop className="h-96 object-cover rounded-l-lg w-full"></video>
                </div>
                <div className="form-section flex flex-col justify-center items-center bg-pink-800 rounded-r-lg p-4">
                    <h1 className="text-white text-center my-8 font-medium text-2xl">Connectez-vous avec nous</h1>
                    {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                    <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input 
                                id="email" 
                                name="email" 
                                type="email" 
                                autoComplete="email" 
                                placeholder="Email address" 
                                value={formData.email} 
                                onChange={handleChange} 
                                className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs text-indigo-950" 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                autoComplete="current-password" 
                                placeholder="Password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs text-indigo-950" 
                            />
                        </div>
                        <Link to='/register' className="text-center text-xs mb-4 block text-slate-100">
                            Vous n'avez pas encore de compte? <span style={{textDecoration:'underline solid 1px black'}} className="text-xs text-white">inscrire ici</span>
                        </Link>
                        <button type="submit" className="button w-[65%] p-2 bg-indigo-950 text-white font-bold rounded-lg text-xs mt-4">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
