import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header';
import DetailInfo from './subpage/Info';
import Comment from './subpage/Comment';

class Detail extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        };
    }
    render(){
        return(
            <div>
                <Header title="商户详情"/>
                <DetailInfo id={this.props.params.id}/>
                <Comment id={this.props.params.id}/>
            </div>
        );
    }
    componentDidMount(){
        document.title = '商户详情';
    }
}

export default Detail;
