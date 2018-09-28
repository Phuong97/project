import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch :'',
      
    }
    this.handleChange     = this.handleChange.bind(this);
    this.handleSearch     = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ strSearch: event.target.value });
  }
  handleSearch(value) {
    this.props.onClickSearch(value);
  }
  handleClearSearch() {
    this.setState({ strSearch: '' });
    
  }
  render() {

    const { classes } = this.props;

    return (
      <Grid container >
        <Grid item xs={8} style={{ marginTop: 20 }}>
          <div className={classes.root}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                value={this.state.strSearch}
                onChange={this.handleChange}
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={2} style={{ marginTop: 20 }}>
        <Button variant="outlined" size="small" color="primary" fullWidth='true' onClick={()=>this.handleSearch(this.state.strSearch)}>
          Go!
        </Button>
        </Grid>
        <Grid item xs={2} style={{ marginTop: 20 }}>
        <Button variant="outlined" size="small" color="primary" fullWidth='true' onClick={this.handleClearSearch}>
          Clear
        </Button>
        </Grid>
      </Grid>


    );
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);