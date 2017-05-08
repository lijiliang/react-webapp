import React from 'react';
import { hashHistory } from 'react-router';

class List extends React.Component{
    render(){
        const list = [1,2,3];
        return(
            <ul>
                {list.map((item, index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this, item)}>js jump to {item}</li>
                })}
            </ul>
        );
    }
    clickHandler(value){
        hashHistory.push('/detail/' + value);
    }
}

export default List;
