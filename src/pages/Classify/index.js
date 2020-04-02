import React, { Component } from 'react'
import classifyAPI from '@api/classifyAPI'
import { Card, message, Table, Button, Popconfirm, Modal, notification, Spin } from 'antd'
import style from './index.module.less'
// const { confirm } = Modal
// const modal = Modal.info();

class ClassifyList extends Component {
    state = {
        visible: false,//模态框可视状态，默认隐藏
        Tvisible: false,//模态框可视状态，默认隐藏
        spinning: false,//加载中
        list: [],//分类列表数据
        count: 0,//总数量
        columns: [
            { title: '_id', fixed: 'left', dataIndex: '_id', key: '_id', width: 300 },
            { title: '类型', dataIndex: 'Type', key: 'type', width: 120 },
            {
                title: '操作', fixed: 'right', key: 'action', width: 240, render: (recode) => {
                    return (
                        <div>
                            <Popconfirm title='你确定要删除这个分类么？'
                                onConfirm={() => { this.delType(recode._id) }}
                            >
                                <Button type='danger' size='small' style={{ marginRight: '20px' }}>删除</Button>
                            </Popconfirm>
                            <Button size='small' onClick={this.showConfirm}>修改</Button>
                        </div>
                    )
                }
            }
        ]
    }
    showConfirm = () => {
        const modal = Modal.confirm();
        modal.update({
            title: '商品分类修改',
            okText: '保存',//默认为确认
            cancelText: '关闭',//默认为取消
            destroyOnClose: true,
            //默认false。默认关闭后状态不会自动清空, 如果希望每次打开都是新内容需要设置true
            content: (
                <div>
                    将该分类名称修改为：<input type="text" /*defaultValue={this.state.typeName}*/ /*ref='typeName'*/ />
                </div>
            ),
            onOk() {
                //调用点击确定时回调的方法
                console.log(1)
                // console.log(this)//undefind
            },
            onCancel() {
                //点击取消/遮罩层的时候回调的方法
                modal.destroy();//这是调用Modal.confirm()后返回的引用，可以通过该引用更新和关闭弹窗
            },
        });
    }

    // onOk = async () => {
    //     let Type1 = this.refs.type.value
    //     // let result = await classifyAPI.add({ type1 })
    //     // console.log(result)
    //     console.log(Type1)
    //     console.log(this)
    //     // if (result.code !== 0) {
    //     //     return notification.error(
    //     //         { description: '商品分类添加失败，请详细检查传输', message: '错误', duration: 1.5 })
    //     // }
    //     // notification.success({ description: '商品分类添加成功，模态框即将关闭', message: '成功', duration: 1.5 })
    //     // this.setState({ visible: false })
    //     // this.refreshList()

    // }

    // onCancel = () => {
    //     this.setState({ Mvisible: false })
    // }

    componentDidMount() {
        this.refreshList()
    }

    //删除商品分类
    delType = async (_id) => {
        let { code, msg } = await classifyAPI.del(_id)
        if (code) { return message.error(msg) }
        this.refreshList()
    }

    // showConfirm = () => {
    //     confirm({
    //         title: '商品分类修改',
    //         okText: '保存',//默认为确认
    //         cancelText: '关闭',//默认为取消
    //         destroyOnClose: true,
    //         //默认false。默认关闭后状态不会自动清空, 如果希望每次打开都是新内容需要设置true   /**/
    //         content: (
    //             <div>
    //                 将该分类名称修改为：<input type="text" /*ref='typeName'*/ />
    //             </div>
    //         ),

    //         onOk() {
    //             //调用点击确定时回调的方法
    //             // let typeName = this.refs.typeName.value
    //             //     let ModifyResult = classifyAPI.modify({ typeName })//_id,
    //             // console.log(typeName)
    //             // console.log(this)
    //             // if (ModifyResult.code !== 0) {
    //             //     return notification.error(
    //             //         { description: '商品分类修改失败，请详细检查传输', message: '错误', duration: 1.5 })
    //             // }
    //             // notification.success({ description: '商品分类修改成功，模态框即将关闭', message: '成功', duration: 1.5 })
    //             // this.refreshList()
    //             // modify
    //         },
    //         onCancel() {
    //             // 点击取消 / 遮罩层的时候回调的方法
    //             modal.destroy();//这是调用Modal.confirm()后返回的引用，可以通过该引用更新和关闭弹窗
    //         },
    //     });
    // }

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
        let { list, columns, visible, Tvisible, spinning } = this.state
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
                    商品分类名称 :　<input type="text" ref='type' /><br />
                </Modal>


            </div>
        );
    }
}
export default ClassifyList;

//  {/* 添加的模态框 */}
//  <Modal
//  title="商品分类的修改"
//  visible={this.state.Tvisible}
//  onOk={this.onOk}
//  onCancel={this.onCancel}
// >
//  修改商品分类名称为 :　<input type="text" ref='typeName' /><br />
// </Modal>

