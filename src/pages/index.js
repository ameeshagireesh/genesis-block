import Navbar from "@/components/navbar"
import Category from "@/components/categoryPill"
import Image from "next/image"
import ReactCardFlip from "react-card-flip"
import { useState } from "react"
import { getAllAttraction } from "@/api/requests"
import Backcard from "./backcard"

export default function Home() {
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

  return (
    <>
      <div class="flex flex-col pt-20 p-5 mx-auto my-auto  ">
        <div class="flex space-x-5 justify-center">
          <img src="https://img.freepik.com/free-icon/user_318-174218.jpg" class="w-10 h-10 mx-auto my-auto "></img>
          <div class="flex-col">
            <p class="text-2xl font-bold font-serif">Welcome Harsh, </p>
            <p class="text-gray-400">Hope you're excited to attend the event!</p>
          </div>
        </div>
        <div class="pt-10 pb-10 w-full">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>

              <Image class="mx-auto my-auto"
                src="/event-card.svg"
                width={500}
                height={500}
              ></Image>
            </div>
            <div onClick={handleClick}>
              <Backcard />
            </div>
          </ReactCardFlip>
          <div class="justify-center pt-5">
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
      </div>
      <Navbar />

    </>
  )
}

export async function getServerSideProps(context) {
  const res = await getAllAttraction()
  return { props: { attractions: res.data } }
}