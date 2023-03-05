import QuanityCounter from '@/components/quantitycounter'
import { TrashIcon} from '@heroicons/react/24/outline'

export default function CheckoutItem() {
    return (

        <div className="flex space-x-5 ml-5">
            <QuanityCounter className="ml-10 mr-10" />
            <TrashIcon className="w-6 h-6" />
        </div>
    )
}