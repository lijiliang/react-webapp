import { get } from '../get';

/*
 * [getAdData 获取广告数据]
 */
export function getAdData(){
    const result = get('/api/homeAd');
    return result;
}

/*
 * [getListData 获取猜你喜欢数据]
 * @param  {[type]} city [当前城市]
 * @param  {[type]} page [页码]
 */
export function getListData(city, page){
    const result = get('/api/homeList/' + encodeURIComponent(city) + '/' + page);
    return result;
}
