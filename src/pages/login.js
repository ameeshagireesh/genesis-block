import Image from "next/image"

export default function Login({ authUrl }) {
    return (
        <>
            <div class="flex flex-col pt-20 p-10 mx-auto my-auto">
                <div class="pb-10">
                    <h1 class="text-xl font-bold font-serif ">
                        Hello, let's get started!
                    </h1>
                    <p class="text-gray-400 text-sm">
                        Register for the event here and don't worry
                    </p>
                </div>
                <Image class="mx-auto my-autopt-3 pb-3"
                    src="/voucher.svg"
                    width={200}
                    height={200}>
                </Image>
                <div class="pt-16 pb-10">
                    <h3 class="text-xl font-bold font-serif">
                        Register for Sunburn'23
                    </h3>
                    <p class="text-gray-400 text-sm">
                        Sunburn Festival is a commercial electronic dance music festival held in India.
                    </p>
                </div>
                <div class="flex justify-center my-auto">
                    <a href={authUrl} class="bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2 flex space-x-3 w-full h-14 items-center justify-center">
                            Sign in!
                    </a>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch('http://localhost:3000/api/auth/google');
    const { url } = await response.json();
    return {
        props: { authUrl: url }, // will be passed to the page component as props
    }
}