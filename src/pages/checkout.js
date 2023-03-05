import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import CheckoutItem from '@/components/checkoutItem'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Checkout() {
    return (
        <div class="flex-col pt-20 p-5 mx-auto my-auto">
            <div class="flex ">
                <Link href="/">
                    <ChevronLeftIcon class="w-6 h-6" />
                </Link>
                <h4 class="text-xl font-bold font-serif mx-5">Checkout</h4>
            </div>
            <div class="flex mt-5 mb-5 ">
                <div class="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <div class="flex mt-5 mb-5">
                <div class="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <div class="flex mt-5 mb-5">
                <div class="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <Link href="/coupons" class="bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2 p-5 flex space-x-5 w-full">
                <p class="mr-auto">Apply Coupons</p>
                <ChevronRightIcon class="w-6 h-6" />
            </Link>
            <div class="flex pt-5">
                <p class="mr-auto">Item Total</p>
                <p> 190 Tokens</p>
            </div>
            <div class="flex pb-10">
                <p class="mr-auto">Your Total Tokens</p>
                <p> 20,000 Tokens</p>
            </div>
            <hr class="" />
            <div class="flex pt-5 pb-5">
                <p class="mr-auto">Item Total</p>
                <p> 190 Tokens</p>
            </div>
            <hr class="pb-5" />
            <Navbar />
        </div>
    )
}