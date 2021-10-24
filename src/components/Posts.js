import React, {createElement, useState} from 'react'
import {Comment, Tooltip, Avatar, List, Input, Button} from 'antd'
import moment from 'moment'
import {DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled} from '@ant-design/icons'

const Posts = () => {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [action, setAction] = useState(null)
    const [comment, setComment] = useState([])
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
        setLikes(1)
        setDislikes(0)
        setAction('upvoted')
    }

    const dislike = () => {
        setLikes(0)
        setDislikes(1)
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
    ]

    const handleSubmit = () => {
        if (!value) {
            return
        }

        setValue('')
        setComment([...comment, {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{value}</p>,
            datetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }])
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <Comment
            actions={actions}
            author={<h1 style={{fontSize: 15}}>Han Solo</h1>}
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo"/>}
            content={
                <div>
                    <p style={{fontSize: 15}}>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                    {comment.length > 0 && <CommentList comments={comment}/>}
                    {openComment && <div><TextArea rows={4} onChange={handleChange} value={value}
                                                   style={{marginTop: 20, marginBottom: 20}}/>
                        <Button htmlType="submit" onClick={handleSubmit} type="primary">Add Comment</Button>
                    </div>}
                </div>
            }
            datetime={<span style={{fontSize: 15}}>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>}
        >

        </Comment>
    )
}

export default Posts