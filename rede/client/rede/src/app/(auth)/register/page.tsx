"use client"

import AuthInput from "../../components/AuthInput"
import {Dispatch, SetStateAction, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { makeRequest } from "../../../../axios"




function Register(){

    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword ] =useState('')
    const[confirmPassword, setConfirmPassword ] =useState('')
    const[error, setError] =useState('')
    const[success, setSucess] =useState('')


    const handleRegister = (e:any)=>{
        e.preventDefault()
        makeRequest.post("auth/register", {username, email, password, confirmPassword}).then((res)=>{
            console.log(res.data)
            setSucess(res.data.msg)
            setError('')
        }).catch((err)=>{
            console.log(err);
            setError(err.response.data.msg)
            setSucess('')
        })
    }

         
    interface AuthInputProps {
        label: string;
        newState: React.Dispatch<React.SetStateAction<string>>;
        isPassword?: boolean;
        styleLabel?: React.CSSProperties;
        placeholder?: string;
      }
      
      function AuthInput({ label, newState, isPassword, styleLabel, placeholder }: AuthInputProps) {
        const inputStyle: React.CSSProperties = {
          marginTop: '4px',
          backgroundColor: '#fff',
          paddingLeft: '8px',
          color: '#000000',
          border: '1px solid #ccc', // Adicionando uma borda visível
          height: '30px',
          outline: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '2px 2px 6px #0000007c',
          width: '100%', 
          fontStyle: "italic"// Ajuste de largura para preencher o espaço disponível
        };
      
        return (
          <div className="auth-input">
            <label style={styleLabel}>
              {label}
              <input
                type={isPassword ? 'password' : 'text'}
                onChange={(e) => newState(e.target.value)}
                style={inputStyle}
                placeholder={placeholder}
              />
            </label>
          </div>
        );
      };
       
      
     

    return(
        <>
        <h1 className="text-center" style={{ color: "#21344d", fontSize: "50px", fontWeight: "bold", fontStyle: "italic", alignItems: 'center' }}>registrar</h1>
     

        <AuthInput label="nome: "  newState={setUserName} styleLabel={{fontSize: '22px', fontFamily: 'sans-serif', alignItems: 'center'}} placeholder="digite seu nome"  />
        <AuthInput label="email: " newState={setEmail} styleLabel={{ fontSize: '22px', fontFamily: 'sans-serif',  alignItems: 'center' }} placeholder="digite seu email"/>
        <AuthInput label="senha: " newState={setPassword} isPassword styleLabel={{ fontSize: '22px', fontFamily: 'sans-serif',  alignItems: 'center' }} placeholder="digite seu sua senha" />
        <AuthInput label="confirme sua senha: " newState={setConfirmPassword} isPassword styleLabel={{ fontSize: '22px', fontFamily: 'sans-serif', alignItems: 'center' }}placeholder="digite a mesma senha"/>

        {error.length>0 && <span className="text-red-600">* {error}</span>}
        {success.length>0 && <span className="text-green-600">* {success}</span>}
        

        <button 
         style={{
        backgroundColor: '#1457ae',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#ffffff',
       
      }}
      className="py-3 font-bold text-white rounded-lg hover:092948" 
      onClick={(e)=>handleRegister(e)}>cadastrar</button>
       

    <Link href='/login' 
     style={{
        fontSize: '20px',
        fontWeight: 'italic',
        color: "#00000"
        }}
    className="text-center underline">
    <strong>logar</strong>
    </Link>
        </>
        )
    }

export default Register