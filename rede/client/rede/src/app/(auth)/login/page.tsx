"use client"

import Link from "next/link";
import { useContext, useState } from "react";
import AuthInput from "../../components/AuthInput";
import { makeRequest } from "../../../../axios";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";

function Login() {

    const [email, setEmail] = useState("teste@gmail.com")
    const [password, setPassword] = useState("teste")
    const [error, setError] = useState("")
    const {setUser} =useContext(UserContext)
     
    const router = useRouter()
    const handleLogin= (e:any)=>{
        e.preventDefault()
        makeRequest.post("auth/login", {email, password})
        .then((res)=>{
            localStorage.setItem('rede: user', JSON.stringify(res.data.user));
            setUser(res.data.user)
            setError('')
            router.push('/main')
        })
        .catch((err)=>{
            console.log(err)
            setError(err.response.data.msg)
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
        paddingLeft: '4px',
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
        }


    
    return (
        <>
          <h1 className="text-center" style={{ color: "#21344d", fontSize: "50px", fontWeight: "bold", fontStyle: "italic", alignItems: 'center' }}>login</h1>
          <AuthInput label="nome  " newState={setEmail} styleLabel={{ marginTop: '4px', fontSize: '20px', fontFamily: 'sans-serif', alignItems: 'center'}} placeholder="digite seu nome"   />
          <AuthInput label="senha " newState={setPassword} isPassword styleLabel={{ marginTop: '4px', fontSize: '20px', fontFamily: 'sans-serif',  alignItems: 'center' }} placeholder="digite seu sua senha" />

          {error.length > 0 && <span className="text-red-600">* {error}</span>}

          <button 
         style={{
        backgroundColor: '#1457ae',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#ffffff',
       
      }}
      className="py-3 font-bold text-white rounded-lg hover:092948" 
      onClick={(e) => handleLogin(e)}
    >entrar
    </button>

          <Link href='/register' 
            style={{
            fontSize: '20px',
            fontWeight: 'italic',
            color: "#53566e"
            }}
          className="text-center" >
            Ainda não possui uma conta?
            <br/>
            <strong className="text-center underline color:#0000" >crie uma conta!</strong>
            </Link>
        </>
       
            
        )
        }
      

export default Login;