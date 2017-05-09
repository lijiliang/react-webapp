import Recat, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flimAction from '../actions/films';

class FilmApp extends Component {
    render(){
        // 从react-redux 注入
        const { films, dispatch } = this.props;

        // 生成具有操作 state 能力的 action
        const actions = bindActionCreators(flimAction, dispatch);

        // 为各个React组件提供state数据及action
        return(
            <div>
                <Header films={films} actions={actions}/>
                <Select films={films} deleteFilm={actions.deleteFilm} />
            </div>
        );
    }
}

// state将由store提供
function select(state){
    return{
        films: state.films
    };
}

// 暴露经 connect 处理后的组件
export default connect(select)(FilmApp);
