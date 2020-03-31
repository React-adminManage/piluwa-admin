import React, { Component } from 'react'
import style from './index.module.less'
import { Card, Table, Button, Modal, notification, Spin, Popconfirm, message, Tag } from 'antd';
import AdminApi from '../../api/AdminApi'
// let columns =
let statusobj = {
    '0': { txt: '审核完毕', color: 'cyan' },
    '1': { txt: '待审核', color: 'blue' },
}
let ButterMan = {
    '0': { txt: '良民', color: 'skyblue' },
    '1': { txt: '汉奸', color: 'orange' }
}
class Admins extends Component {
    state = {
        dataSource: [],
        visible: false,
        spinning: false,
        columns: [
            // {
            //     title: '_id',
            //     dataIndex: '_id',
            //     // key: '_id',
            //     id: '1'

            // },
            // 每個low加一個id 並且在table 裡面加rowaKey={row=>row._id}  接觸報錯
            {
                title: '用户名',
                dataIndex: 'userName',
                // key: '用户名',
                id: '2'
            },
            // {
            //     title: '密码',
            //     dataIndex: 'passWord',
            //     // key: '密码',
            //     id: '3'
            // },
            {
                title: '状态',
                dataIndex: 'Status',
                // key: '状态',
                id: '4',
                // render(oStatus) {
                //     return (
                //         <Tag color={statusobj[oStatus].color}>{statusobj[oStatus].txt}</Tag>
                //     )
                // }
            },
            {
                title: '身份',
                dataIndex: 'identity',
                // key: '状态',
                id: '5',
                render(oStatus) {
                    return (
                        <Tag color={ButterMan[oStatus].color}>{ButterMan[oStatus].txt}</Tag>
                    )
                }
            },
            {
                title: '操作',
                key: 'action',
                id: '6',
                render: (record) => {
                    // 自定义渲染的列表
                    return (
                        <div>
                            <Popconfirm
                                title="你确定要删除这个用户吗?"
                                onConfirm={() => {
                                    this.del(record._id)
                                }}
                                onCancel={() => {
                                    message.error('取消删除');
                                }}
                            >
                                <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                        </div>
                    )
                }
            },
        ]

    }
    // 根据后端返回的不同数字  渲染不同的内容
    change = async () => {
        let result = await AdminApi.list()
        let arr = []
        for (let i = 0; i <= result.adminList.length; i++) {
            arr.push(result.adminList[i])
        }
        return arr

    }
    //  删除管理员数据
    del = async (_id) => {
        // 获取到id 之后 调用接口删除id
        // console.log('删除',_id);
        let result = await AdminApi.del(_id)
        // 根据结果进行
        if (result.code !== 0) { return false }
        // 删除完后更新页面
        this.refreshList()

    }
    //  代表成功的回调
    handleOk = async () => {
        //  先获取输入内容
        console.log("1");
        let userName = this.refs.us.value
        let passWord = this.refs.ps.value
        let result = await AdminApi.add({ userName, passWord })
        if (result.code !== 0) {
            return notification.error({
                description: '添加失敗，請詳細的检查参数', message: '错误', duration: 1.5

            })
        }
        notification.success({ description: '管理员添ok，模态框即将关闭', message: '成功', duration: 1.5 })
        this.setState({ visible: false })
        console.log(result);
        // 请求成功之后再调用一次网络请求  来进行刷新页面
        this.refreshList()


        // 添加接头
        // 关闭模态框
        // 刷新页面
        console.log('点击handleOk +ok');

    }
    // 数据添加后刷新我们的列表数据
    refreshList = async () => {
        // 重新再进行一步网络请求数据
        let result = await AdminApi.list()
        // console.log(result);

        this.setState({ dataSource: result.adminList, spinning: false })
    }
    //  代表失败的回调
    handleCancel = () => {
        this.setState({ visible: false })

    }
    componentDidMount() {
        this.refreshList()
    }
    render() {
        const { size } = this.state;
        let { dataSource, visible, spinning, columns } = this.state
        return (
            <div className={style.admins}>
                <Card title='管理员列表'>
                    {/* dataSource 表格内容数据
                        columns  表头数据
                        rowkey  设置为唯一索引字段 */}
                    <Button type="primary" shape="round" icon="download" size={size} onClick={() => {
                        this.setState({ visible: true })
                    }}>添加</Button>
                    <Spin spinning={spinning}>
                        <Table dataSource={dataSource} columns={columns} rowKey={row => row._id}></Table>
                    </Spin>
                </Card>
                {/* 添加的模态框 */}
                <Modal
                    title="管理员添加"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    用戶名 :　<input type='text' ref="us" /><br />
                   密　碼 :　<input type='text' ref="ps" /><br />
                </Modal>
            </div>
        );
    }
}
export default Admins;














