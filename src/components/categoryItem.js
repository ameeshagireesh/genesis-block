const CategoryItem = ({ photoUrl, name, description, itemRating, category }) => {
    return (
        <div className="flex">
            <img src={photoUrl}></img>
            <div className="flex-col">
                <p>{name}</p>
                <div className="flex">
                    <p>{description}</p>
                    <p>{itemRating}</p>
                </div>
                <p>{category}</p>
                <div className="flex">
                    <p>
                        Place Order
                    </p>
                    {/* <Image></Image> */}
                </div>
            </div>
        </div>
    )
}

export default CategoryItem;