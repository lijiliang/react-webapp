import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import localStore from '../../utils/localStore';
import { CITYNAME } from '../../config/localStoreKey';

class City extends React.Component{
    render(){
        return(
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        );
    }
    changeCity(newCity){
        if(newCity == null){
            return;
        }
        // 修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);   // 改变redux

        // 修改 localStore
        localStore.setItem(CITYNAME, newCity);

        // 跳转到首页
        hashHistory.push('/');
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
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City);
