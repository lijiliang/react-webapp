import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BuyAndStore from '../../../components/BuyAndStore';

import * as storeActionsFromFile from '../../../actions/store';

class Buy extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false  // 未收藏
        };
    }
    render(){
        console.log(this.props.id);
        return(
            <div>
                <BuyAndStore
                    isStore={this.state.isStore}
                    buyHandle={this.buyHandle.bind(this)}
                    storeHandle={this.storeHandle.bind(this)}
                />
            </div>
        );
    }
    componentDidMount(){
        console.log('store: ', this.props.store)
        console.log('fn: ', this.props.storeActions)
        this.checkStoreState();
    }
    // 购买事件
    buyHandle(){
        // 验证登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return;
        }

        // 购买的流程

        // 跳转到用户中心
        hashHistory.push('/user');
    }
    // 收藏事件
    storeHandle(){
        // 验证登录
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return;
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if(this.state.isStore){
            // 当前商户已经被收藏,点击时即要取消收藏
            storeActions.rm({id: id});
        } else {
            // 当前商户尚未收藏，点击时即要执行收藏
            storeActions.add({id: id});
        }

        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        });
    }
    // 验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if(!userinfo.username){
            // 跳转到登录页面
            // 要传入目标router,以便便当完了可以自己跳转回来
            hashHistory.push('/login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    }

    // 检验当前商户是否已经被收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;   // 所有的收藏列表

        // some 只要有一个满足即可
        store.some(item => {
            // 如果收藏列表中的id 等于 现在的 Id
            if(item.id === id){
                this.setState({
                    isStore: true  // 更新收藏状态
                });
                // 跳出循环
                return true;
            }
        });
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo,
        store: state.store
    };
}

function mapDispatchToProps(dispatch){
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Buy);
