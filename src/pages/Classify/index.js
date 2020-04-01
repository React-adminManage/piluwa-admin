import React, { Component } from 'react'
import classifyAPI from '@api/classifyAPI'
import { Card, message, Table, Button, Popconfirm, Modal, notification, Spin } from 'antd'
import style from './index.module.less'
class ClassifyList extends Component {
    state = {
        visible: false,//模态框可视状态，默认隐藏
        spinning:false,//加载中
        list: [],//分类列表数据
        count: 0,//总数量
        columns: [
            { title: '_id', fixed: 'left', dataIndex: '_id', key: '_id', width: 300 },
            { title: '类型', dataIndex: 'Type', key: 'type', width: 120 },
            {
                title: '操作', fixed: 'right', key: 'action', width: 120, render: (recode) => {
                    return (
                        <div>
                            <Popconfirm title='你确定要删除这个分类么？'
                                onConfirm={() => { this.delType(recode._id) }}
                            >
                                <Button type='danger' size='small' >删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            }
        ]
    }

    componentDidMount() {
        this.refreshList()
    }

    //删除商品分类
    delType = async (_id) => {
        let { code, msg } = await classifyAPI.del(_id)
        if (code) { return message.error(msg) }
        this.refreshList()
    }

    //获取商品数据
    // getListData = async () => {
    // classifyAPI.list().then((pramas) => {
    //     this.setState({ list: pramas.typeList })
    // })
    // }

    //刷新列表数据
    refreshList = async () => {
        this.setState({ spinning: true })
        classifyAPI.list().then((pramas) => {
            this.setState({ list: pramas.typeList, spinning: false })
        })
    }

    handleOk = async () => {
        let Type = this.refs.type.value
        let result = await classifyAPI.add({ Type })
        console.log(result)
        if (result.code !== 0) {
            return notification.error(
                { description: '商品分类添加失败，请详细检查传输', message: '错误', duration: 1.5 })
        }
        notification.success({ description: '商品分类添加成功，模态框即将关闭', message: '成功', duration: 1.5 })
        this.setState({ visible: false })
        this.refreshList()

    }

    handleCancel = () => {
        this.setState({ visible: false })
    }

    render() {
        let { list, columns, visible,spinning } = this.state
        return (
            <div className={style.box}>
                <Card title='商品分类列表' className={style.card}>
                    <Button type="primary" icon='plus' onClick={() => {
                        this.setState({ visible: true })
                    }}>添加分类</Button>
                    <Spin spinning={spinning}>
                        <Table columns={columns} dataSource={list} rowKey='_id'></Table>
                    </Spin>
                </Card>
                {/* 添加的模态框 */}
                <Modal
                    title="商品分类的添加"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    商品分类名称:<input type="text" ref='type' /><br />
                </Modal>
            </div>
        );
    }
}
export default ClassifyList;

