import * as React from "react";
import {useState} from "react";
import Data_ChamCong from "./Data_ChamCong.json";
import './Row_NhanVien.css';

export default function Row_NhanVien(truyen) {
    const [obj_nhanVien,setObj_nhanVien] = useState(JSON.parse(JSON.stringify(Data_ChamCong[truyen.index])));
    var array_option_ngayCong = ["X","X/2","X/4","P","P/2"];
    
    var bangTrong={
        id: obj_nhanVien.id,
        name: obj_nhanVien.name,
        ngayCong: ["X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
        tangCa150: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        tangCa200: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        tangCa300: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        nghiBu: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    };
    
    const [disabledButtonSave_Reload,setdisabledButtonSave_Reload] = useState(true);
    const [disabledButtonClear,setdisabledButtonClear] = useState(false);

// Save_Reload_Clear Button
    const onClick_button_save = () => {
        Data_ChamCong[truyen.index]=JSON.parse(JSON.stringify(obj_nhanVien));
        setdisabledButtonSave_Reload(true);
    };
    const onClick_button_Reload = () => {
        setObj_nhanVien(JSON.parse(JSON.stringify(Data_ChamCong[truyen.index])));
        setdisabledButtonSave_Reload(true);
        setdisabledButtonClear(false);
    };
    const onClick_button_clear = () => {
        setObj_nhanVien(bangTrong);
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(true);
    };

// Sự kiện onChange
    const onChange_ghiNhanSuKien_ngayCong = (getIndexObj,getValue) => {
        const ngayCong = obj_nhanVien.ngayCong.map((value, i) => (
            i === getIndexObj ? getValue : value
        ));
        setObj_nhanVien({...obj_nhanVien, ngayCong});
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(false);
    };
    const onChange_ghiNhanSuKien_tangCa150 = (getIndexObj,getValue) => {
        const tangCa150 = obj_nhanVien.tangCa150.map((value, i) => (
            i === getIndexObj ? getValue : value
        ));
        setObj_nhanVien({...obj_nhanVien, tangCa150});
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(false);
    };
    const onChange_ghiNhanSuKien_tangCa200 = (getIndexObj,getValue) => {
        const tangCa200 = obj_nhanVien.tangCa200.map((value, i) => (
            i === getIndexObj ? getValue : value
        ));
        setObj_nhanVien({...obj_nhanVien, tangCa200});
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(false);
    };
    const onChange_ghiNhanSuKien_tangCa300 = (getIndexObj,getValue) => {
        const tangCa300 = obj_nhanVien.tangCa300.map((value, i) => (
            i === getIndexObj ? getValue : value
        ));
        setObj_nhanVien({...obj_nhanVien, tangCa300});
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(false);
    };
    const onChange_ghiNhanSuKien_nghiBu = (getIndexObj,getValue) => {
        const nghiBu = obj_nhanVien.nghiBu.map((value, i) => (
            i === getIndexObj ? getValue : value
        ));
        setObj_nhanVien({...obj_nhanVien, nghiBu});
        setdisabledButtonSave_Reload(false);
        setdisabledButtonClear(false);
    };

    return(
    <>
        <tr>
            <td className="td_sticky1" rowSpan={5}>
                <div id="div_button_save_reload_clear">
                    <button disabled={disabledButtonSave_Reload} onClick={onClick_button_save} id="button_save">Save</button>
                    <button disabled={disabledButtonSave_Reload} onClick={onClick_button_Reload} id="button_reload">Reload</button>
                    <button disabled={disabledButtonClear} onClick={onClick_button_clear} id="button_clear">Clear</button>
                </div>
            </td>
            <td className="td_sticky2" rowSpan={5}>
                <div className="div_hoTen">{obj_nhanVien.name}</div></td>
            <td className="td_sticky3">Ngày công</td>
            {obj_nhanVien.ngayCong.map((i,index_ngayCong)=>(
                <td key={index_ngayCong}>
                    <select onChange={(e)=>onChange_ghiNhanSuKien_ngayCong(index_ngayCong,e.target.value)} value={i}>
                        {array_option_ngayCong.map((value_ngayCong,i)=>(
                            <option key={i}>{value_ngayCong}</option>
                        ))}
                    </select>
                </td>
            ))}
        </tr>

        <tr>
            <td className="td_sticky3_white">Tăng ca (1.5)</td>
            {obj_nhanVien.tangCa150.map((i,index_tangca150)=>(
                <td key={index_tangca150} className="td_sticky4_white">
                    <input onChange={(e)=>onChange_ghiNhanSuKien_tangCa150(index_tangca150, e.target.value)}
                    type='number' min="0" max="24" step="1" value={i} className='input_td'></input>
                </td>
            ))}
        </tr>

        <tr>
            <td className="td_sticky3">Tăng ca (2.0)</td>
            {obj_nhanVien.tangCa200.map((i,index_tangca200)=>(
                <td key={index_tangca200}>
                    <input onChange={(e)=>onChange_ghiNhanSuKien_tangCa200(index_tangca200, e.target.value)}
                    type='number' min="0" max="24" step="1" value={i} className='input_td_gray'></input>
                </td>
            ))}
        </tr>

        <tr>
            <td className="td_sticky3_white">Tăng ca (3.0)</td>
            {obj_nhanVien.tangCa300.map((i,index_tangca300)=>(
                <td key={index_tangca300} className="td_sticky4_white">
                    <input onChange={(e)=>onChange_ghiNhanSuKien_tangCa300(index_tangca300, e.target.value)}
                    type='number' min="0" max="24" step="1" value={i} className='input_td'></input>
                </td>
            ))}
        </tr>

        <tr>
            <td className="td_sticky3">Nghỉ bù (số ngày)</td>
            {obj_nhanVien.nghiBu.map((i,index_nghiBu)=>(
                <td key={index_nghiBu}>
                    <input onChange={(e)=>onChange_ghiNhanSuKien_nghiBu(index_nghiBu, e.target.value)}
                    type='number' min="0" max="24" step="1" value={i} className='input_td_gray'></input>
                </td>
            ))}
        </tr>

        <tr>
            <td colSpan={34} className="td_phanCach"></td>
        </tr>

    </>
    );
}