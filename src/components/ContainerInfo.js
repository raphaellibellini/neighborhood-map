import React, { Component} from 'react'
import Search from './Search';
import List from './List';
import Footer from './Footer';

class ContainerInfo extends Component {
    render() {
        return (
            <div className='container-info'>
                <Search query={this.props.query} updateQuery={this.props.updateQuery} />
                <List {...this.props} handleListItemClick={this.props.handleListItemClick} />
                <Footer />
            </div>
        )
    }
}

export default ContainerInfo