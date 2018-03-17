---
title: 《JavaScript高级程序设计》读书笔记（一）
date: 2017-02-18 22:11:10
categories:
  - 读书笔记
  - 技术类
tags:
  - JavaScript
  - JS
  - 读书笔记
  - JavaScript高级程序设计
---

![Professional JavaScript for Web-1.png](https://i.loli.net/2018/03/04/5a9bf1d7b087a.png)

---

{% blockquote 《JavaScript高级程序设计》, 第1章　JavaScript简介 %}

JavaScript诞生于1995年。当时，它的主要目的是处理以前由服务器端语言（如Perl）负责的一些输入验证操作。在JavaScript问世之前，必须把表单数据发送到服务器端才能确定用户是否没有填写某个必填域，是否输入了无效的值。Netscape Navigator希望通过JavaScript来解决这个问题。在人们普遍使用电话拔号上网的年代，能够在客户端完成一些基本的验证任务绝对是令人兴奋的。毕竟，拨号上网的速度之慢，导致了与服务器的每一次数据交换事实上都成了对人们耐心的一次考验。

{% endblockquote %}

---

<!-- more -->

## JavaScript简介

> 本章内容

  - JavaScript历史回顾
  - JavaScript是什么
  - JavaScript与ECMAScript的关系
  - JavaScript的不同版本

### JavaScript简史

1997年，以JavaScript 1.1为蓝本的建议被提交给了欧洲计算机制造商协会（`Ecma`，European Computer Manufacturers Association）。该协会指定39号技术委员会（TC39，Technical Committee #39）负责“标准化一种通用、跨平台、供应商中立的脚本语言的语法和语义”。TC39由来自Netscape、Sun、微软、Borland及其他关注脚本语言发展的公司的程序员组成，他们经过数月的努力完成了`ECMA-262`——定义一种名为`ECMAScript`（发音为“ek-ma-script”）的新脚本语言的标准。第二年，ISO/IEC（International Organization for Standardization and International Electrotechnical Commission，国标标准化组织和国际电工委员会）也采用了ECMAScript作为标准（即ISO/IEC-16262）。自此以后，浏览器开发商就开始致力于将ECMAScript作为各自JavaScript实现的基础，也在不同程度上取得了成功。

### JavaScript实现

虽然JavaScript和ECMAScript通常都被人们用来表达相同的含义，但JavaScript的含义却比ECMA-262中规定的要多得多。没错，一个完整的JavaScript实现应该由下列三个不同的部分组成。

  - 核心（`ECMAScript`）
  - 文档对象模型（`DOM`）
  - 浏览器对象模型（`BOM`）

#### 核心（ECMAScript）

由ECMA-262定义的ECMAScript与Web浏览器没有依赖关系。实际上，这门语言本身并不包含输入和输出定义。ECMA-262定义的只是这门语言的基础，而在此基础之上可以构建更完善的脚本语言。**我们常见的Web浏览器只是ECMAScript实现可能的宿主环境之一**。宿主环境不仅提供基本的ECMAScript实现，同时也会提供该语言的扩展，以便语言与环境之间对接交互。而这些扩展——如DOM，则利用ECMAScript的核心类型和语法提供更多更具体的功能，以便实现针对环境的操作。前面介绍过的Node以及众所周知的Adobe Flash也都是宿主环境。

既然ECMA-262标准没有参照Web浏览器，那它都规定了些什么内容呢？大致说来，它规定了这门语言的下列组成部分：
 
  - 语法
  - 类型
  - 语句
  - 关键字
  - 保留字
  - 操作符
  - 对象

ECMAScript就是对实现该标准规定的各个方面内容的语言的描述。JavaScript实现了ECMAScript，Adobe ActionScript同样也实现了ECMAScript

##### ECMAScript的版本

ECMAScript的不同版本又称为版次，以第x版表示。ECMA-262的最近一版是第5版，发布于2009年12月3日。

##### 什么是ECMAScript兼容

要想成为ECMAScript的实现，则该实现必须做到：

  - 支持ECMA-262描述的所有“类型、值、对象、属性、函数以及程序句法和语义”（ECMA-262第1页）；
  - 支持Unicode字符标准。

此外，兼容的实现还可以进行下列扩展：

  - 添加ECMA-262没有描述的“更多类型、值、对象、属性和函数”。
  - 支持ECMA-262没有定义的“程序和正则表达式语法”。

##### Web浏览器对ECMAScript的支持

到了2008年，五大主流Web浏览器（IE、Firefox、Safari、Chrome和Opera）全部做到了与ECMA-262兼容。
下表列出了ECMAScript受主流Web浏览器支持的情况：

|            浏览器             | ECMAScript兼容性 |      浏览器      | ECMAScript兼容性 |
| :---------------------------: | :--------------: | :--------------: | :--------------: |
|    Netscape Navigator 2～3    |        —         |   Opera 6～7.1   |      第2版       |
|  Netscape Navigator 4～4.05   |        —         |    Opera 7.2+    |      第3版       |
| Netscape Navigator 4.06～4.79 |      第1版       |  Safari 1～2.0.x |      第3版*      |
| Netscape 6+（Mozilla 0.6.0+） |      第3版       |    Safari 3.x    |      第3版       |
|              IE3              |        —         | Safari　4.x～5.x |      第5版*      |
|              IE4              |        —         |    Chrome 1+     |      第3版       |
|              IE5              |      第1版       |   Firefox 1～2   |      第3版       |
|          IE5.5～IE7           |      第3版       |  Firefox 3.0.x   |      第3版       |
|              IE8              |      第5版*      | Firefox 3.5～3.6 |      第5版*      |
|              IE9+             |      第5版       |  Firefox 4.0 +   |      第5版       |

> \* 表示不完全兼容的实现

#### 文档对象模型（DOM）

文档对象模型（DOM，Document Object Model）是针对XML但经过扩展用于HTML的应用程序编程接口（API，Application Programming Interface）。DOM把整个页面映射为一个多层节点结构。HTML或XML页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。看下面这个HTML页面：


```html
<html>
    <head> 
        <title>Sample Page</title>
    </head>
    <body>
        <p>Hello World!</p>
    </body>
</html>
```

在DOM中，这个页面可以通过见图1-2所示的分层节点图表示。

![图 1-2](https://i.loli.net/2018/03/01/5a96d22f7712b.png "图 1-2")

通过DOM创建的这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权。借助DOM提供的API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。

##### 为什么要使用DOM

由于Netscape和微软在开发DHTML（Dynamic HTML）方面各持己见，为了避免出现浏览器互不兼容的局面，DOM应运而生。

##### DOM级别

DOM1级由两个模块组成：DOM核心和DOM HTML。DOM核心规定的是如何映射基于XML的文档结构，以便简化对文档中任意部分的访问和操作。DOM HTML模块则在DOM核心的基础上加以扩展，添加了针对HTML的对象和方法。

DOM2级引入了下列新模块：

  - DOM视图：定义了跟踪不同文档视图的接口
  - DOM事件：定义了事件和事件处理的接口
  - DOM样式：定义了基于CSS为元素应用样式的接口
  - DOM遍历和范围：定义了遍历和操作文档树的接口

DOM3级引入了下列新模块，并对DOM核心进行了扩展，开始支持XML1.0规范，涉及XML Infoset、XPath和XML Base。

  - DOM加载和保存模块：以统一方式加载和保存文档的方法
  - DOM验证模块：验证文档的方法

##### 其他DOM标准

除了DOM核心和DOM HTML接口之外，另外几种语言还发布了只针对自己的DOM标准。下面列出的语言都是基于XML的，每种语言的DOM标准都添加了与特定语言相关的新方法和新接口：

  - SVG（Scalable Vector Graphic，可伸缩矢量图）1.0；
  - MathML（Mathematical Markup Language，数学标记语言）1.0；
  - SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）。

> 还有一些语言也开发了自己的DOM实现，例如Mozilla的XUL（XML User Interface Language，XML用户界面语言）。但是，只有上面列出的几种语言是W3C的推荐标准。


#### 浏览器对象模型（BOM）

BOM提供与浏览器交互的方法和接口。从根本上讲，BOM只处理浏览器窗口和框架；但人们习惯把所有针对浏览器的JavaScript扩展算作BOM的一部分，比如：

  - 弹出新浏览器窗口的功能
  - 移动、缩放和关闭浏览器窗口的功能
  - 提供浏览器详细信息的navigator对象
  - 提供浏览器所加载页面的详细信息的location对象
  - 提供用户显示器分辨率详细信息的screen对象
  - 对cookie的支持
  - 像XMLHttpRequest和IE的ActiveXObject这样的自定义对象

> 由于没有BOM标准可以遵循，因此每个浏览器都有自己的实现。虽然也存在一些事实标准，例如要有window对象和navigator对象等，但每个浏览器都会为这两个对象乃至其他对象定义自己的属性和方法。现在有了HTML5，BOM实现的细节有望朝着兼容性越来越高的方向发展。

---

{% blockquote 《JavaScript高级程序设计》, 第2章　在HTML中使用JavaScript %}

只要一提到把JavaScript放到网页中，就不得不涉及Web的核心语言——HTML。在当初开发JavaScript的时候，Netscape要解决的一个重要问题就是如何做到让JavaScript既能与HTML页面共存，又不影响那些页面在其他浏览器中的呈现效果。经过尝试、纠错和争论，最终的决定就是为Web增加统一的脚本支持。而Web诞生早期的很多做法也都保留了下来，并被正式纳入HTML规范当中。

{% endblockquote %}

---

## 在HTML中使用JavaScript

> 本章内容
 
  - 使用<script\>元素
  - 嵌入脚本与外部脚本
  - 文档模式对JavaScript的影响
  - 考虑禁用JavaScript的场景

### <script\>元素

向HTML页面中插入JavaScript的主要方法，就是使用`<script>`元素。这个元素由Netscape创造并在Netscape Navigator 2中首先实现。

HTML 4.01为`<script>`定义了下列6个属性。

  - async：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作。
  - charset：可选。表示通过src属性指定的代码的字符集。
  - defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。
  - language：已废弃。原来用于表示编写代码使用的脚本语言（如JavaScript、JavaScript1.2或VBScript）。
  - src：可选。表示包含要执行代码的外部文件。
  - type：可选。可以看成是language的替代属性；其默认值仍为text/javascript。

关于`<script>`的其他要点:

  - 使用`<script>`元素的方式有两种：直接在页面中嵌入JavaScript代码和包含外部JavaScript文件。
  - 在解释器对`<script>`元素内部的所有代码求值完毕以前，页面中的其余内容都不会被浏览器加载或显示。
  - 带有src属性的`<script>`元素不应该在其`<script>`和`</script>`标签之间再包含额外的JavaScript代码。如果包含了嵌入的代码，则只会下载并执行脚本文件，嵌入的代码会被忽略。
  - `<script>`元素的src属性可以是指向当前HTML页面所在域之外的某个域中的URL。
  - 相当于使用`defer`属性，把延迟脚本放在页面底部仍然是最佳选择。

### 嵌入代码与外部文件

在HTML中嵌入JavaScript代码虽然没有问题，但一般认为最好的做法还是尽可能使用外部文件来包含JavaScript代码。通常来说有如下三点理由。

  - 可维护性：遍及不同HTML页面的JavaScript会造成维护问题。
  - 可缓存：浏览器能够根据具体的设置缓存链接的所有外部JavaScript文件。
  - 适应未来：通过外部文件来包含JavaScript无须使用XHTML或注释hack。


### 文档模式

IE5.5引入了文档模式的概念，而这个概念是通过使用文档类型（`doctype`）切换实现的。最初的两种文档模式是：混杂模式（`quirks mode`）2和标准模式（`standards mode`）。混杂模式会让IE的行为与（包含非标准特性的）IE5相同，而标准模式则让IE的行为更接近标准行为。虽然这两种模式主要影响CSS内容的呈现，但在某些情况下也会影响到JavaScript的解释执行。本书将在必要时再讨论这些因文档模式而影响JavaScript执行的情况。

### <noscript\>元素

早期浏览器都面临一个特殊的问题，即当浏览器不支持JavaScript时如何让页面平稳地退化。对这个问题的最终解决方案就是创造一个`<noscript>`元素，用以在不支持JavaScript的浏览器中显示替代的内容。这个元素可以包含能够出现在文档<body>中的任何HTML元素——`<script>`元素除外。包含在`<noscript>`元素中的内容只有在下列情况下才会显示出来：
 
  - 浏览器不支持脚本。
  - 浏览器支持脚本，但脚本被禁用。

符合上述任何一个条件，浏览器都会显示`<noscript>`中的内容。而在除此之外的其他情况下，浏览器不会呈现`<noscript>`中的内容。
