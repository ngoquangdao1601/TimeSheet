import React from "react";
import axios from "axios";
import { Button, ListItem } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class ListUser extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            obj:[]
        };
    };
    
    chon=()=>{
            console.log('componentDidMount');
    
            axios({
                method: 'get',
                url:'https://reqres.in/api/users?page=2',
                data: null
            }).then(res=>{
    
                this.setState({
                    obj:res.data.data,
                });
                
            });
    }

    

    render(){
        var {obj} = this.state;

        console.log('render',(obj));
        
        return(
            <>
            <Button variant="contained" onClick={this.chon}>Gọi API</Button>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {obj.map((item)=>(
                        
                        <TableRow key={item.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{item.id}</TableCell>
                        <TableCell align="right">{item.first_name}</TableCell>
                        <TableCell align="right">{item.last_name}</TableCell>
                        <TableCell align="right">{item.email}</TableCell>
                        </TableRow>

                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>    
        );
    };
        
}
export default ListUser;
