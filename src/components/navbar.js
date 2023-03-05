import { HomeIcon, UserIcon, CurrencyRupeeIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="flex bottom-5 space-x-10 justify-center ">
                <Link href="/" className="flex-col justify-center center-align" >
                    <HomeIcon className="w-6 h-6 ml-2" />
                    <p>
                        HOME
                    </p>
                </Link>
            <div className="flex-col">
                <Link href="/coins">
                    <CurrencyRupeeIcon className="w-6 h-6 ml-2" />
                    <p>
                        COINS
                    </p>
                </Link>
            </div>
            <div className="flex-col">
                <Link href="/checkout">
                    < ShoppingBagIcon className="w-6 h-6 ml-4" />
                    <p>
                        BASKET
                    </p>
                </Link>
            </div>
            {/* <div className="flex-col">
                <Link href="/profile">
                    <UserIcon className="w-6 h-6 ml-4" />
                    <p>
                        PROFILE
                    </p>
                </Link>
            </div> */}
        </div>
    )
}