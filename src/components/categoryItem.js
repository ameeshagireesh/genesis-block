export default function CategoryItem () {
    return (
        <>
        <div className="flex border-2">
            <img src="https://www.shutterstock.com/image-photo/bangkok-thailand-february-6-2019-260nw-1308118378.jpg"></img>
            <div className="flex-col">
                <p>KFC</p>
                <div className="flex">
                    <p>KFC Yummy</p>
                    <p>5</p>
                </div>
                <p>food and drink</p>
                <div className="flex">
                    <p>
                        Place Order
                    </p>
                    {/* <Image></Image> */}
                </div>
            </div>
        </div>
        </>
    )
}
