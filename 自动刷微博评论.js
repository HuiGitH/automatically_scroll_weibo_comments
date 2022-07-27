// https://weibo.com/5346019648/LDjfa0WvH?filter=hot&root_comment_id=0&type=comment#_rnd1658416691221
// 定义函数
function page_scroll() {
  var i = 1;

  var show_lastest_comment = true;
  // 按时间排序 默认按照热度排序
  if (show_lastest_comment) {
    document.querySelectorAll(".repeat_list .tab .S_line1 .S_txt1")[1].click();
  }

  // element.scrollTop = 0;  // 不管他在哪里，都让他先回到最上面

  // 设置定时器，时间即为滚动速度
  function main() {
    var element = document.documentElement;
    if (element.scrollTop + element.clientHeight == element.scrollHeight) {
      // clearInterval(interval);
      console.log("已经到底部了");
      // 到底部时点击查看更多
      document.querySelector(".more_txt").click();
    } else {
      element.scrollTop += 1000;
      console.log(i);
      i += 1;
    }
    // show_aim_comment();
  }

  // 定义 interval
  interval = setInterval(main, 1000);

  function show_aim_comment() {
    document.querySelectorAll("div[node-type] .list_li").forEach((element) => {
      if (element.innerText.indexOf("四川") > 0) {
        element.style.backgroundColor = "rgb(232 223 50)";
      } else {
        //   console.log(element.innerText);
        element.remove();
      }
    });
  }
}

// page_scroll();

const onKeydownUp = (e, isDown) => {
  console.log(`key: ${e.key} ${isDown ? "down" : "up"}`);
  if (e.key == "d") {
    clearInterval(interval);
    console.log("停止自动刷");
  } else if (e.key == "r") {
    console.log("开始自动刷");
    page_scroll();
  }
};

const testUpAndDown = () => {
  document.addEventListener("keydown", (e) => onKeydownUp(e, true));
};

testUpAndDown();
