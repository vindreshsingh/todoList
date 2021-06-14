import React from "react";
import InputText  from "../InputText";
import Search from "../Search"
import TodoList from "../TodoList";
class HomePage extends React.Component{
    render(){
        return (
          <div>
             <div className="input-search">
                 <InputText />
                 <Search />
             </div>
             <div className="add-todo-card">
                 <TodoList />
             </div>
          </div>
        )
    }
}
export default HomePage;