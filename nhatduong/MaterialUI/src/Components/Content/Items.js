import React, { Component } from 'react'
import { TableCell, TableRow,Button ,InputLabel} from '@material-ui/core';
import { greenA700 } from 'material-ui/styles/colors';
import { orangeA400 } from 'material-ui/styles/colors';
import { redA700 } from 'material-ui/styles/colors';
export default class Items extends Component{
constructor(props)
{
    super(props);
    this.state={

    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

}

    handleDelete(id){
     
     this.props.onClickDelete(id);
    }
    handleEdit(items){
        this.props.onClickEdit(items);
    }
    render(){

      
        const {items} = this.props; // = items = this.props.items = > lay items cua props
        
        return(
            <TableRow>
                <TableCell>{items.id}</TableCell>  
                <TableCell>{items.name}</TableCell>
                <TableCell>{this.setSateLevel(items.level)}</TableCell>
                <TableCell>
                <Button onClick={()=>this.handleEdit(items)} variant="contained" color="secondary" style={{margin :20 , width : 40}}>
                   Edit
                </Button>
                <Button onClick={()=>this.handleDelete(items.id)}  variant="contained" color="secondary" style={{margin :20 ,  width : 40}}>
                    Delete
                </Button>
                </TableCell>
            </TableRow>
        );
    }

    setSateLevel(level)
    {
        let elmLevel = <InputLabel style={{color:greenA700}}>Small</InputLabel>
        if(level === 1)
        {
            elmLevel = <InputLabel style={{color:orangeA400}}>Medium</InputLabel>
        }
        else if(level === 2)
        {
            elmLevel = <InputLabel style={{color:redA700}}>High</InputLabel>
        }

        return elmLevel;
    }
}