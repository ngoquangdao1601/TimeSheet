import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import {useCallback, useState} from 'react';
import HeadingTag from './HeadingTag.js'
import { v4 } from "uuid";

// import InputAdornment from "@mui/material/InputAdornment";

export default function AddJob({truyen_batTat}) {
  const [mauSac, setMauSac] = useState("");
  const [mauTam, setMauTam] = useState([
    {id: v4(),name: "Quốc phòng - bóng chuyền", isCompleted: "false"},
    {id: v4(),name: "Lập trình căn bản", isCompleted: "false"},
    {id: v4(),name: "Toán đại số", isCompleted: "false"},
  ]);
  // console.log('debug_AddJob.js');
  
  const daXongViec = (id) =>
  {
    setMauTam(pS=>pS.map(item=>
      
        (item.id===id && item.isCompleted==="false")? {...item,isCompleted: "true"}: (item.id===id && item.isCompleted==="true")? {...item,isCompleted: "false"}:item
      
      ))
  }

  const xoaPhanTuTrongMang = index =>
  {
    setMauTam(item => item.filter(i => i.id !== index));
  }

  const anEnter = e => e.key === 'Enter' && setmau()

  function setmau()
  {
    setMauTam([{id: v4  (), name: mauSac, isCompleted: "false"}, ...mauTam]);
    setMauSac("");
  }

   return (
    <div hidden={!truyen_batTat}>
    <TextField 
      name="add-todo" 
      label='Thêm việc cần làm...'
      value={mauSac}
      InputProps={{
        endAdornment:(
          // <InputAdornment position="end">
          <Button
          variant="outlined"
          disabled={!mauSac}
          onClick={()=>setmau()}
            >Add</Button>
          // </InputAdornment>
        )}}
      onChange={(e)=>{setMauSac(e.target.value)}}
      onKeyPress={anEnter}
      
      />

      <h1>Danh sách cần làm</h1>
      
      <HeadingTag truyen={mauTam} truyen2={daXongViec} truyen3={xoaPhanTuTrongMang}></HeadingTag>
    </div>
  );
  
}
