import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

import './style.less';

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUpHandle.bind(this)}
            />
        );
    }
    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        });
    }
    changeHandle(e){
        const value = e.target.value;
        this.setState({
            value: value
        });
    }
    keyUpHandle(e){
        if(e.keyCode !== 13){
            return;
        }
        this.props.enterHandle(this.state.value);
        // hashHistory.push('/search/all/' + encodeURIComponent(this.state.value));
    }
}

export default SearchInput;
