import 'whatwg-fetch';
import 'es6-promise';   // 兼容老版本浏览器

/*
 * [obj2params 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式]
 * @param  {[Object]} obj [对象]
 * @return {[String]}     [返回拼接后的字符串]
 */
function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

/*
 * [postData post]
 * @param  {[string]} url   [请求地址]
 * @param  {[object]} paramsObj [传入的参数]
 * @return {[object]}       [返回成功或失败的数据]
 */
export function post(url, paramsObj){
    const result = fetch(url, {
        method: 'POST',
        credentials: 'include',  // 允许fetch 在发送请求时带上 Cookie
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
    return result;
}
