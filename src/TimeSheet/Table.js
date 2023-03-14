import * as React from "react";
import Row_NhanVien from "./Row_NhanVien";
import './Table.css';

export default function Table(truyen) {
    var arrayThang = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const array_nhanVien = truyen.truyenArray;
    return(
        <div id='div_table'>
            <table>
                <thead>
                    <tr>
                        <th className="th-sticky1" >Chức năng</th>
                        <th className="th-sticky2">
                            <div id="div_hoTen">Họ tên</div></th>
                        <th className="th-sticky3">Loại công</th>
                        {arrayThang.map((i,index)=>(
                            <th key={"arrayThang"+index} className="th-sticky">{i}</th>
                        ))}
                    </tr>
                    <tr>
                        <th className="th-sticky4">
                            <div className="div_borderBottom"></div>
                            {/* Ô trống chức năng */}
                        </th>
                        <th className="th-sticky5">
                            <input type='input' id="input_locTheoTen"></input>
                        </th>
                        <th className="th-sticky6">
                            <div className="div_borderBottom"></div>
                            {/* Ô trống loại công */}
                        </th>
                        <th className="th-sticky7" colSpan={31}>
                            <div className="div_borderBottom"></div>
                            {/* Ô trống ngày công */}
                        </th>
                    </tr>   
                </thead>
                
                <tbody>
                    {array_nhanVien.map((_,index) => (
                    <Row_NhanVien key={index} index={index}/>
                ))}
                </tbody>
            </table>

        </div>
    );
}