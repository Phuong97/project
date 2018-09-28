import  React,{ Component } from "react";
import { Grid, Paper,Button, TextField, Input } from '@material-ui/core';


const arrLevel = [
    {
      value: '0',
      label: 'Small',
    },
    {
      value: '1',
      label: 'Medium',
    },
    {
        value: '2',
        label: 'High',
      },
    
  ];
export default class Form extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
                isCancel : true,
                id       : null,
                strAdd   : '',
                opLevel  :0,

        };
        this.handleChange        = this.handleChange.bind(this);
        this.handleChangeOption  = this.handleChangeOption.bind(this);
        this.handleClear         = this.handleClear.bind(this);

        this.handleAdd           = this.handleAdd.bind(this);
    }
    componentWillMount(){//cho vao wwill mount de edit data trong txt
        if(this.props.itemsEdit!==""){  
            this.state.strAdd  = this.props.itemsEdit.name;
            this.state.opLevel = this.props.itemsEdit.level;
            this.state.id      = this.props.itemsEdit.id;
        }
    }

    handleChange = event => {
        this.setState({ strAdd: event.target.value });
    };
    
    handleChangeOption(event){
        this.setState({opLevel :event.target.value});
    }
   
    handleClear(){
        this.setState({ strAdd: '' });
    }

    handleAdd(id,a,b){
        if(id===null){
            let rows = this.props.rows;
            id = rows.length+1;
            this.props.onClickAdd(id,a,b);
        }
        else
        {   
            this.props.onClickAdd(id,a,b);

        }
    }


    
    render() {
        //set gia tri de edit => de render k edit duoc move qua wil mount
       
        return (
            <Grid container spacing={24}>

                <Grid item xs={7}></Grid>
                <Grid item xs={1}>
                    <Paper>
                        <Input
                            value = {this.state.strAdd} 
                            onChange ={this.handleChange}
                            placeholder="Name task"
                            fullWidth='true'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={1}>
                <TextField
                        style={{ marginTop : 0}}
                        id="filled-select-currency-native"
                        select
                        label="level"
                        value = {this.state.opLevel}
                        onChange ={this.handleChangeOption}

                        SelectProps={{
                            native: true
                           
                        }}  
                        margin="normal"
                        variant="filled"
                        >
                        {arrLevel.map(option => (
                            <option key={option.value} value={option.value}  >
                            {option.label}
                            </option>
                        ))}
                </TextField>

                </Grid>
                <Grid item xs={1}>

                    <Button variant="contained" size="medium" color="primary" onClick={()=>this.handleAdd(this.state.id,this.state.strAdd,this.state.opLevel)}>
                        Submit
                    </Button>

                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" size="medium" color="primary" onClick ={this.handleClear} >
                        Clear
                    </Button>

                </Grid>
             
            </Grid>
        );
    }

}