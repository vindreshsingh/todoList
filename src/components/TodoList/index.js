import React from "react"
import "./todo.css"
import {Card,CardHeader,TableCell,Fab,Button} from "@material-ui/core"
import {Edit} from "@material-ui/icons"

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div>
            <div className="square">
              <Card>
                <CardHeader
                  actAsExpander={false}
                  showExpandableButton={false}
                />
                <TableCell>
                  <Fab
                    mini={true}
                    className="doneBtn"
                    backgroundColor='green'
                  >
                  </Fab>
  
                </TableCell>
                <TableCell>
                    <Edit />
                </TableCell>
                <TableCell>
                   <Button secondary={true}> Delete</Button>
                </TableCell>
              </Card>
            </div>
        </div>
        )
    }
}
export default TodoList;