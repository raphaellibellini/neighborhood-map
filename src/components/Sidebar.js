import React, { Component} from 'react'
import Search from './Search';
import List from './List';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <h2>Places</h2>
                <Search />
                <List {...this.props} handleListItemClick={this.props.handleListItemClick} />
            </div>
        )
    }
}

export default Sidebar