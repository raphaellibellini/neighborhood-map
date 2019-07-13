import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {
    render() {
        return (
            <ul className='list'>
                {this.props.locations && 
                    this.props.locations.map((location, index) => 
                    <ListItem key={index} {...location} handleListItemClick={this.props.handleListItemClick} />
                )}
            </ul>
        )
    }
}

export default List