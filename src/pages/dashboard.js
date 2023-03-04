import Category from "@/components/categoryPill"
import Image from "next/image"
import ReactCardFlip from "react-card-flip"
import { useState } from "react"

export default function Dashboard() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const categories = [
        {
            categoryName: 'food&drink',
            categoryTitle: 'Food & Drinks',
        },
        {
            categoryName: 'event',
            categoryTitle: 'Events'

        },
        {
            categoryName: 'dispensary',
            categoryTitle: 'Dispensary'

        },
        {
            categoryName: 'merch',
            categoryTitle: 'Merchandise'

        },
    ]

    // const categoryitems = [
    //     {
    //         itemLogo: ,
    //         itemName: "McDonald's",
    //         itemRating: "4.2",
    //         deliveryTime: "30 mins",
    //         categoryName: 
    //     }
    // ]
    return (
        <div class="flex flex-col pt-20 p-8 mx-auto my-auto ">
            <div class="flex space-x-5 justify-center">
                <img src="https://img.freepik.com/free-icon/user_318-174218.jpg" class="w-10 h-10 justify-evenly"></img>
                <div class="flex-col">
                    <p class="text-2xl font-bold font-serif">Welcome Harsh, </p>
                    <p class="text-gray-400">Hope you're excited to attend the event!</p>
                </div>
            </div>
            <div class="pt-10 pb-10">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div onClick={handleClick}>

                    <Image class="mx-auto my-ato"
                        src="/event-card.svg"
                        width={300}
                        height={500}
                    ></Image>
                    </div>
                    <div onClick={handleClick}>
                        <p>hello there</p>
                    </div>
                </ReactCardFlip>
            </div>
            <div class="justify-center">
                <h3 class="text-3xl font-bold font-serif">Things Near You</h3>
            </div>
            <div class="">
                <div class="flex space-x-3 pt-10 scroll-pl-6 snap-x">

                    {categories.map((category, index) => (
                        <Category key={index} {...category} />

                    ))}
                </div>
            </div>
        </div>
    )
}