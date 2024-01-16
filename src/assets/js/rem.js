// 动态改变rem
function remSize() {
  // 获取设备宽度
  let deviceWidth = document.documentElement.clientWidth || window.innerWidth

  // 设计稿宽度
  if (deviceWidth > 750) {
    deviceWidth = 750
  }
  if (deviceWidth < 320) {
    deviceWidth = 320
  }
  // 设置html的fontSize
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
  // 设置body的fontSize
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
remSize()

// 监听窗口大小变化
window.onresize = function () {
  remSize()
}
