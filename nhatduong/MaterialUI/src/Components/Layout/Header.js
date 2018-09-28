import React from 'react';
import { Component } from "react";
import {AppBar,Toolbar,Typography} from '@material-ui/core';
export default class Header extends Component
{
    render(){
        return(
            <AppBar position="static" style={{marginBottom:20}}>
                <Toolbar>
                    <Typography variant="title" color="inherit">
                            Demo Material UI    
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}       