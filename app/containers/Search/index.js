import React from 'react';

class Detail extends React.Component{
    render(){
        return(
            <div>
                sadf
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
