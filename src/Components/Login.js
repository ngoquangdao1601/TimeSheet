import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import AddJob from "./AddJob.js"

export default function Login(){
    const [nhapText, setNhapText] =useState("");
    const [batTat_login, setBatTat_login] = useState(false)

    const anEnter = e => e.key==='Enter' && chuyenDoiTrang()

    function chuyenDoiTrang()
    {
      nhapText==="123" ? setBatTat_login(true) : alert('Sai mật khẩu')
    }
   
    return(
    <>
    <div hidden={batTat_login}>
      <TextField 
        label="Password" 
        helperText="Pass là: 123" 
        size="small" 
        type="text" 
        onChange={e => setNhapText(e.target.value)}
        onKeyPress={anEnter}
        />
      <Button variant="contained" onClick={chuyenDoiTrang}>Login</Button>
    </div>

    <AddJob truyen_batTat={batTat_login}/>
        </>
    )
}

