import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import { getOrderListData } from '../../../fetch/user/orderlist';
import OrderListComponent from '../../../components/OrderList';

import './style.less';

class OrderList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render(){
        const username = this.props.username;
        return(
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data}/>
                    : <div></div>
                }
            </div>
        );
    }

    componentDidMount(){
        // 获取订单信息
        const username = this.props.username;
        if(username){
            this.loadOrderList(username);
        }
    }
    loadOrderList(username){
        const result = getOrderListData(username);
        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                data: json
            });
        });
    }

}


export default OrderList;
