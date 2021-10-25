import React, {useState} from 'react';
import {Modal, Button, Input, Select, notification} from 'antd';
import {createNewPost} from "../api/posts";

const ModalDialog = (props) => {
    const [visible, setVisible] = useState(false)
    const [content, setContent] = useState('')
    const [tags, setTags] = useState('')
    const {TextArea} = Input

    const handleChange = e => {
        setContent(e.target.value)
    }

    const handleChangeTags = value => {
        setTags(value)
    }

    const openCreatedSuccessNotification = () => {
        notification['success']({message: 'Post created successfully!'})
    }

    const handleSendPost = () => {
        const post = {
            "content": content,
            "tags": tags.toString(),
            "userId": localStorage.getItem("randomName")
        }
        createNewPost(post).then(res => res.status === 200 ? openCreatedSuccessNotification() : '')
        props.handleUpdateFlag()
        setVisible(false)
    }

    return (
        <div>
            <Button type="primary" onClick={() => setVisible(true)} style={{marginBottom: 20}}>
                Create New Post
            </Button>
            <Modal
                title="Create New Post"
                centered
                visible={visible}
                onOk={() => handleSendPost()}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <p>Random Username: <b>{localStorage.getItem("randomName")}</b></p>
                <p>Content:</p>
                <TextArea rows={4} onChange={handleChange} value={content} placeholder="Type more information"
                          style={{marginBottom: 20}}/>
                <p>Tags:</p>
                <Select mode="tags" style={{width: '100%'}} placeholder="Keep it short and unique"
                        onChange={handleChangeTags}/>
            </Modal>
        </div>
    )
}

export default ModalDialog