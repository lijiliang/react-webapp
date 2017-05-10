import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getAdData } from '../../../fetch/home/home';

class Ad extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>adasdf</div>
        );
    }
    componentDidMount(){
        console.log('a')
        const result = getAdData();
        console.log(result)
    }
}

export default Ad;
