import React from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import Data from '../data';
import axios from 'axios';


class SearchBox extends React.Component {
  constructor(props) {
    super(props)
  }
  handleChanged(e) {
    this.props.changeProfile();
  }

  onChange(e) {
    var val = e.target.value;
    var self = this;
    axios.get(`https://api.github.com/users/${val}`)
        .then(res => {
          const profile = res.data;
          //this.setState({ profile });
           self.changeProfile(profile);

          // Update all data fieds here
        });
  }
  keyPressed(e) {
      console.log(e.key);
      console.log( typeof(e.target.value) + e.target.value);
      console.log(e.target.value === "");
      if(e.key === "Enter") {
        console.log('changeProfile')
        var val = e.target.value;
        var self = this;
        axios.get(`https://api.github.com/users/${val}`)
            .then(res => {
              const profile = res.data;
              //this.setState({ profile });
               self.props.changeProfile(profile);

              // Update all data fieds here
            });
      }
  }
  render() {

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
        hintText={"Search..."}
        underlineShow={false}
        fullWidth={true}
        style={styles.textField}
        inputStyle={styles.inputStyle}
        hintStyle={styles.hintStyle}
        //onChange={this.handleChanged.bind(this)}
        onKeyUp={this.keyPressed.bind(this)}
      />
    </div>
  );
  }
}

export default SearchBox;
