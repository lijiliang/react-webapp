import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userinfoActions from '../../actions/userinfo';

import A from './A';
import B from './B';
import C from './C';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        );
    }
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing',
            cityname: '北京'
        });
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);
