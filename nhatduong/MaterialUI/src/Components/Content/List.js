import React, { Component } from 'react'
import { Grid, Paper, Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';
import Items from './Items';
export default class List extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

        }
      
    }
 
    
    render(){
        
        const rows = this.props.rows;
        
        const elmItem = rows.map((item ,index)=> {
            
            return (
                <Items onClickDelete = {this.props.onClickDelete}  onClickEdit = {this.props.onClickEdit} items ={item} key = {index}/>
               
            );
        });
    
        return(
            <Grid container spacing= {24}>
            <Grid item xs={1} style ={{marginTop:20}}></Grid>
            <Grid item xs={10} style ={{marginTop:20}}>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                        
                            <TableCell> ID</TableCell>
                            <TableCell>Task</TableCell>
                            <TableCell>Level</TableCell>
                            <TableCell>Action</TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {elmItem}
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
        <Grid item xs={1} style ={{marginTop:20}}></Grid>
        </Grid>
        );

    }
}