import React, { useState } from 'react';
import {Modal, Button, Input, Select } from 'antd';

const ModalDialog = () => {
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

    return (

        <>
            <Button type="primary" onClick={() => setVisible(true)} style={{marginBottom: 20}}>
                Create New Post
            </Button>
            <Modal
                title="Create New Post"
                centered
                visible={visible}
                onOk={() => { setVisible(false)
                }}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <p>Random Username: <b>{localStorage.getItem("randomName")}</b></p>
                <p>Content:</p>
                <TextArea rows={4} onChange={handleChange} value={content}
                          style={{marginBottom: 20}}/>

                <Select mode="tags" style={{ width: '100%' }} placeholder="Post Tags" onChange={handleChangeTags}>
                </Select>,
            </Modal>
        </>
    )
}

export default ModalDialog