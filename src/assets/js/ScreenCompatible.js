__resize()
window.addEventListener('resize', __resize, false)

function __resize () {
  var deviceWidth = document.documentElement.clientWidth
  // 在大于750像素的屏幕时不再放大界面，因为这时候的屏幕已经能够访问pc端网页了
  if (deviceWidth < 750) {
    // deviceWidth = 750
    document.documentElement.style.fontSize = deviceWidth / 10 + 'px'
  }
}
