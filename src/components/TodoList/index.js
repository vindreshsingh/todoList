import React from "react"
import "./todo.css"
import { connect } from "react-redux"
import {Card,CardHeader,TableCell,Fab,Button} from "@material-ui/core"
import {Edit,CheckCircle, Cancel} from "@material-ui/icons"
import {done,notDone,deleteTodo,addTodo} from "../../action"
import EditList from "../EditList";
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
          id: '',
          title: '',
          completed: false,
        }
    }
    handleChange(id, completed) {
      if (completed === false){
        this.props.notDone(id);
      }
      else{
         this.props.done(id);
      }
    }
    removeTodo(id) {
      this.props.deleteTodo(id)
    }
    render(){
      console.log(this.props);
      const {todos}=this.props;
        return(
            <div> 
              {todos.map((todo, index) =>
            <div key={index} className="todoCard">
              <Card className={todo.completed === false ? "done" : "notDone"}>
                <CardHeader
                  title={todo.title}
                />
                <TableCell>
                  <Fab
                    className="doneBtn"
                    onClick={()=>this.handleChange(todo.id,todo.completed)}
                  >
                     { todo.completed === false ? <CheckCircle className="ok" />:<Cancel className="cancel" />}
                  </Fab>
  
                </TableCell>
                <TableCell>
                    <EditList todoId={todo.id} todoTitle={todo.title} />
                </TableCell>
                <TableCell>
                   <Button primary={true} onClick={() => this.removeTodo(todo.id)}> Delete</Button>
                </TableCell>
              </Card>
            </div>
              )}
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
  return {todos:state.todos};
}
const mapDispatchToProps = dispatch => ({
  done: todoId => dispatch(done(todoId)),
  notDone: todoId => dispatch(notDone(todoId)),
  deleteTodo: todoId => dispatch(deleteTodo(todoId))
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);