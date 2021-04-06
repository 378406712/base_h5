// 节流函数
function throttle(fn, gapTime = 1000) {
    let _lastTime = null
    return function (e) {
      let _nowTime = new Date()
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn(this, e)
        _lastTime = _nowTime
      }
    }
  }
  export default throttle