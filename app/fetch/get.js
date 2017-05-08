import 'whatwg-fetch';
import 'es6-promise';   // 兼容老版本浏览器

/*
 * [getData get请求]
 * @param  {[string]} url   [请求地址]
 * @return {[object]}       [返回成功或失败的数据]
 */
export function get(url){
    const result = fetch(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    });
    return result;
}
