import React from "react";
import {TextField} from "@material-ui/core" 
class Search extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <TextField
                label="enter your todo"
                type="text"
                />
            </div>
        )
    }
}
export default Search;