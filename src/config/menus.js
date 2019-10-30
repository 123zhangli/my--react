const menus = [
    {
        icon : 'home',
        title : '首页',
        key : '/'
    },
    {
        icon : 'appstore',
        title : '商品',
        key : '/products',
        children :[
            {
                icon : 'home',
                title : '分类管理',
                key : '/category'
            },
            {
                icon : 'shopping',
                title : '商品管理',
                key : '/products'
            },
        ]
    },
    {
        icon : 'usergroup-delete',
        title : '用户管理',
        key : '/user'
    },
    {
        icon : 'solution',
        title : '权限管理',
        key : '/role',
    },
    {
        icon : 'area-chart',
        title : '图形图表',
        key : '/charts',
        children: [
            {
                icon : 'bar-chart',
                title : '柱状图',
                key : '/charts/bar'
            },
            {
                icon : 'line-chart',
                title : '折线图',
                key : '/charts/line'
            },
            {
                icon : 'pie-chart',
                title : '饼状图',
                key : '/charts/pie'
            },
        ]
    },
];

export default menus