import React from 'react';
import MainContainer from './MainContainer.js'

class NotFound extends React.Component {
    render() {
        return (
            <div>
                <MainContainer>
                    <h1 className="page-header">{this.props.title}</h1>
                    Page Not Found
                </ MainContainer>
            </div>
        );
    }
}

export default NotFound;