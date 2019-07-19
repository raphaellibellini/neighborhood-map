import React from 'react'

class ErrorBoundaries extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error,
            info
        })
    }
    
    render () {
        if(this.state.error) {
            return (
                <div>
                    {this.props.name ? (
                            <h3 style={{textAlign: 'center'}}>Oh, no! Something went wrong on {this.props.name}! Could not display the map!</h3>
                    ) : (
                            <h3>Oh, no! Something went wrong! Could not display the map!</h3>

                    )}
                    <p>{this.state.error && this.state.error.toString()}</p>
                    <p>{this.state.info.componentStack}</p>
                </div>
            )
        }

        return this.props.children
    }

}

export default ErrorBoundaries