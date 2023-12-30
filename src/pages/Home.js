import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Card from "./Card";
import "./Home.css";

function Home(){

    const url = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchUrl(){
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    },[]);


    return (
        <div className="cards-spinners">
            {
                loading ? (<Spinner/>) : 
                ( posts.length > 0 ?
                     (
                        posts.map( (post) => (<Card post={post} />) )
                     ) : "No post Exisits"
                     
                )
            }
        </div>
    )
}

export default Home;