import QuanityCounter from '@/components/quantitycounter'
import { TrashIcon} from '@heroicons/react/24/outline'

export default function CheckoutItem() {
    return (

        <div class="flex space-x-5 ml-5">
            <QuanityCounter class="ml-10 mr-10" />
            <TrashIcon class="w-6 h-6" />
        </div>
    )
}