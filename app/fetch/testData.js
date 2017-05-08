/**
 * 测试由fetch请求数据
 */

import { get } from './get';
import { post } from './post';

export function getData(){
    //  api/1 获取字符串
    const result = get('/api/1');
    result.then( res => {
        return res.text();
    }).then(text => {
        console.log(text)
    })

    const result2 = get('/api/2');
    result2.then(res => {
        return res.json();
    }).then(json => {
        console.log(json)
    })
}


export function postData(){
    // ‘/api/post’ 提交数据
    const result = post('/api/post', {
        a: 100,
        b: 200
    });
    result.then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
    })
}

// 测试 fetch 的功能
/*
import { getData, postData } from './fetch/testData'
getData();
postData();
*/
