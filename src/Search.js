import React, { Component } from 'react'
import { TextField,Select, MenuItem, Box,FormControl, Container, InputLabel } from '@material-ui/core';
import axios from 'axios'
import ImageResult from './ImageResult';
class Search extends Component {
    constructor(){
        super();
        this.state={
            searchText:'',
            amount:20,
            apiurl:'https://pixabay.com/api/',
            apikey:'15276779-0a890273f64b1b88bf13c3696',
            images:[],


        }
    }

    onTextChange = e =>{
        const val = e.target.value
        this.setState({[e.target.name]:e.target.value}, ()=>{
           if(val === ''){
                this.setState({images:[]})
           }else{
            axios.get(`${this.state.apiurl}/?key=${this.state.apikey}&q=${
                this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({images:res.data.hits}))
            .catch(err => console.log(err))
           }
        })
    }

    onAmountChange =(e,index,value)=>{
        this.setState({amount:this.state.amount})
    }
    render() {
        return (
            <Container sm>
                <Box>
                <TextField 
               name="searchText"
               value={this.state.searchText}
               onChange={this.onTextChange}
               id="static-basic" label="Search Image"/>
                </Box>
              
                <Box>
                <FormControl>
                
                <InputLabel id="demo-label">Amount</InputLabel>
                <Select
               name="amount"
               onChange={this.onTextChange}
               label="Amount"
               value={this.state.amount} >
                   <MenuItem value={5}>5</MenuItem>
                   <MenuItem value={10}>10</MenuItem>
                   <MenuItem value={20}>20</MenuItem>
                   <MenuItem value={30}>30</MenuItem>
                   <MenuItem value={50}>50</MenuItem>
                </Select>
                </FormControl>
                </Box>
                
             <Box>
                 {this.state.images.length > 0 ? <ImageResult images={this.state.images}/> : null }
             </Box>
            
            </Container>
        )
    }
}

export default Search

