import Navbar from "@/components/navbar";
import Image from "next/image";
import { addToken } from "@/api/requests";
import Swal from 'sweetalert2'
import { useState } from "react";

export default function Coins() {
    const [points, setPoints] = useState("0")
    const handleButtonClick = () => {
        Swal.fire({
            title: 'Do you want to confirm your purchase?',
            showCancelButton: true,
            confirmButtonText: 'Purchase Now!',
            cancelButtonText: 'Cancel',
            background: '#1E1E1E',
            customClass: {
                confirmButtonText: { width: '100%' },
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await addToken();

            }
        })
    }
    return (
        <div className="p-5">
            <Image src='/wallet.svg' className="p-3"
                width={100}
                height={100}
                alt="wallet"
            />
            <div className="flex">
                <div className="flex-col">
                    <p className="text-gray-400"> Your Points</p>
                    <h4 className="text-xl font-bold font-serif">20,000</h4>
                </div>
                <div className="text-gray-400 ml-auto">
                    <button className="underline">View Transaction History</button>
                </div>
            </div>
            <div className="flex-col pt-5 space-y-3 pb-5">
                <h3 className="text-xl font-bold font-serif ">Wanna add points?</h3>
                <p className="text-gray-400">Upgrade your fun factor by topping up your points!</p>
                <button onClick={handleButtonClick} className="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/gold.svg" className="p-2"
                        width={100}
                        height={100}
                        alt="goldCard"
                    />
                    <div className="flex-col pt-5">
                        <h4 className="text-xl font-bold font-serif">Gold</h4>
                        <p>100</p>
                    </div>
                    <p className="p-8 mx-10 text-s">250 Token</p>
                </button>

                <button onClick={handleButtonClick} className="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/platinum.svg" className="p-2"
                        width={100}
                        height={100} />
                    <div className="flex-col pt-5">
                        <h4 className="text-xl font-bold font-serif">Platinum</h4>
                        <p>250</p>
                    </div>
                    <p className="p-8 text-s">500 Token</p>
                </button>

                <button onClick={handleButtonClick} className="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/diamond.svg" className="p-2"
                        width={100}
                        height={100} />
                    <div className="flex-col pt-5">
                        <h4 className="text-xl font-bold font-serif">Diamond</h4>
                        <p>500</p>
                    </div>
                    <p className="p-8 text-s">1000 Token</p>
                </button>
            </div>


            <Navbar />
        </div>
    )
}