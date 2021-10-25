import React, {createElement, useState} from 'react'
import {Comment, Tooltip, Avatar, List, Input, Button, notification} from 'antd'
import moment from 'moment'
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons'
import {createNewComment} from "../api/comments";

const Posts = props => {
    const [likes, setLikes] = useState(props.data.dislikes)
    const [dislikes, setDislikes] = useState(props.data.likes)
    const [action, setAction] = useState(null)

    let existingComments = []
    props.comments.forEach( comment => { existingComments.push({
        author: comment.user_id,
        avatar: 'https://joeschmoe.io/api/v1/random',
        content: <p>{comment.content}</p>,
        datetime: moment(comment.create_date).format('YYYY-MM-DD HH:mm:ss')
    })})

    const [comment, setComment] = useState(existingComments)
    const [value, setValue] = useState('')
    const [openComment, setOpenComment] = useState(false)
    const {TextArea} = Input

    const CommentList = ({comments}) => (
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={props => <Comment {...props} />}
        />
    )

    const like = () => {
        setLikes(Number(likes) + 1)
        setAction('upvoted')
    }

    const dislike = () => {
        setDislikes(Number(dislikes) + 1)
        setAction('downvoted')
    }

    const actions = [
        <Tooltip key="comment-basic-like" title="Upvote">
      <span onClick={like}>
        {createElement(action === 'upvoted' ? LikeFilled : LikeOutlined)}
          <span className="comment-action" style={{fontSize: 15}}>{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Downvote">
      <span onClick={dislike}>
        {createElement(action === 'downvoted' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action" style={{fontSize: 15}}>{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to" style={{fontSize: 15}}
              onClick={() => setOpenComment(!openComment)}>Add Reply</span>,
        <div key="comment-basic" style={{fontSize: 15}}>Tags: {props.data.tags}</div>,
    ]

    const openCreatedSuccessNotification = () => {
        notification['success']({message: 'Comment created successfully!'})
    }

    const handleSubmit = () => {
        if (!value) {
            return
        }

        const data = {
            "content": value,
            "postId": props.postId,
            "userId": localStorage.getItem("randomName")
        }

        createNewComment(data).then(res => res.status === 200 ? openCreatedSuccessNotification() : '')

        setValue('')
        setComment([...comment, {
            author: localStorage.getItem("randomName"),
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{value}</p>,
            datetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }])
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <div>
            <Comment
                actions={actions}
                author={<h1 style={{fontSize: 15}}>{props.data.user_id}</h1>}
                avatar={<Avatar src="https://i.pravatar.cc/300"/>}
                content={
                    <div>
                        <p style={{fontSize: 15}}>
                            {props.data.content}
                        </p>
                        {comment.length > 0 && <CommentList comments={comment}/>}
                        {openComment && <div><TextArea rows={4} onChange={handleChange} value={value}
                                                       style={{marginTop: 20, marginBottom: 20}}/>
                            <Button htmlType="submit" onClick={handleSubmit} type="primary">Add Comment</Button>
                        </div>}
                    </div>
                }
                datetime={<span style={{fontSize: 15}}>{moment(props.data.create_date).format('YYYY-MM-DD HH:mm:ss')}</span>}
            >

            </Comment>
        </div>
    )
}

export default Posts