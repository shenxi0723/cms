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

