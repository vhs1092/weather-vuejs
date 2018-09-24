//* icon path
export const iconPath = function () {
  const iconpath = 'https://www.metaweather.com/static/img/weather/'
  return iconpath
}

//* set headers
export const getHeaders = function () {
  const headers = {
    'Accept': 'text/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/json'
  }
  return headers
}
