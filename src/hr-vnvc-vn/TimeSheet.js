import * as React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './TimeSheet.css';
import MyAppBar from './MyAppBar.js';
import TextField from '@mui/material/TextField';
import Table from "./Table.js";

class TimeSheet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj:[],
            selectChange:'',
        };
    };

    
    // chon=()=>{
    //         console.log('componentDidMount');
    //         axios({
    //             method: 'get',
    //             url:'https://reqres.in/api/users?page=2',
    //             data: null
    //         }).then(res=>{
    //             this.setState({
    //                 obj:res.data.data,
    //             });
    //         });
    // };

    loc_button = () => {

    }

    thaydoi=(event)=>{
        this.setState({
            selectChange:event.target.value,
        });
    };

    render(){
        var arrayTT = ['Củ Chi','HVT','Quận 12','Quận 11','Hóc Môn','Gò Vấp'];
        var arrayLoai = ['Full time','Part time'];
        
        return(
            <div className="body">
            <MyAppBar/>
            <div  id='header'>
                <Box>
                    <FormControl sx={{minWidth:300, marginRight:2}}>
                    <InputLabel id="demo-simple-select-label">Trung Tâm</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Trung Tâm"
                            onChange={this.thaydoi}
                            >
                                {arrayTT.map(item=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                    </FormControl>
                </Box>
                
                <Box>
                    <FormControl sx={{minWidth:300, marginRight:2}}>
                        <TextField
                        type='month'
                        >
                        </TextField>
                    </FormControl>
                </Box>

                <Box>
                    <FormControl sx={{minWidth:300, marginRight:2}}>
                    <InputLabel id="demo-simple-select-label">Loại</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Loại"
                            onChange={this.thaydoi}
                            >
                                {arrayLoai.map(item=>(
                                    <MenuItem key={item} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                    </FormControl>
                </Box>
                
                <div id='btu_loc'>
                    <Button variant="contained" onClick={this.loc_button} sx={{bgcolor: '#2A388F' }}>Lọc</Button>   
                </div>
                   
            </div>
            
            <Table/>
        
            </div>
        )
    }
}

export default TimeSheet;