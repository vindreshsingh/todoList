import React from "react";
import {Fab} from "@material-ui/core"
import {AddCircle} from "@material-ui/icons";
import { addTodo } from '../../action';
import {connect} from "react-redux"
import "./input.css";
class InputText extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            msg:'',
            completed:false
        }
    this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        const updateState = {};
        updateState[e.target.name] = e.target.value;
        this.setState({
            title:e.target.value
        })

    }
  handleSubmited(){
  if(this.state.title===''){
     this.setState({
        msg:"please enter your todo"   
     }) 
  }
  else{
      this.setState({
          msg:''
        
      })
      this.props.addTodo(this.state)
  }
  }
    render(){
        console.log(this.props);
        const {title} =this.state;
        return (
          <div>
              <form
               onSubmit={(e)=>{ e.preventDefault();
                this.handleSubmited()
                this.setState({title: '',createdAt: ''})
                }}
              >
                  <input 
                    type="text"
                    name="title"
                    value={title}
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
const mapDispatchToProps = dispatch => ({
    addTodo: newTodo => dispatch(addTodo(newTodo)),
  })
export default connect(null,mapDispatchToProps)(InputText);