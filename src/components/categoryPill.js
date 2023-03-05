const Category = ({ categoryName, categoryTitle }) => {
    return (
        <div class="bg-zinc-800 hover:bg-zinc-900 whitespace-nowrap rounded border-stone-500 border-2 p-1 snap-start">
            <button onClick>
                <div class="align-middle text-xs">
                    {categoryTitle}
                </div>
            </button>
        </div>
    )
}

export default Category;