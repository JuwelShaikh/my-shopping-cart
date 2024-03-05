import { useEffect } from "react";
import { useState } from "react";
import Watch from "./Watch";
import './watch.css'


const Watches = () => {

    const [watches, setWatches] = useState([]);

    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[]);

    return (
        <div>
            <h3>Watches available: {watches.length}</h3>
            <div className="watches-container">
                {
                    watches.map(watch => <Watch
                        watch={watch}
                        key={watch.id}
                    />)
                }
            </div>
        </div>
    );
};

export default Watches;