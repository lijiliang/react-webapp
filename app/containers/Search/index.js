import React from 'react';
import { Link } from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/SearchHeader';
import List from './subpage/List';

class Detail extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const params = this.props.params;
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
                <List keyword={params.keyword} category={params.category}/>
            </div>
        );
    }
    componentDidMount(){
        const params = this.props.params;
        console.log('category： ' +  params.category)
        console.log('key param： ' +  params.keyword)
    }
}

export default Detail;
