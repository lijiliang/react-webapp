import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeAd from '../../../components/HomeAd';
import { getListData } from '../../../fetch/home/home';

class List extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false
        };
    }
    render(){
        return(
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {this.state.hasMore.toString()}
                {this.state.data.length}
            </div>
        );
    }
    componentDidMount(){
        // 获取列表第一页数据
        this.loadFirstPageData();
    }
    loadFirstPageData(){
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0);
        this.resultHandle(result);
    }
    // 数据处理
    resultHandle(result){
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const hasMore = json.hasMore;
            const data = json.data;

            // 存储数据
            this.setState({
                data: data,
                hasMore: hasMore
            });
        });
    }
}

export default List;
