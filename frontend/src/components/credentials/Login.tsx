import { useRef, useState, useEffect } from 'react';

function Login() {
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLDivElement>(null);

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false); // later change to navigate to home page

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrorMessage('');
    }, [user, password]);

    const handlerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('submit', user, password);
        clearUserData();
        setSuccess(true);
    }

    function clearUserData() {
        setUser('');
        setPassword('');
    }


    return (
        <>
            <p ref={errRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live='assertive'>{errorMessage}</p>
            <h1>Sign In</h1>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
                <p>
                    Need an account? <span className='line'><a href="/register">Sign Up</a></span>
                </p>
            </form>
        </>
    )

}

export default Login