import { get } from '../get';

/*
 * [getSearchData 获取搜索列表数据]
 * @param  {[Number]} page     [当前页码]
 * @param  {[String]} cityName [当前城市名称]
 * @param  {[String]} category [类别]
 * @param  {[String]} keyword  [关键字]
 * @return {[Object]}          [promise]
 */
export function getSearchData(page, cityName, category, keyword){
    const keywordStr = keyword ? '/' + keyword : '';
    const result = get('/api/search/' + page + '/' + cityName + '/' + category + keywordStr);
    return result;
}

// :page/:city/:category/:keyword
