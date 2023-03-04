import Card from "@/components/card/Card"

function HomeScreen() {
    return (
        <>
            <div class="container">
                <div class="flex">
                    <h3 class="flex-1"> Name</h3>
                    <h3 class="flex-2"> Wallet balance</h3>
                </div>
                <Card />
            </div>
        </>
    )
}

export default HomeScreen