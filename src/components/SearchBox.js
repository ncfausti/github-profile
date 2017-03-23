import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import Data from '../data';
import axios from 'axios';

function onChange(e) {
  var val = e.target.value;
  axios.get(`https://api.github.com/users/${val}`)
      .then(res => {
        const profile = res.data;
        //this.setState({ profile });
         Data.profile = profile;

        // Update all data fieds here
      });
}
const SearchBox = () => {

  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      backgroundColor: blue500,
      borderRadius: 2,
      height: 35
    },
    inputStyle: {
      color: white,
      paddingLeft: 5
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white
    }
  };

  return (
    <div>
      <IconButton style={styles.iconButton} >
        <Search color={white}/>
      </IconButton>
      <TextField
        hintText={"Search user..."}
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
