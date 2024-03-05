import './watch.css'

const Watch = ({watch}) => {

    const {name,image, price} = watch;
    return (
        <div className="watch-container">
            <h3>Name:{name}</h3>
            <img src={image} alt="" />
            <p>Price=${price} </p>
        </div>
    );
};

export default Watch;