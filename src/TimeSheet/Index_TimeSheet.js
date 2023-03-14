import * as React from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MyAppBar from './MyAppBar';
import TextField from '@mui/material/TextField';
import Table from "./Table";
import Data_ChamCong from "./Data_ChamCong.json";
import './Index_TimeSheet.css';

class TimeSheet extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            obj:[],
            selectChange:'',
        };
    };

    
    chon=()=>{
            console.log('componentDidMount');
            axios({
                method: 'get',
                url:'http://localhost:63422/api/v1/timesheet',
                data: null
            }).then((res)=>{
                this.setState({
                    obj:res.data.data,
                });
            });
    };

    render(){
        var arrayTT = ['Củ Chi','HVT','Quận 12','Quận 11','Hóc Môn','Gò Vấp'];
        var arrayLoai = ['Full time','Part time'];
        var array_Data_ChamCong = JSON.parse(JSON.stringify(Data_ChamCong));
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
                            >
                                {arrayTT.map((item,index)=>(
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
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
                            >
                                {arrayLoai.map((item,index)=>(
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))}
                            </Select>
                    </FormControl>
                </Box>
                
                <div id='btu_loc'>
                    <Button variant="contained" onClick={()=>{array_Data_ChamCong=Data_ChamCong}} sx={{bgcolor: '#2A388F' }}>Lọc</Button>   
                </div>
                   
            </div>
            
            <Table truyenArray={array_Data_ChamCong}/>

            </div>
        )
    }
}

export default TimeSheet;