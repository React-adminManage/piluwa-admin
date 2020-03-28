import React, { Component } from 'react'
import style from './index.module.less'
import {Card, Table} from 'antd';
import api from '../../api/index'
const columns = [
    {
        title: '账号',
        dataIndex: '_id',
        key: '_id',
    },
    {
        title: '用户名',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: '密码',
        dataIndex: 'passWord',
        key: 'passWord',
    },
    {
        title: '状态',
        dataIndex: 'Status',
        key: 'Status',
    },
    {
        title: '身份',
        dataIndex: 'identity',
        key: 'identity',
    },
];
class Admins extends Component {
    state = { dataSource:[]}
    async componentDidMount(){
        let result =await api.list()
        console.log(result);
        this.setState({dataSource:result.adminList})
    }
    render() {
        let {dataSource}=this.state
        return (
            <div className={style.admins}>
                <Card title='管理员列表'>
                    <Table dataSource={dataSource} columns={columns}></Table>
                </Card>
            </div>
        );
    }
}
export default Admins;














