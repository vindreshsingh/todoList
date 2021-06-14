import React from "react";
import {Fab} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons";
import "./input.css";
class InputText extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:'',
            msg:'',

        }
    this.handleChange=this.handleChange.bind(this)
    }
    handleChange=(e)=>{
        const updateState = {};
        updateState[e.target.name] = e.target.value;
        this.setState({
            todo:e.target.value
        })

    }
  handleSubmited(){
  if(this.state.todo===''){
     this.setState({
        msg:"please enter your todo"   
     }) 
  }
  else{
      this.state({
          msg:''
      })
  }
  }
    render(){
        const {todo} =this.state;
        return (
          <div>
              <form
               onSubmit={(e)=>{ e.preventDefault();
                this.handleSubmited()
                this.setState({todo: ''})
                }}
              >
                  <input 
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={this.handleChange}
                    className="formAdd"
                  />
                 <Fab type="submit" className="btnAdd">
                     <AddCircle />
                 </Fab>
              </form>
              <p>{this.state.msg}</p>
          </div>
        )
    }
}
export default InputText;