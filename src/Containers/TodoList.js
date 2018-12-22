import React from 'react'
import Header from '../Components/Header';
import AddNew from '../Components/AddNew';
import List from '../Components/List';
class TodoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data:[
                {
                    title: "To do list 1"
                },
                {  
                    title: "To do list 2"
                },
                {  
                    title: "To do list 3"
                }
            ]       
        }
    }
    onAddTodoList = () =>{
        const TodoList = this.state.data
        TodoList.push({
            title:"To do List" + (TodoList.length + 1 )
        })
        this.setState({
            data: TodoList
        })
    };
    onDelete = (todoId) => {
       
    };
    render(){
        return(<div>
            <Header />
            <AddNew onAddNew={this.onAddTodoList} />
            <div>
                {this.state.data.map((todo, key) =>{
                    return <List key={key } todo={todo} onDeleteTodoList={()=>this.onDelete(key)} />;
                }
                )}
            </div>
        </div>
        );
    };
}
export default TodoList ;