import { HomeIcon } from '@heroicons/react/24/outline'
import { CurrencyRupeeIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div class="flex space-x-10 items-center justify-center">
            <div class="flex-col">
                <Link href="/">

                    <HomeIcon class="w-6 h-6 ml-2" />
                    <p>
                        HOME
                    </p>
                </Link>
            </div>
            <div class="flex-col">
                <Link href="/coins">
                    <CurrencyRupeeIcon class="w-6 h-6 ml-2" />
                    <p>
                        COINS
                    </p>
                </Link>
            </div>
            <div class="flex-col">
                <Link href="/profile">
                    <UserIcon class="w-6 h-6 ml-4" />
                    <p>
                        PROFILE
                    </p>
                </Link>
            </div>
        </div>
    )
}