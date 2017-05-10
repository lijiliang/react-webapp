import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocalStore from '../utils/localStore';
import { CITYNAME } from '../config/localStoreKey';
import * as userInfoActionFormOtherFile from '../actions/userinfo';

class App extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : '正在加载中...'
                }
            </div>
        );
    }
    componentDidMount(){
        // 从localstorerage 里面获取城市
        let cityName = LocalStore.getItem(CITYNAME);
        if(cityName == null){
            cityName = '北京';
        }

        // 将城市信息存储到 Redux 中
        this.props.userInfoActions.update({
            cityName: cityName,
        });
        // 设置加载成功
        this.setState({
            initDone: true
        });
    }
}

/*  React 与  Redux  */
function mapStateToProps(state){
    return {};
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionFormOtherFile, dispatch)   // 从action上获取的动作进行
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

//export default App;
