## 一、效果图

主界面：
![](./img/1.png)
登录注册界面：
![](./img/2.png)

## 二、预览网址

项目网址：[小米闪购 - 小米商城](https://starsareblindi.github.io/MI_seckillShop/)

## 三、技术亮点

### 1.使用active和onclick实现单页面切换

![](./img/3.png)

关键代码：

```html
<ul id="tabs">
  <li class="active"><em>20:00</em><span>抢购结束</span></li>
  <li><em>22:00</em><span><em>抢购中<br>距结束 00:37:23</em></span></li>
  <li><em>00:00</em><span>即将开始</span></li>
  <li><em>08:00</em><span>即将开始</span></li>
  <li><em>10:00</em><span>即将开始</span></li>
</ul>
  
<script>
var tabs = document.getElementById("tabs").getElementsByTagName("li")
var lists = document.getElementById("lists").getElementsByTagName("ul");

// 实现头部选中高亮
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

function showlist() {
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] === this) {
            tabs[i].className = "active";
            lists[i].className = "cleafix active";
        }
        else {
            tabs[i].className = "";
            lists[i].className = "cleafix";
        }
    }
}
</script>
```
### 2.使用onclick和scrollTop滚轮事件监听实现回到顶部侧边边栏功能
![](./img/4.png)
关键代码：

```html
<div id="top-btn" class="primary-btn">
	<i class="iconfont">&#xe623;</i><br>
	<span class="primary-btn-text">回到顶部</span>
</div>
<script>
// 平滑回到顶部
var scrollTop = document.documentElement.scrollTop;

document.getElementById("top-btn").addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var scrolldown = document.getElementById("top-btn");
window.onscroll = function(){
    tobottom();
}
function tobottom() {
    if (document.documentElement.scrollTop > 300) {
        scrolldown.style.display = "block";
    } else {
        scrolldown.style.display = "none";
    }
}
</script>
```
