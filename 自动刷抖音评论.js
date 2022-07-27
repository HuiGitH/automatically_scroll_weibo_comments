// 自动刷视频
setInterval(() => {
  // 打开评论区
  document.querySelector(".tzVl3l7w").click();

  // 刷评论区评论区
  setInterval(() => {
    document.querySelector(".comment-mainContent").scrollTop += 100;
  }, 1000);

  // 切换下一个视频
  document
    .querySelectorAll(".xgplayer-playswitch-next")
    .forEach((x) => x.click());
}, 2000);

function auto_refresh_video(params) {
  var count = 1;

  // JS睡眠sleep()
  function try_sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime) {
        return;
      }
    }
  }

  function refresh_vedio(params) {
    if (count > 3) {
      clearInterval(interval);
    //   clearInterval(refresh_comment);
    } else {
      // 切换下一个视频
      document
        .querySelectorAll(".xgplayer-playswitch-next")
        .forEach((x) => x.click());
      count += 1;
      console.log("已经是第", String(count), "个视频了");

      try_sleep(3000);
      // 打开评论区
      document.querySelector(".tzVl3l7w").click();

      // 刷评论区评论区
      refresh_comment = setInterval(() => {
        document.querySelector(".comment-mainContent").scrollTop += 100;
      }, 1000);
    }
  }
  interval = setInterval(refresh_vedio, 10000);
}

auto_refresh_video();
