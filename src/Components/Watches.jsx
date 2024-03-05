import { useEffect } from "react";
import { useState } from "react";


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
            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Watches;