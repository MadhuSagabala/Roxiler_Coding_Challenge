import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

export default function BasicTable() {
  const [data,setData] =useState([]);
  const [search ,setSearch] =useState([]);
  const [newdata, setNewdata]=useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json())
    .then(json=>setData(json))
  },[])
  return (
    <div>
    <div style={{width:"60%" }}>
        <h3>ToDoS</h3>
       <div style={{float:"right" ,marginTop:"-40px", marginRight:"40px"}}><input type="text" placeholder='Search... ' value={search} onChange={(e)=>setSearch(e.target.value) } style={{width:"110%",height:"30px",borderRadius:"30px" ,border:"3px solid"}}></input></div>
       <br />
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 ,border: " 3px solid" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><h3>ToDo ID</h3></TableCell>
            <TableCell align="right"><h3>Title</h3></TableCell>
            <TableCell align="right"><h3>Status</h3></TableCell>
            <TableCell align="right"><h3>Action</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.filter((row=>row.title.includes(search))).map((row) => (
            <TableRow 
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0    } }}
            >
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.completed ?<p>Completed</p>:<p>Incompleted</p>}</TableCell>
              <TableCell align="right" ><button onClick={() =>setNewdata(row)} style={{width:"90px",height:"40px"}}> View User </button></TableCell>
            </TableRow >
                
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  
</div>

    <div style={{float:"right",width:"35%",marginTop:"-1090%"}}>
    <h2>User Details</h2>
    {
    
      <table style={{border:"2px solid",}}>
      
        <h3>ToDo Id : {newdata.id}</h3>
        <h3>ToDo Title : {newdata.title}</h3>
        <h3>User Id : {newdata.userId}</h3>
        <h3>Name : Darek </h3>
        <h3>Email : Darek@gmail.com</h3>
      </table>
    }
    </div>

    </div>
  );
}
