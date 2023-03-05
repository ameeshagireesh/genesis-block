const Category = ({ photoUrl, name, description, itemRating, category }) => {
    return (
        <div class="flex">
            <img src={photoUrl}></img>
            <div class="flex-col">
                <p>{name}</p>
                <div class="flex">
                    <p>{description}</p>
                    <p>{itemRating}</p>
                </div>
                <p>{category}</p>
                <div class="flex">
                    <p>
                        Place Order
                    </p>
                    {/* <Image></Image> */}
                </div>
            </div>
        </div>
    )
}

export default Category;