import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeAd from '../../../components/HomeAd';
import { getAdData } from '../../../fetch/home/home';

class List extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        };
    }
    render(){
        return(
            <div>
                list subpage {this.props.cityName}
            </div>
        );
    }
}

export default List;
