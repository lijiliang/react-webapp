import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';
import { getSearchData } from '../../../fetch/search/search';

// 初始化组件state
const initialState = {
    data: [],
    page: 0,
    hasMore: false,
    isLoadingMore: false
};
class SearchList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState;
    }
    render(){
        return(
            <div>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data} />
                    : <div>加载中..</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        );
    }
    componentDidMount(){
        // 加载首页数据
        this.loadFirstPageData();
    }
    // 获取首次数据
    loadFirstPageData(){
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword || '';
        const result = getSearchData(0, cityName, category, keyword);
        this.resultHandle(result);
    }
    // 处理数据
    resultHandle(result){
        // 增加page计数
        const page = this.state.page;
        this.setState({
            page: page + 1
        });

        result.then((res) => {
            return res.json();
        }).then((json) => {
            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            });
        }).catch((err) => {
            if(__DEV__){
                console.log('搜索页获取数据报错, ', err.message);
            }
        });
    }
    // 加载更多数据
    loadMoreData(){
        // 记录状态
        this.setState({
            isLoadingMore: true
        });

        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword || '';
        const result = getSearchData(this.state.page, cityName, category, keyword);
        this.resultHandle(result);

        this.setState({
            isLoadingMore: false
        });
    }
    // 搜索处重新搜索
    componentDidUpdate(prevProps, prevState){
        const category = this.props.category;
        const keyword = this.props.keyword;

        // 搜索条件完全相等时，忽略。重要！！！
        if(keyword === prevProps.keyword && category === prevProps.category){
            return;
        }

        // 重置state
        this.setState(initialState);

        // 重新加载数据
        this.loadFirstPageData();
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);
