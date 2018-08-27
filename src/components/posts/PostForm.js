import React from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../../actions/postActions' ;

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit =  this.onSubmit.bind(this);

    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })

        console.log(this.state.title);
    }

    onChangeBody(e) {
        this.setState({
            body: e.target.value
        })

        console.log(this.state.body);
    }

    onSubmit(e) {
        e.preventDefault;

        const post = {
            title: this.state.title,
            body: this.state.body
        }

       this.props.createPost(post);
    }

    render() {
        return(
            <div>
            <h1>Add a Student</h1>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChangeTitle}/>
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name="body" value={this.state.body} onChange={this.onChangeBody}/>
                </div>
                <input type="button" value="Add Student" onClick={this.onSubmit}/>
            </form>
        </div>
        )
        
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);