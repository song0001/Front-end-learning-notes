#  SASS

Sass/Less是一门CSS预处理语言（sass、less 、styles），它扩展了CSS语言，增加了变量，Mixin，函数等特性，使CSS更易维护和扩展

https://www.sass.hk/install/

## 安装

### 安装Ruby

`sass`基于`Ruby`语言开发而成，因此安装`sass`前需要安装`Ruby`

注意：安装过程中请注意勾选`Add Ruby executables to your PATH`添加到系统环境变量

安装完成后需测试安装有没有成功，win+r 输入 cmd 打开命令窗口，输入以下命令：

```
ruby -v
//如安装成功会打印
ruby 2.2.2p95 (2015-04-13 revision 50295) [i386-mingw32]
```

ruby安装完成之后，自带有gem包管理工具

如上已经安装成功。但因为国内网络的问题导致`gem`源间歇性中断因此我们需要更换`gem`源。（使用国内镜像的的gem源 https://gems.ruby-china.com/）如下：>

```
//1.删除原gem源
gem sources --remove https://rubygems.org/

//2.添加国内镜像
gem sources -a https://gems.ruby-china.com/

//3.打印是否替换成功
gem sources -l

//4.更换成功后打印如下
*** CURRENT SOURCES ***
https://gems.ruby-china.com/

// 简化命令
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
gem sources -l
```

### 安装Sass

`Ruby`自带一个叫做`RubyGems`的系统，用来安装基于`Ruby`的软件。我们可以使用这个系统来轻松地安装`Sass`。要安装最新版本的`Sass`，你需要 win+r 输入 cmd 打开命令窗口，输入下面的命令：

```
//安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
gem install sass
```

在每一个安装过程中，你都会看到如下输出：

```
Fetching: sass-3.x.x.gem (100%)
Successfully installed sass-3.x.x
Parsing documentation for sass-3.x.x
Installing ri documentation for sass-3.x.x
Done installing documentation for sass after 6 secon
1 gem installed
```

安装完成之后，你应该通过运行下面的命令来确认应用已经正确地安装到了电脑中：

```
sass -v
Sass 3.x.x (Selective Steve)
```

### 常用命令

```
//更新sass
gem update sass

//查看sass版本
sass -v

//查看sass帮助
sass -h
```

**如果安装报错含有 GBK 字符的，在ruby下搜索 filesystem.rb 文件，找到7K多的那个，在编辑器中打开，然后更改 87行代码为：`if name.encode("utf-8", "gbk").index(@root + "/") == 0`**

**如果sass中写中文报错，进入 `C:\Ruby25-x64\lib\ruby\gems\2.5.0\gems\sass-3.7.3\lib\sass`这个地址，每个人安装的位置和sass版本不同可能位置有些许不同，自行调整，在这个地址下找到engine.rb这个文件：**

```
module Sass // 在这句话后面添加
	# 让Sass支持中文注释
	Encoding.default_external = Encoding.find('utf-8')
```



### 使用Node版本

下载地址: <http://nodejs.cn/download/>

**如果使用 gem 安装频繁失败，请使用 npm install -g sass 来使用node版本的sass，node版的sass只有 "expanded" and "compressed" 两种编译模式**

**注意：如果win10电脑在使用 http-server -o 的命令提示 PowerShell 禁止脚本运行**，打开左下角的window开始键，翻到window powerShell选项，然后点开，在window PowerShell选项上点击右键，选择使用管理员身份运行。然后在打开的命令窗口中输入 ` set-executionpolicy remotesigned `，系统会出现如下字样：

```
执行策略可以防止您执行不信任的脚本。更改执行策略可能会使您面临 about_Execution_Policies 
帮助主题中所述的安全风险。是否要更改执行策略? 
[Y] 是(Y)  [N] 否(N)  [S] 挂起(S)  [?] 帮助 (默认值为“Y”): 
```

然后输入 y 即可。



## Sass的编译

### 命令行编译：

```
//单文件转换命令
sass input.scss output.css   // input.scss  需要转换的sass文件  output.css 编译生成之后的css文件

//单文件监听命令  只要input.scss 发生更改 自动把sass文件编译成css文件
sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch scss:css  // scss 需要监听的scss文件夹  css 编译生成的css目录 用于保存scss文件生成的css文件
```

### 命令行编译配置选项：

命令行编译`sass`有配置选项，如编译过后css排版、生成调试map、开启debug信息等，可通过使用命令`sass -v`查看详细。我们一般常用两种`--style`  `--sourcemap`

