export const getQueryVariable = (variable) => {
  let query = window.location.search.substring(1)
  let vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split('=')
    if (pair[0] == variable) { 
      return pair[1] 
    }
  }
  return null
}

export const getClientType = () => {
  let u = navigator.userAgent //判断浏览器型号
  console.log('ua:', u)
  let ua = window.navigator.userAgent.toLowerCase()
  let isAPP = ua === 'jkexam-app'
  let isWeixin = ua.match(/MicroMessenger/i) == 'micromessenger'
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端   
  return {
    isAPP,
    isWeixin,
    isAndroid,
    isIOS,
  }
}