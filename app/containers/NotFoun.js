import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';  // 使用空上插件提高性能

class NotFoun extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>notFoun 404!</div>
        );
    }
}


// module.export = NotFoun;
export default NotFoun;
