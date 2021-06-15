import React from "react";
import InputText  from "../InputText";
import Search from "../Search"
import TodoList from "../TodoList";
class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
      render(){
          console.log("home",this.props);
          return(
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