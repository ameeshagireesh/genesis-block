import { useState } from "react";

export default function QuanityCounter() {
    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }

    function decrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div class="flex border-2 rounded">
            <div class="p-5">
                <button onClick={decrementQuantity}
                > - </button>
            </div>
            <div class="p-5">
                <span>{quantity}</span>
            </div>
            <div class="p-5">

                <button onClick={incrementQuantity}> + </button>
            </div>
        </div>
    )
}