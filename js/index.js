var tabs = document.getElementById("tabs").getElementsByTagName("li")
var lists = document.getElementById("lists").getElementsByTagName("ul");
// console.log(lists);

// 实现头部选中高亮
for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}

var scrollTop = document.documentElement.scrollTop;

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

// 平滑回到顶部
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

// 锁定页签栏
// var seckillNav = document.getElementById("seckillnav");
// window.onscroll = function () {
//     var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
//     if (scrollTop >= 260) {
//         seckillNav.className = "seckill-nav seckill-navfixed"
//     } else {
//         seckillNav.className = "seckill-nav";
//     }
// }