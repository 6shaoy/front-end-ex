import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content;
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func.isRequired,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    content: 'hello world'
}

export default TodoItem;