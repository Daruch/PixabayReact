import React from 'react';
import TextField from 'material-ui/TextField';
import SelectedField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import axios from 'axios';
import ImageResults from '../image result/imageResults';

class Search extends React.Component{

 state = {
    searchText:'',
    amount:15,
    apiUrl: 'https://pixabay.com/api',
    apiKey:'8774760-d8e57a7c8aaa3fe1e74547e9c',
    images:[]
 };


 onTextChange = e =>{
   const val = e.target.value; 

   this.setState({[e.target.name]:val}, ()=>{
      if(val === ' '){
        this.setState({images:[]});
     }else{
        axios
          .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&
          per_page=${this.state.amount}&safesearch=true`)
          .then(res => this.setState({images:res.data.hits}))
          .catch(err => console.log(err));
     }
  });
 };


 onAmountChange = (e, index, value) => this.setState({amount: value});


  render(){
    console.log(this.state.images);
     return(
       <div>
        <TextField
            name = "searchText"
            value = {this.state.searchText}
            onChange = {this.onTextChange}
            floatingLabelText = "Search for"
            fulltWidth = {true}
            />
          <br/>  

        <SelectField
            name = 'amount'
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            >
            <MenuItem value={1} primaryText="5" />
            <MenuItem value={2} primaryText="10" />
            <MenuItem value={3} primaryText = "15" />
            <MenuItem value={4} primaryText="20" />
            <MenuItem value={5} primaryText="25" />
        
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />): null}
       </div>  
     )
  }
}




export default Search;