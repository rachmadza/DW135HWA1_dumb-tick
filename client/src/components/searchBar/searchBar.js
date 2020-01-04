import React, { Component } from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, Input  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

export default class searchBar extends Component {
  render() {
    return (
      <div>
        <center>
          <FormControl style={{width: '100%'}}> 
              <InputLabel>Search Event</InputLabel>
              <Input
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
        </center>
      </div>
    )
  }
}
