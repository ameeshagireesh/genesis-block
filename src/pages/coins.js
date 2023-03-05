import Navbar from "@/components/navbar";
import Image from "next/image";
// import Swal from 'sweetalert2'

export default function Coins() {
    return (
        <div class="p-5">
            <Image src='/wallet.svg' class="p-3"
                width={100}
                height={100}
            />
            <div class="flex">
                <div class="flex-col">
                    <p class="text-gray-400"> Your Points</p>
                    <h4 class="text-xl font-bold font-serif">20,000</h4>
                </div>
                <div class="text-gray-400 ml-auto"> 
                    <button class="underline">View Transaction History</button>
                </div>
            </div>
            <div class="flex-col pt-5 space-y-3 pb-5">
                <h3 class="text-xl font-bold font-serif ">Wanna add points?</h3>
                <p class="text-gray-400">Upgrade your fun factor by topping up your points!</p>
                <div class="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/gold.svg" class="p-2"
                    width={100}
                    height={100} />
                    <div class="flex-col pt-5">
                        <h4 class="text-xl font-bold font-serif">Gold</h4>
                        <p>100</p>
                    </div>
                    <p class="p-8 mx-10 text-s">250 Token</p>
                </div>

                <div class="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/platinum.svg" class="p-2"
                    width={100}
                    height={100} />
                    <div class="flex-col pt-5">
                        <h4 class="text-xl font-bold font-serif">Platinum</h4>
                        <p>250</p>
                    </div>
                    <p class="p-8 text-s">500 Token</p>
                </div>

                <div class="flex bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2">
                    <Image src="/diamond.svg" class="p-2"
                    width={100}
                    height={100} />
                    <div class="flex-col pt-5">
                        <h4 class="text-xl font-bold font-serif">Diamond</h4>
                        <p>500</p>
                    </div>
                    <p class="p-8 text-s">1000 Token</p>
                </div>
            </div>
{/* 
            <Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
}) */}


            <Navbar />
        </div>
    )
}