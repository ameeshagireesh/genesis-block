import Image from "next/image"

export default function Backcard() {
    return (
        <Image className="mx-auto my-auto"
            src="/back-event-card.svg"
            width={300}
            height={500}
            alt="backCard"
        />
    )
}