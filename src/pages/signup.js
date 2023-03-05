import { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { signupRequest, loginRequest } from '../api/requests';


const Register = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [email, setEmail] = useState('');

    function handleResponse(res) {
        try {
            if (res === 'Too many requests, please try again later.')
                return {
                    success: false,
                    message: "Hey Buddy!, You're sending too many requests :(",
                };
            if (res.success) {
                if (res.result.success) {
                    return {
                        success: true,
                        message: 'Register successful. Please verify your Email Address to login.',
                    };
                } else {
                    return {
                        success: false,
                        message: 'Duplicate ' + res.result.duplicates.join(', '),
                    };
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function signupHandler(e) {


        e.preventDefault();
        const data = {
            name: name.trim(),
            password,
            passwordConfirmation,
            email: email.trim(),
        };

        const res = await signupRequest({ data });
        const responseState = handleResponse(res);

        if (responseState.success) {
            handleSnackOpen({
                variant: 'success',
                message: responseState.message,
            });
            router.push('/');
        } else {
            handleSnackOpen({
                variant: 'error',
                message: responseState.message,
            });
        }
    }
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-dark text-gray-light p-4">
                <h1 className="text-3xl pt-4 pb-8">Register Here</h1>
                <form className="w-full md:w-1/2 flex flex-col gap-4 mb-2" onSubmit={signupHandler} autoComplete="off">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="text" label="Name" value={name} setValue={setName} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input type="password" label="Password" value={password} setValue={setPassword} />
                        <input
                            type="password"
                            label="Confirm Password"
                            value={passwordConfirmation}
                            setValue={setPasswordConfirmation}
                        />
                    </div>

                    <input type="email" label="Email" value={email} setValue={setEmail} />
                    <button
                        variant="contained"
                        type="submit"
                        classes={{
                            contained: 'w-full bg-tech bg-opacity-90 hover:bg-opacity-100',
                        }}
                    >
                        Register
                    </button>
                </form>
                <p>
                    Already registered?
                    <Link className="underline" href="/login">
                        Login
                    </Link>
                </p>
            </div>
        </>
    );

};

export default Register;


// export async function getServerSideProps(context) {
//     const res = await loginRequest(email)
//     return { props: { user: res.data } }
//   }