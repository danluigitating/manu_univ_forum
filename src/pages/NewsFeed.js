import Posts from "../components/Posts"
import React, {useEffect, useState} from "react"
import {getAllPosts} from "../api/posts";
import {getAllComments} from "../api/comments";
import {getAllUsers} from "../api/users";

export const NewsFeed = () => {
    const [newsFeedData, setNewsFeedData] = useState([])
    const [newsFeedComments, setNewsFeedComments] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllPosts().then(res => setNewsFeedData(res.data))
        getAllComments().then(res => setNewsFeedComments(res.data))
        getAllUsers().then(res => setUsers(res.data))
    }, [])

    return (<div>
        {Object.keys(newsFeedData).length !== 0 && Object.keys(newsFeedComments).length !== 0
        && Object.keys(users).length !== 0 && newsFeedData.map((data) => {
            const comment = newsFeedComments.filter((comment) => comment.post_id === data.post_id)
            return <Posts key={data.post_id} data={data} comments={comment} users={users}/>
        })}
    </div>)
}