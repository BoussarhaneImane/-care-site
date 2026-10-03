import React, { useState } from 'react';
import  axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import vd2 from '././components/Hero/vds.mp4';
import './registre.css'
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
   
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
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
        setLoading(true); // Démarrer le chargement
        try {
            const response = await axios.post('https://backend-projecteco.onrender.com/register', formData);
      
            setSuccessMessage(response.data.success);
            setErrorMessage('');
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            localStorage.setItem('userName', formData.name);
            navigate('/');
        } catch (error) {
            console.error('Error during registration:', error.response.data);
            setErrorMessage(error.response.data.message || 'An error occurred');
            setSuccessMessage('');
        } finally {
            setLoading(false); // Arrêter le chargement
        }
    };


    return (
        <>
        <center className='mt-16'><Link to='/' className="text-3xl font-medium   text-indigo-950 ">
         retour à l'acceuil
                    </Link></center> 
                    {loading && <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="loader">Loading...</div>
        </div>}
        <div style={{marginTop:'50px'}} className="container flex justify-center items-stretch w-[75%] h-full  mb-80">
            <div className="text-section flex-1 bg-indigo-950 rounded-l-lg p-3">
            <video src={vd2} muted autoPlay loop className="h-96 object-cover rounded-l-lg w-full"></video>
              
            </div>
            <div className="form-section flex flex-col justify-center items-center bg-pink-800 rounded-r-lg p-4">
                <h1 className="text-white text-center my-8 font-medium text-2xl">Créez un compte avec nous</h1>
                {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
                {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
                <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            autoComplete="name" 
                            placeholder="Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full p-2 border border-gray-300 rounded outline-none m-3 text-xs text-indigo-950" 
                        />
                    </div>
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
                    <Link to='/login' className="text-center block text-slate-100 text-xs" >
                       
Vous avez déjà un compte? <span style={{textDecoration:'underline solid 1px black'}} className="text-white text-xs">Connexion ici</span>
                    </Link>
                    <button type="submit" className="button w-[65%] p-2 bg-indigo-950 text-white font-bold rounded-lg text-xs mt-4">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;
