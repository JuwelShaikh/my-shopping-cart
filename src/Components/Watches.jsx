import { useEffect } from "react";
import { useState } from "react";
import Watch from "./Watch";
import './watch.css'


const Watches = () => {

    const [watches, setWatches] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('watches.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, []);

    const handleCart = watch => {
        const newCart = [...cart, watch]
        setCart(newCart)
    }

    return (
        <div>
            <h3>Watches available: {watches.length}</h3>
            <h4>Cart: {cart.length}</h4>
            <div className="watches-container">
                {
                    watches.map(watch => <Watch
                        watch={watch}
                        key={watch.id}
                        handleCart={handleCart}
                    />)
                }
            </div>
        </div>
    );
};

export default Watches;