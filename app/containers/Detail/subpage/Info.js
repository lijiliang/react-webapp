import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import DetailInfo from '../../../components/DetailInfo';
import { getInfoData } from '../../../fetch/detail/detail';

class Info extends React.Component{
    constructor(props, context){
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: false
        };
    }
    render(){
        return(
            <div>
                {
                    this.state.data
                    ? <DetailInfo data={this.state.data}/>
                    : <div>正在加载中...</div>
                }
            </div>
        );
    }
    componentDidMount(){
        const id = this.props.id;
        const result = getInfoData(id);
        result.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                data: json
            });
        }).catch((ex) => {
            if (__DEV__) {
                console.error('详情页，获取商户信息出错', ex.message);
            }
        });
    }
}

export default Info;
