import { get } from '../get';

export function getAdData(){
    const result = get('/api/homeAd')
    return result;
}
