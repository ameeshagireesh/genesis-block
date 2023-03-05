import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import CheckoutItem from '@/components/checkoutItem'
import Navbar from '@/components/navbar'
import Link from 'next/link'

export default function Checkout() {
    return (
        <div className="flex-col pt-20 p-5 mx-auto my-auto">
            <div className="flex ">
                <Link href="/">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
                <h4 className="text-xl font-bold font-serif mx-5">Checkout</h4>
            </div>
            <div className="flex mt-5 mb-5 ">
                <div className="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <div className="flex mt-5 mb-5">
                <div className="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <div className="flex mt-5 mb-5">
                <div className="flex-col">
                    <div>
                        White Sauce Pasta
                    </div>
                    <div>
                        $ 100
                    </div>
                </div>
                <CheckoutItem />
            </div>
            <Link href="/coupons" className="bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2 p-5 flex space-x-5 w-full">
                <p className="mr-auto">Apply Coupons</p>
                <ChevronRightIcon className="w-6 h-6" />
            </Link>
            <div className="flex pt-5">
                <p className="mr-auto">Item Total</p>
                <p> 190 Tokens</p>
            </div>
            <div className="flex pb-10">
                <p className="mr-auto">Your Total Tokens</p>
                <p> 20,000 Tokens</p>
            </div>
            <hr className="" />
            <div className="flex pt-5 pb-5">
                <p className="mr-auto">Item Total</p>
                <p> 190 Tokens</p>
            </div>
            <hr className="pb-5" />
            <Navbar />
        </div>
    )
}