import React from 'react';
import {Button,Dialog,TextField,Fab,DialogActions,DialogContent,DialogTitle} from '@material-ui/core';

import {Edit} from '@material-ui/icons';

import { connect } from 'react-redux';
import { editTodo } from "../../action";

class EditList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.todoId,
      open: false,
      title: this.props.todoTitle,
      completed:this.props.completed
    };
  }

  handleOpen = () => {
    this.setState({
      open: true,
      title:this.props.todoTitle
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange(e) {
   const updateState = {};
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
 }
 saveData=()=>{
    this.props.editTodo(this.state);
    this.setState({ title: '',open:false });
 }
  render() {
    // console.log("ini parsing ID ", this.props.todoId);

    return (
      <div className="formEditinh">
        <Fab mini={true}  onClick={this.handleOpen}>
          <Edit />
        </Fab>
        <Dialog  aria-labelledby="form-dialog-title" open={this.state.open} onClose={this.handleClose}>
        <DialogTitle id="form-dialog-title">Edit your todo</DialogTitle>
        <DialogContent>
         <TextField
            label="Edit Your Todo"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </DialogContent>
        <DialogActions>
        <Button
        primary={true}
        onClick={this.handleClose}
      >Cancel</Button>
      <Button
        primary={true}
        keyboardFocused={true}
        onClick={this.saveData}
      >Save</Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    todos:state.todos
  }
}
const mapDispatchToProps = dispatch => ({
  editTodo: todo => dispatch(editTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditList);
