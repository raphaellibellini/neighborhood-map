import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        return (
            <li className='list-item' onClick={() => this.props.handleListItemClick(this.props)} >
                {this.props.name}
            </li>
        )
    }
}

export default ListItem