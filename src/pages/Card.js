import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import "./Card.css";

function Card({post}){

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();


    function removeFromCart(){
        //for removal only id is enough
        dispatch(remove(post.id));
        toast.error("Item removed to Cart");
    }

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to Cart");
    }

    return (
        <div className="card-item">
            <div className="card-title" >
                <h4> {post.title} </h4>
            </div>
            <div className="card-descrip">
                <p> {post.description} </p>
            </div>
            <div className="img-container">
                <img src={post.image} />
            </div>
            <div className="price-tag">
                <div className="price">
                    <p> $ {post.price} </p>
                </div>
                <div className="add-to-cart">
                    {
                        cart.some((p) => p.id == post.id) ? 
                        (
                            <button onClick={removeFromCart} >
                                Remove Item
                            </button>
                        ): 
                        (
                            <button onClick={addToCart} >
                                Add To Cart
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;