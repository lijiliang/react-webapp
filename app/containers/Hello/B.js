import React from 'react'

class B extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.userinfo.city}</p>
                <p>{this.props.userinfo.cityname}</p>
            </div>
        );
    }
}

export default B;
