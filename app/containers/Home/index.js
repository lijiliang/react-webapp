import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';

class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <p>Home</p>
                <Link to="/list">to List</Link>
            </div>
        );
    }
}

/*  React 与  Redux  */
function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    };
}

function mapDispatchToProps(dispatch){
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
