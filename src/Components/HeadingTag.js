import Checkbox from '@mui/material/Checkbox';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import axios from 'axios';

export default function HeadingTag({truyen, truyen2, truyen3}){

    const [bienAnHien,setBienBatTat]  = React.useState(false)
    const [nhapText,setNhapText] = React.useState("")
    function hamAnHien(vanbanhientai)
    {
        
        setNhapText(vanbanhientai)
    }

    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Đã xong</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">Tên việc</TableCell>
            <TableCell align="right">isCompleted</TableCell>
            <TableCell align="right">Functions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {truyen.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <Checkbox
                    color="success"
                    onClick={()=>truyen2(item.id)}/>
                </TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">
                    
                    <div hidden={bienAnHien}>
                        <TextField
                        value={item.name}
                        />
                    </div>
                    <div hidden={!bienAnHien}>
                        <TextField
                        value={nhapText}
                        onChange={e=>setNhapText(e.target.value)}
                        />
                    </div>
                </TableCell>
                <TableCell align="right">{item.isCompleted}</TableCell>
                <TableCell align="right">
                    <button onClick={() =>truyen3(item.id)}>Xóa</button>
                    <button onClick={()=>setBienBatTat(true) }>Sửa</button>
                </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </TableContainer>
        </>
    )
}