'use strict';
import React, {Component} from 'react'
import Comment from './Comment'


export default class CommentList extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        let {comments} = this.props;
        comments = comments ? comments : [];
        
        const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        return (
            <div>
                {this.getButton(elements)}
                {this.getBody(elements)}
            </div>
        )

    }

    getButton(elements) {
        if(elements.length)
            return(<button onClick={this.toggleOpen}>
                        {this.state.isOpen ? 'Hide comments' : 'Show comments' }
                   </button>);
        else
            return null;
    }

    getBody(elements) {
        return(
            this.state.isOpen ?
            <ul>
                {elements}
            </ul>
            : null
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}
