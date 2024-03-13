import './watch.css'

const Watch = ({watch, handleCart}) => {

    const {name, price} = watch;
    return (
        <div className="watch-container">
            <h3>Name:{name}</h3>
            <p>Price=${price} </p>
            <button onClick={handleCart}>Buy now</button>
        </div>
    );
};

export default Watch;