# HTML+css基础

### 链接标签

```
<a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a>
```

`href`：用于指定链接目标的 `url` 地址，当为标签应用 `href` 属性时，它就具有了超链接的功能。 Hypertext Reference 的缩写，意思是超文本引用。

`target`：用于指定链接页面的打开方式。

-   `_self` 为在当前窗口打开（默认值）。

-   `_blank` 为在新窗口中打开方式。

### 自定义列表

自定义列表常用于对术语或名词进行解释和描述，自定义列表的列表项前没有任何项目符号。其基本语法如下：

<dl>
	<dt>名词1</dt>
	<dd>名词1解释1</dd>
	<dd>名词1解释2</dd>
	...
	<dt>名词2</dt>
	<dd>名词2解释1</dd>
	<dd>名词2解释2</dd>
	...
</dl>

### 文本格式化标签

- 上标/下标 `<sup> `  `<sub>`

- 下划线/删除线 `<ins>`   `<del>`

- 引用文本 `<blockquote>`   (长引用)`<q>`(短引用)

- 转义字符

   空格 `&nbsp;` ` &#160;`

  小于号 `&lt;` ` &#60;`

  大于号 `&gt;` ` &#62;`

  和符号& `&amp;`

  版权© `&copy;`

  注册商标® `&reg;`

  商标™ `&trade;`

### 表格

<table>
	<tr>
		<th>表头内的文字</th>
		...
	</tr>
	<tr>
		<td>单元格内的文字</td>
		...
	</tr>
	...
</table>

### 合并单元格

-   `rowspan` 单元格所占行
-   `colspan` 单元格所占列

# CSS

### 选择器

- 复杂选择器

  - 交集选择器:: 可以同时使用多个选择器，这样可以选择同时满足多个选择器的元素。

    语法：选择器1选择器2{ }  **没有空格**

  - 并集选择器 ： 可以同时使用多个选择器，多个选择器将被同时应用指定的样式。
    语法： 选择器1,选择器2,选择器3 { } **逗号隔开**

  - 后代选择器

    语法 选择器1  选择器2{}  **有空格**

     

### CSS的继承问题

给父元素设置的样式 ,子元素也会生效(继承) 

**可继承**    字体相关(大小,颜色) ,文本相关(对齐方式,行高)

**不可继承** a 标签 字体颜色 不会继承父元素 

想修改a标签的颜色 ,必须选到a标签 

### 标签的表现形式

- 块级标签(元素)  [div p  标题标签 table tr ul li  dl等]
  - 可以设置宽高 
  - 换行展示
  - 不写宽度,宽度是父元素的百分百

- 行内元素[`a` `span` `strong` `del` `ins` `em` `i` `b`]
  - 同行展示
  - 设置宽高无效
  - 不写宽度,宽度由内容撑开
- 行内块元素[input button img]
  - 同行展示
  - 设置宽高有效
  - 不写宽高,宽高由内容撑开

### 块元素的内容由宽度实现

`width:fit-content;`

# 背景图片属性

