import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, getItemDeleteAction, initListAction } from './store/actionCreators';
import TodoListUI from './TodoListUI'
import axios from 'axios';

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return <TodoListUI 
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleInputChange={this.handleInputChange}
                    handleBtnClick={this.handleBtnClick}
                    handleItemDelete={this.handleItemDelete}
                />
    }

    componentDidMount(){
        axios
            .get('https://16e30add-29d5-43ee-9328-0ae44a565a88.mock.pstmn.io/api/todolist')
            .then((res)=>{
                const data = res.data;
                const action = initListAction(data);
                store.dispatch(action);
            })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index){
        const action = getItemDeleteAction(index);
        store.dispatch(action);
    }
}


export default TodoList;