```
//编译格式
sass --watch input.scss:output.css --style compact

//编译添加调试map
sass --watch input.scss:output.css --sourcemap

//选择编译格式并添加调试map
sass --watch input.scss:output.css --style expanded --sourcemap

//开启debug信息
sass --watch input.scss:output.css --debug-info
```

+ `--style`表示解析后的`css`是什么排版格式
  sass内置有四种编译格式:`nested``expanded``compact``compressed`
+ `--sourcemap`表示开启`sourcemap`调试。开启`sourcemap`调试后，会生成一个后缀名为`.css.map`文件

### 编译演示

```scss
//未编译样式
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

#### nested 嵌套格式

```scss
/*命令行内容*/
sass style.scss:style.css --style nested

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px; }
  .box-title {
    height: 30px;
    line-height: 30px; }
```

#### expanded 扩展格式

```scss
/*命令行内容*/
sass style.scss:style.css --style expanded

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

#### compact 紧凑格式

```scss
/*命令行内容*/
sass style.scss:style.css --style compact

/*编译过后样式*/
.box { width: 300px; height: 400px; }
.box-title { height: 30px; line-height: 30px; }
```

#### compressed 压缩格式

```scss
/*命令行内容*/
sass style.scss:style.css --style compressed

/*编译过后样式*/
.box{width:300px;height:400px}.box-title{height:30px;line-height:30px}
```



## Sass的常见使用

### 一、嵌套

```scss
// sass 允许样式可以和页面布局一样嵌套
ul{
	list-style: none;
	li{
		width: 200px;
		height: 40px;
		border: 1px solid red;
        span{
            color: red;
        }
        // sass 的嵌套格式中 & 表示父选择器
        &:hover{
            border-color: green;
        }
        &.act{
            text-align: center;
        }
	}
    li:hover{
        
    }
}
// sass 允许使用属性嵌套
.box{
    font: {
        family: "Arial, sans-serif";
        size: 18px;
        weight: border;
    }
    border: 5px solid red {
        left: 0;
        right: 0;
    }
}
```

### 二、变量

```scss
// sass允许声明一个变量
// Sass让人们受益的一个重要特性就是它为css引入了变量。你可以把反复使用的css属性值 定义成变量，然后通过变量名来引用它们，而无需重复书写这一属性值。
// 没有变量提升
$bgColor: #9000ff;
$border: 1px solid $bgColor;

.box{
	width: 300px;
	height: 300px;
	background-color: $baseSize;
}
.inner{
	border: $border;
}
```

### 三、混合

封装一些常见得css 相当于js中得函数

```scss
/* 语法
@mixin 名字(参数1,参数2...){
	...
}*/
@mixin base{
	width: 200px;
    height: 200px;
    color: green;
    // 可以在公共样式中使用嵌套
    a {
      color: #ccc;  
    }
}
@mixin text($text-color,$font-size){
    color: $text-color;
    font-size: $font-size;
}

.box{
	@include base;    
}
.inner{
    @include text(red,18px);
    // 有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序,sass允许通过语法$name: value的形式指定每个参数的值
    // @include text($font-size: 18px,$text-color: red);
}

// 为了在@include混合器时不必传入所有的参数，我们可以给参数指定一个默认值
@mixin default($color,$hover: $color,$act: $color){
    color: $color;
    &:hover { color: $hover; }
    &.act { color: $act; }
}
.use{
    @include default(red);
    // $hover 和 $act 也会被自动赋值为 red
}
```

### 四、继承

没啥用 看看就行

```scss
// sass 使用@extend 选择器 来继承样式，选择器相关的样式都会继承
.box{
	padding: 15px;
    span {
        color: green;
    }
}

.inner{
	@extend .box;
	background-color: red;
}
```

### 五、导入扩展

减少项目请求数量  对项目优化很有帮助 

```scss
// css @import 引入其它css文件会让浏览器发出请求引入其它css文件。sass中的 @import 可以将其它scss文件中的样式导入到自身文件中
// 文件 init.scss
*{
	margin: 0;
    padding: 0;
}
// 文件 style.scss
@import "init";
.box{
    width: 200px;
}
```

### 六、注释

```scss
在sass中使用这样的多行注释会在压缩输出的css中被去掉
/**
 * 天街小雨润如酥
 * 草色遥看近却无
 */
 sass 编译的css中 单行注释不会显示
 在多行注释的开头加上！号表示强制注释，编译的时候不会被去掉 /*! */ 
```
