import Image from "next/image"

export default function Login({ authUrl }) {
    return (
        <>
            <div class="flex flex-col pt-20 p-8 mx-auto my-auto">
                <h1 class="text-3xl font-bold font-serif">
                    Hello, let's get started!
                </h1>
                <p class="text-gray-400">
                    Register for the event here and don't worry
                </p>
                <Image class="mx-auto my-autopt-3 pb-3"
                    src="/voucher.svg"
                    width={200}
                    height={200}>
                </Image>
                <h3 class="text-3xl font-bold font-serif">
                    Register for Sunburn'23
                </h3>
                <p class="text-gray-400">
                    Sunburn Festival is a commercial electronic dance music festival held in India.
                </p>
                <div class="flex pt-5 mx-auto my-auto">
                    <a href={authUrl} class="bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2 p-5 flex space-x-3">
                        <Image src="/google-icon.png"
                            width={25}
                            height={25}></Image>
                        <p class="">
                            Sign in with Google
                        </p>
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