import React from 'react';
import { Component } from "react";
import { Grid, Paper, Button, TextField } from '@material-ui/core';
import SearchAppBar from './SearchAppBar';
import List from './List'
import Task from '../Database/Task'
import Form from './Form';

const arrSort = [
    {
        value: 'Name',
        label: 'Name',
    },
    {
        value: 'Level',
        label: 'Level',
    },

];

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: Task.rows,
            tempRows: Task.rows,
            isShowForm: false,
            itemsEdit: '',

        };

        this.handleToggleForm = this.handleToggleForm.bind(this);

        this.handleSearch = this.handleSearch.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.handleChangeee = this.handleChangeee.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }


    state = {
        name: '',
        current: 'Level',
    };

    handleChangeee = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleChange = event => {
        this.setState({ [event.target.level]: event.target.value });
    };

    handleToggleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm
        })
    }



    handleSearch(value) {

        let temp = [];
        let z = this.state.rows;
        value = parseInt(value);

        if (!isNaN(value)) {

            temp = z.filter((x) => x.id === value);
            this.setState({
                rows: temp
            })
        }
        else {

            this.setState({
                rows: this.state.tempRows
            })
        }


    }

    handleSort() {
        this.setState({

            rows: this.state.rows.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 1)

        });

        if (this.state.current === "Level") {

            this.setState({
                rows: this.state.rows.sort((a, b) => a.level - b.level)
            });
        }
        else {

            this.setState({

                rows: this.state.rows.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 1)

            });
        }

    }

    handleDelete(id) {
        this.setState({
            rows: this.state.rows.filter((x) => x.id !== id)
        });

    }
    handleEdit(items) {

        this.setState({
            isShowForm: !this.state.isShowForm,
            itemsEdit: items
        })

    }

    handleShowEditForm() {
        this.setState({

        })
    }


    handleAdd(id, name, level) {

        //co 2 truogn hop 1 la edit 2 la add
        // neu da co dia chi id thi la edit 
        // k co dia chi id la add

        let rows1 = this.state.rows;
        let num  = rows1.length + 1;
        
        if (name != "") {
            console.log(this.state.rows[id-1]);
            if (id >= num) {
                level = parseInt(level);
                this.state.rows.push({
                    id: id,
                    name: name,
                    level: level
                })
                this.setState({
                    rows: this.state.rows
                })
            }
            else
            {   this.state.rows[id-1].name = name;
                this.state.rows[id-1].level = level;
                this.setState({
                    rows : this.state.rows
                })
            }
        }
    }

    render() {


        let rows = this.state.rows;
        let isShowForm = this.state.isShowForm;
        let strSearch = this.state.strSearch;
        let elmButton = <Button variant="contained" size="medium" color="primary" fullWidth='true' onClick={this.handleToggleForm}>
            ADD TASK
                        </Button>
        let elmForm = null;





        //show toggle
        if (isShowForm) {
            elmForm = <Form onClickAdd={this.handleAdd} itemsEdit={this.state.itemsEdit} rows={rows} />
            elmButton = <Button variant="contained" size="medium" color="primary" fullWidth='true' onClick={this.handleToggleForm}>
                CLOSE
                        </Button>
        }

        return (
            <Grid container spacing={24}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <Paper>
                        <SearchAppBar strSearch={strSearch} onClickSearch={this.handleSearch} />
                    </Paper>
                </Grid>



                <Grid item xs={1}>
                    <TextField
                        style={{ marginTop: 0 }}
                        id="sort"
                        select
                        label="sort"
                        value={this.state.current}
                        onChange={this.handleChangeee('current')}
                        SelectProps={{
                            native: true

                        }}

                        margin="normal"
                        variant="filled"
                    >
                        {arrSort.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={1}>
                    <Button variant="contained" size="medium" color="primary" fullWidth='true' onClick={this.handleSort}>
                        Sort {this.state.current}
                    </Button>
                </Grid>
                <Grid item xs={1}> </Grid>
                <Grid item xs={3}>
                    <Paper>
                        {elmButton}
                    </Paper>
                </Grid>


                {elmForm}

                <List onClickDelete={this.handleDelete} onClickEdit={this.handleEdit} rows={rows} />

            </Grid>
        );
    }
}