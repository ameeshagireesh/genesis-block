import Navbar from "@/components/navbar"
import Category from "@/components/categoryPill"
import Image from "next/image"
import ReactCardFlip from "react-card-flip"
import { useState } from "react"
import CategoryItem from "@/components/categoryItem"
import Backcard from "./backcard"
import { getAllAttraction } from "@/api/requests"

export default function Home({ attractions }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  const categories = [
    {
      categoryName: 'FOOD',
      categoryTitle: 'Food & Drinks',
    },
    {
      categoryName: 'EVENT',
      categoryTitle: 'Events'

    },
    {
      categoryName: 'DISPENSARY',
      categoryTitle: 'Dispensary'

    },
    {
      categoryName: 'MERCHANDISE',
      categoryTitle: 'Merchandise'
    },
  ]

  return (
    <>
      <div className="flex flex-col pt-20 p-5 mx-auto my-auto  ">
        <div className="flex space-x-5 justify-center mx-5">
          {/* <img src="https://img.freepik.com/free-icon/user_318-174218.jpg" className="w-12 h-12 mx-auto my-auto "></img> */}
          <div className="flex-col">
            <p className="text-xl font-bold font-serif">Welcome Harsh, </p>
            <p className="text-gray-400">Hope you're excited to attend the event!</p>
          </div>
        </div>
        <div className="pt-10 pb-10 w-full">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div onClick={handleClick}>
              <Image className="mx-auto my-auto"
                src="/event-card.svg"
                width={500}
                height={500}
                alt="eventCard" />

            </div>
            <div onClick={handleClick}>
              <Backcard />
            </div>
          </ReactCardFlip>
          <div className="justify-center pt-5 mx-5">
            <h3 className="text-xl font-bold font-serif ">Things Near You</h3>
          </div>
          <div className="mx-5 my-5">
            <div className="flex space-x-3 pt-10 scroll-pl-6 snap-x">
              {categories.map((category, index) => (
                <Category key={index} {...category} />
              ))}
            </div>
            <div className="flex-col">
              {attractions.map((attraction, index) => {
                <CategoryItem category={attraction.category} description={attraction.description} name={attraction.name} photoUrl={attraction.photoUrl} key={index} />
              })}
              {/* <CategoryItem /> */}
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