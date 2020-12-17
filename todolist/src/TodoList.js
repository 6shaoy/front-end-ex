import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor='insertArea'>输入内容: </label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>
                        提交
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        );
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={index} // 这里不合适，以后再改
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }

    handleInputChange(e){
        // this.setState({
        //     inputValue: e.target.value
        // });
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }));
        // 通常格式为： this.setState(()=>{}) 当只返回一个对象时可以使用上面的方式简写
    }

    handleBtnClick(){
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    handleItemDelete(index){
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list: list
        // })
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}; // return {list: list} 的简写
        });
    }
}

export default TodoList;