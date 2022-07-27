// https://weibo.com/1713926427/LDEKNt3VT?filter=hot&root_comment_id=0&type=comment&ssl_rnd=1658652960.4338#_rnd1658653590628

function show_aim_comment() {
  function change_aim_comment_color() {
    document
      .querySelectorAll("div[node-type] .list_li")
      .forEach((element, index, array) => {
        const image_element = element.querySelector(".bigcursor");
        if (image_element) {
          console.log('点击图片');
          image_element.click();
        }
        if (
          (element.innerText.indexOf("四川") > 0) |
          (element.innerText.indexOf("评论配图") > 0)
        ) {
          element.style.backgroundColor = "rgb(232 223 50)";
        } else if (
          element.innerText.indexOf("来自") > 0 &&
          index < array.length - 3
        ) {
          // element.remove();
        }
      });
  }
  setInterval(change_aim_comment_color, 2000);
}
function auto_scroll_screen(params) {
  let roll_count = 1;
  let click_count = 1;
  // 设置定时器，时间即为滚动速度
  function main() {
    var element = document.documentElement;
    if (element.scrollTop + element.clientHeight == element.scrollHeight) {
      //   clearInterval(interval);
      click_count += 1;
      console.log("已经到底部了, 总共点击次数：", String(click_count));
      // 到底部时点击查看更多
      document.querySelector(".list_ul .more_txt").click();

      // 到底部时点击查看更多
      //   document.querySelector(".more_txt").click();
    } else {
      element.scrollTop += 200;
      console.log("下滑次数：", String(roll_count));
      roll_count += 1;
    }
    // show_aim_comment();
  }

  // 定义 interval
  interval = setInterval(main, 1000);
}
// document.querySelectorAll(".repeat_list .tab .S_line1 .S_txt1")[1].click();

auto_scroll_screen();
show_aim_comment();
