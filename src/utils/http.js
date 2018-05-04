

var requestParams = {
  url: null,
  method: null,
  data: {},
  header: null,
  success: function (res) { },
  fail: function (err) { },
}

const request = (requestParams) => {
  wx.request({
    url: requestParams.url,
    method: requestParams.method,
    data: requestParams.data,
    header: requestParams.header,
    success: requestParams.success,
    fail: requestParams.fail,
  })
}

const GET = (requestParams) => {
  requestParams.method = 'GET';
  request(requestParams)
}

module.exports = {
  GET: GET,
}