| 属性名称              | 属性作用           | 值                                                    |
| --------------------- | ------------------ | ----------------------------------------------------- |
| background-color      | 背景图片颜色       | color                                                 |
| background-image      | 背景图片           | url(‘1.png’)                                          |
| background-repeat     | 平铺方式           | repeat 、no-repeat、repeat-x、repeat-y                |
| background-position   | 图片位置           | left、 right、 top、 bottom、 center                  |
| background-attachment | 背景滚动           | scroll、fixed (注意：基于 body 的定位）               |
| background            | 简写（顺序不能错） | background: green url(1.jpg) no-repeat center  fixed; |

## png/jpg 区别

-   jpg 背景不透明/png 背景透明
-   jpg 适合色彩丰富的图片
-   png 适合单色图片

### CSS Sprite

CSS Sprites也叫CSS精灵、CSS雪碧图，是一种网页图片应用处理方式。

**CSS Sprites(图片整合技术) 的目的就是通过整合图片，减少对服务器的请求数量，从而加快页面加载速度。**

### 溢出文字省略号显示

```
white-space:nowrap;

overflow: hidden;

text-overflow:ellipsis;
```

### 显示与隐藏

`display:none`; 隐藏 **不占据位置**,下方元素会上移.

display:不为none ;显示

`visibility:hidden`;隐藏 依然**占据位置**,下方元素不会上移

`visibility:vsible`;显示

 `opacity:0`;隐藏

 `opacity:1`;显示

### 边框透明

 border: 1px solid transparent;

 **背景色默认蔓延到 边框 区域**

  background-clip: content-box;

**裁减掉内容区外的颜色不显示**

  *提前把边框做好,透明,hover时,边框就可以显示出来*



# 浮动

### 浮动的表现形式及影响

1. 元素浮动之后,脱离文档流,不再在文档六中占据位置,下方的元素会上移 
2. 元素浮动之后,下方元素会上移,但是 里边的文字 会环绕在浮动元素周围(浮动元素不会和文字重叠) 
3. 元素浮动之后 ,如果没写宽度,宽度由内容决定 ,所以,一般我们都会为 浮动元素 指定一个宽度.
4. 元素浮动以后即完全脱离文档流，这时不会再影响父元素的高度。 也就是浮动元素不会撑开父元素。父元素高度丢失,下方的元素 布局就开始混乱.
5. 行内元素浮动后,就可以设置宽高了

### 解决浮动的影响

```
   1. 严格计算父类元素的高度
   2. 假如无法准确确定父元素高度,给父类元素 添加overflow:hidden,那么里边的浮动元素就能撑起高度了
   3. 在所有浮动元素之后,追加一个 空的 块元素,然后对其设置 clear:both **不推荐 语义化太差**
   4. 使用after伪元素清除浮动（推荐使用）
    .clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
 
<body>
    <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
        <!--<div class="clear">额外标签法</div>-->
    </div>
    <div class="footer"></div>
   5.使用before和after双伪元素清除浮动
     .clearfix:after,.clearfix:before{
        content: "";
        display: table;
    }
    .clearfix:after{
        clear: both;
    }
    .clearfix{
        *zoom: 1;
    }
 
 <div class="fahter clearfix">
        <div class="big">big</div>
        <div class="small">small</div>
    </div>
    <div class="footer"></div>
```

### 行内元素的边距问题

**行内元素的上下方向的`padding`和`margin`不起实质性作用**

### 定位

 一个元素开启定位之后 ,元素特性会改变 

1. 脱离文档流,不再占据位置,下方元素会上移 

2. 开启定位之后,元素如果不写宽度,宽度会由 内容决定

3. 脱离文档流,无法再撑起 父元素的高度 

4. 行内元素 定位之后,可以设置 宽高了 

**上特性改变 只针对 绝对定位 和 固定定位 **

 相对定位  元素 特性不发生任何改变 ,也不会脱离文档流 

*所以一般不用相对定位 去 描述元素的位置,一般用于打辅助(辅助绝对定位用来给父元素添加定位属性,使其能够成为一个参照物*

### BFC

了解bfc的用途

# CSS3新增

**子代选择器**

`div > p` 选择 `div`的子元素`p`标签(必须是亲儿子,不隔代)

**紧邻兄弟选择器**

`+`  选择下一个(紧挨着的)符合条件的兄弟元素

**通用兄弟选择器**

`~` 选择后边所有符合条件的兄弟元素

**伪类选择器**

除了以前学过的
`:link` 链接未被访问时
`:active` 链接点击时(一瞬间)
`:visited` 链接访问后
`:hover` 鼠标悬浮时

**冒号前面不能有空格**

CSS3又新增了其它的伪类选择器

**表单相关伪类**

`:checked`	匹配被选中的选项
`:focus`	匹配获焦的输入框

**目标伪类**

`E:target` 结合锚点进行使用，处于当前锚点的元素会被选中

```html
  <style>
  	li:target{
  		font-size: 30px;
  		color: blue;
  	}
  <style>
  <body>
  	<a href="#li3">点我</a>
  	<li id="li3">li3</li>
  </body>
```

**伪元素**
`E::before`、`E::after` 默认行内元素 content 属性必须写
`E::first-letter`文本的第一个字母或字
`E::first-line` 文本第一行
`E::selection` 被选中的文本

**":" 与 "::" 用于区分伪类和伪元素**

