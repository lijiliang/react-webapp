/**
 * 测试由axios请求数据
 */

import { getData, postData } from './fetchData';

// 测试get请求
export async function axiosGet(){
    try{
        const response = await getData(`/api/2`);
        await response;
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
}

// 测试post请求
export async function axiosPost(){
    try{
        const response = await postData(`/api/post`, {
            a: 'li',
            b: 'liang'
        });
        await response;
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
}

// 测试用默认传统的方式去请求数据
export function getApi(){
    const response = getData('/api/2', {
        a:1,
        b:2
    });
    /*
    response.then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });
    */
   response.then(res=>{
       console.log(res)
   }).catch(err=>{
       console.log(err)
   })
}

export function postApi(){
    const response = postData('/api/post', {
        a: 'li',
        name: 'benson'
    });
    response.then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })
}

// 调用

/*
    import { axiosGet, axiosPost, getApi, postApi } from './fetch/testAxiosData';
    axiosGet();
    axiosPost();
    getApi();
    postApi();
*/
