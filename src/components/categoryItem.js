const Category = ({ itemLogo, itemName, itemRating, deliveryTime, categoryName }) => {
    return (
        <div class="flex">
            <img></img>
            <div class="flex-col">
                <p>{itemName}</p>
                <div class="flex">
                    <Image></Image>
                    <p>{itemRating}</p>
                    <p>{deliveryTime}</p>
                </div>
                <p>{categoryName}</p>
                <div class="flex">
                    <p>
                        Place Order
                    </p>
                    <Image></Image>
                </div>
            </div>
        </div>
    )
}

export default Category;