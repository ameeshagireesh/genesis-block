const Category = ({ categoryName, categoryTitle }) => {
    return (
        <div class="bg-zinc-800 hover:bg-zinc-900 rounded border-stone-500 border-2 p-1 snap-start">
            <a href={categoryName}>
                <div class="align-middle text-xs">
                    {categoryTitle}
                </div>
            </a>
        </div>
    )
}

export default Category;