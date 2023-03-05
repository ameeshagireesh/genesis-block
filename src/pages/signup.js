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
            <div className="flex flex-col bg-gray-dark text-gray-light pt-10 p-5">
                <h3 className="text-xl font-bold font-serif">Let's get personal!</h3>
                <p>Help us make your event experience amazing!</p>
                <form className="w-full flex flex-col gap-4 mb-2" onSubmit={signupHandler}>
                    <div className="flex-col md:flex-row gap-4 pt-5">
                        <p>Name.* </p>
                        <input class="rounded w-full border-stone-500 border-2" type="text" label="Name" value={name} setValue={setName} />
                    </div>
                    <div className="flex-col md:flex-row gap-4 pt-5">
                        <p>Email.* </p>
                        <input class="rounded w-full border-stone-500 border-2" type="email" label="Email" value={email} setValue={setEmail} />
                    </div>
                    <div className="flex-col md:flex-row gap-4 pt-5">
                        <p>Password.*</p>
                        <input class="rounded w-full border-stone-500 border-2" type="password" label="Password" value={password} setValue={setPassword} />
                    </div>
                    <div className="flex-col md:flex-row gap-4 pt-5">
                        <p>Confirm Password.*</p>
                        <input
                            class="rounded w-full border-stone-500 border-2"
                            type="password"
                            label="Confirm Password"
                            value={passwordConfirmation}
                            setValue={setPasswordConfirmation}
                        />
                    </div>

                    <button
                        class="rounded w-full pt-10 bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2"
                        variant="contained"
                        type="submit"
                        classes={{
                            contained: 'w-full bg-tech bg-opacity-90 hover:bg-opacity-100',
                        }}
                    >
                        Time to get tokenized!
                    </button>
                </form>
                <p class="mx-auto">
                    Important:  Fields with * are compulsory.
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