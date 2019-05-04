This is a CMS Project.

## 制作首页App组件
### 1. 完成Header 区域，使用的是 vant中的 van-nav-bar 组件
### 2. 制作底部 Tabbar 区域，使用的是 MUI 的 Tabbar.html
+ 在制作购物车小图标的时候，操作相对多一些：
+ 先把扩展图标的css样式拷贝到lib\css中，再main。js 中引入
+ 在拷贝扩展字体库 ttf 文件到项目的font文件中
+ 为购物车小图标添加如下样式：class="mui-icon mui-icon-extra mui-icon-extra-cart"
### 3. 要在中间区域放置一个 router-view标签，用来展示匹配到的组件

## 改造 tabbar 为 router-link

## 设置 路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图数据

## 加载轮播图播放数据
### 1. 使用 axios.get() 获取数据；
### 2. 获取到的数据保存到组件的 data()中；
### 3. 使用 v-for 循环每个item项

## 九宫格区域样式

## 改造新闻资讯路由链接

## 新闻资讯页面制作
### 1. 绘制界面
### 2. 使用 axios 获取数据
### 3. 展示数据

## 实现新闻资讯列表点击跳转到新闻详情页面
### 1. 把列表中的每一项改造为 router-link，同时提供一个唯一的id标识符
### 2. 创建新闻详情的组件页面：NewsInfo.vue
### 3. 在路由模块中，将新闻详情的路由地址和组件页面对应起来

## 实现新闻详情的页面布局和数据渲染

## comments.vue评论子组件
### 1.先单独创建一个comments.vue评论子组件
### 2. 在需要使用 comments 组件的页面中，先手动导入该组件
+ `import comment from './components/sub_comps/comments.vue'`
### 3. 在父组件中使用 components属性，将导入的comment组件注册为自己的子组件
### 4. 将注册子组件时的名称，以标签形式在页面中引用

## 获取所有的评论数据显示到页面中

## 实现评论区中点击加载更多评论内容功能
### 1. 为加载更多按钮绑定点击事件
### 2. 点击加载更多按钮，让 pageIndex++，然后再次调用获取数据，得到新一页的内容
### 3. 为了不让新一页数据覆盖老页面数据，应该调用数据的concat()方法拼接新和老的数据。