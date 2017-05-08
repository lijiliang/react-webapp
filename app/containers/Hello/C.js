import React from 'react'

class C extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改城市</button>
            </div>
        );
    }
    changeUserInfo(){
        const actions = this.props.action;
        actions.login({
            userid: 123,
            city: 'GZ'
        });
    }
}

export default C;
