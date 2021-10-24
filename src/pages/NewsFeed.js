import Posts from "../components/Posts"
import React, {useEffect} from "react"
import {getAllPosts} from "../api/posts";

export const NewsFeed = () => {

    useEffect( () => {getAllPosts().then( res => {console.log(res.data)})}, [])

    return (<div>
        <Posts/>
        <Posts/><Posts/><Posts/>
        <Posts/><Posts/>
        <Posts/><Posts/>
        <Posts/><Posts/>
    </div>)
}