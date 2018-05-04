const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const resUtil = function (res, isDebug, successCallback, failCallback, failMessage) {
  if (res.statusCode == 200 && res.data.status > 0) {
    successCallback();
  } else {
    if (isDebug) {
      wx.showToast({
        title: '服务器错误：' + res.data.error,
        icon: 'none',
      })
    } else {
      wx.showToast({
        title: failMessage ? failMessage : '操作失败，请稍后重试',
        icon: 'none',
      })
    }

    if (failCallback) {
      failCallback();
    }
  }//end else
}

const showNetworkError = function (err) {
  var _title = err ? err : '网络错误，请稍后重试';
  console.error(_title);
  wx.showToast({
    title: _title,
    icon: 'none',
  });
}

const isEmptyObject = function (obj) {
  for (var n in obj) {
    return false
  }
  return true;
}



module.exports = {
  formatTime: formatTime,
  resUtil: resUtil,
  showNetworkError: showNetworkError,
  isEmptyObject: isEmptyObject,
}
