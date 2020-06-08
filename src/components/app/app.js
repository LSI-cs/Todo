import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    }

    createTodoItem(label) {
        return {
            label:label,
            important: false,
            done: false,
            visible: true,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
            this.setState(({todoData}) => {

            const idx = todoData.findIndex((el) => el.id=== id);
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1)
            ];
     
            return {
                todoData: newArray
            }
        })
    };

    addItem = (text) =>{
        
        const newItem=this.createTodoItem(text);

        this.setState(({todoData})=> {
             const newArr = [
                ...todoData,
                newItem
             ] 
        return {
        todoData: newArr 
       }
        })
    }

    toggleProperty(arr,id,propName) {
        const idx = arr.findIndex((el) => el.id=== id);
       
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [
            ...arr.slice(0,idx),
            newItem,
            ...arr.slice(idx+1)
        ];
    }
    onToggleImportant = (id) => {  
        this.setState(({todoData}) => {     
        return {
            todoData: this.toggleProperty(todoData,id,'important') 
        };
       });
    };
    onToggleDone = (id) => {  
        this.setState(({todoData}) => {     
        return {
            todoData: this.toggleProperty(todoData,id,'done') 
        };
       });
    };
   
    onSearchTodo = (text) =>{
        //text = document.getElementById('SearchPanel').value;
        //проперти для видимости
        //todoData.slice(копия)
        
        this.setState(({todoData}) => {    
            let newArr = todoData.slice(0);
            newArr.forEach(element => element.visible=true);
           let newArr2 = newArr.filter(data =>{
            return data.label.toLowerCase().indexOf(text.toLowerCase()) === -1;
              });
              newArr2.forEach(element => element.visible=false);
              return {
                todoData: todoData
                
            }; 
           });

    }

    onChangeItemStatus = (text) =>{
        console.log('onChangeItemStatus_APP__',text);
        let newArr;
        this.setState(({todoData}) => {  
           const Arr =todoData.slice(0);
           Arr.forEach(element => element.visible=true);
            if (text==='Active') {
                newArr= Arr.filter ((el) => el.done);
                newArr.forEach(element => element.visible=false);
            }
            if (text==='Done') {
                newArr= Arr.filter ((el) => !el.done);
                newArr.forEach(element => element.visible=false);
            }
            if (text==='All') {
                console.log(newArr)
            }
            return { 
                todoData: todoData
                
            }; 
    });
    }

    render(){
        const {todoData} = this.state;
        const doneCount = todoData.filter ((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
 
        return(
            <div> 
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className= "top-panel d-flex">
                     <SearchPanel onSearchFilter = { this.onSearchTodo}/>   
                     <ItemStatusFilter ChangeItemStatus = {this.onChangeItemStatus}/>
                </div>
               
                <TodoList todos={this.state.todoData}
                onDeleted = {this.deleteItem}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}
                />
                <ItemAddForm 
                onAddItem ={this.addItem}/> 
            </div> 
        );
    }
}
 