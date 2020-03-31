export default[
  {
    key:'0',
    title:"主页面",
    icon:'home',
    path:'/home'
  },
  {
    key:'1',
    title:"类别管理",
    icon:'home',
    path:'/admin/classify',
    children:[
      {
        key:'1-1',
        title:"分类列表",
        path:'/admin/type/find'
       },
      {
       key:'1-2',
       title:"分类添加",
       path:'/admin/type/add'
     }
    ]
  },
  {
   key:'2',
   title:'商品管理',
   icon:'user',
   path:'/admin/shop',
   children:[
     {
       key:'2-1',
       title:"商品列表",
       path:'/admin/shop/shopList'
      },
     {
      key:'2-2',
      title:"商品添加",
      path:'/admin/shop/shopAdd'
    }
   ]
  },
  {
    key:'4',
    title:"数据统计",
    icon:'echarts',
    path:'/admin/echarts',
    children:[
      {
        key:'4-1',
        title:'饼状图',
        path:'/admin/echarts/pie'
      },
      {
        key:'4-2',
        title:'折线图',
        path:'/admin/echarts/line'
      },
      {
        key:'4-3',
        title:'柱状图',
        path:'/admin/echarts/bar'
      },
    ]
  },
  {
    key:'5',
    title:"订单管理",
    icon:'echarts',
    path:'/admin/order',
    children:[
      {
        key:'5-1',
        title:'订单列表',
        path:'/admin/order/List'
      },
      {
        key:'5-2',
        title:'订单审核',
        path:'/admin/order/Audit'
      },
    ]
  },
  {
    key:'7',
    title:"用户管理",
    icon:'user',
    path:'/admin/user'
  },
  {
    key:'8',
    title:"管理员管理",
    icon:'administrator',
    path:'/admin/administrator'
  },
  {
    key:'9',
    title:"系统设置",
    icon:'set',
    path:'/admin/set'
  },
]
