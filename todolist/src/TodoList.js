import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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
                        // ref={(input) => {this.input = input}}
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

    componentDidMount() {
        axios.get('https://16e30add-29d5-43ee-9328-0ae44a565a88.mock.pstmn.io/api/todolist')
            .then((res)=>{
                console.log(res);
                this.setState(()=>({ list: [...res.data] }));
            })
            .catch(()=>{alert('error')});
    }

    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    key={item}
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
        // const value = this.input.value;
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