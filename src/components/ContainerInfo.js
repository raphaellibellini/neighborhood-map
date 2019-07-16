import React, { Component} from 'react'
import Search from './Search';
import List from './List';
import Footer from './Footer';

class ContainerInfo extends Component {
    render() {
        return (
            <section className='container-info'>
                <Search query={this.props.query} updateQuery={this.props.updateQuery} />
                <List {...this.props} handleListItemClick={this.props.handleListItemClick} />
                <Footer />
            </section>
        )
    }
}

export default ContainerInfo