import React,{useState} from "react"
export const Register = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" name="email" id="email"/>

            <label>password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="********" name="password" id="password"/>
            <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register here.</button>
        </>  
    )
}