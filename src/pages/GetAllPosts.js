import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function GetAllPosts() {
    const [posts , setPosts] = useState([]);
    const getPosts = async () => {
        try{
            // await fetch(`http://localhost:4000/posts/get-all-posts`, {
            await fetch(`${process.env.REACT_APP_BASE_API}/posts/get-all-posts`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                if(!res.ok) throw new Error("fail to get all posts !");
                return res.json()
            })
            .then((result) => {
                // console.log(result);
                setPosts(result.allPosts);
            })
        }catch(error){
            console.log(error);
            return;
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Header />
            <hr />
            <div>
                {
                    posts ?
                    (posts.map((post) => {
                        return (
                            <div key={post._id}>
                                <div>{post.content}</div>
                                <hr />
                            </div>
                        )
                    })) :
                    <h1> پستی یافت نشد . </h1>
                }
            </div>
        </>
    );
}

export default GetAllPosts;
