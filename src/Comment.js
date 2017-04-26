'use strict';
import React, {Component} from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                {this.getUser()}
                {this.getBody()}
            </div>
        )
    }

    getUser() {
        return <div><h3>{this.props.comment.user}</h3></div>
    }

    getBody() {
        return <div>{this.props.comment.text}</div>
    }

}
