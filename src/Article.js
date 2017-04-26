import React, {Component} from 'react'
import Comments from './CommentList'


export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        foo: 'bar'
    };

    render() {
        const {article} = this.props;
        const comments = article.comments;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
                {this.getComments(comments)}
            </section>
        )
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text}</div>
    }

    getComments(comments) {
        return this.state.isOpen ? <Comments comments={comments}/> : null;
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
