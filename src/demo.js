
import MaterialTable from 'material-table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function MaterialTableDemo() {


  const api = axios.create({
    baseURL: `http://localhost:8083/Payer`
  })

  var columns = [
    {title: "id", field: "id", hidden: true},
    { title: 'Bin', field: 'bin' },
    { title: 'PCN', field: 'pcn' },
    { title: 'pGroup', field: 'pGroup' },
    {
      title: 'remark',
      field: 'remark'
    },
  ]
  const [data, setData] = useState([]); //table data
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])


  useEffect(() => { 
    api.get("/getAllPayer")
        .then(res => {               
            setData(res.data)
         })
         .catch(error=>{
             console.log("Error")
         })
  }, [])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'http://localhost:8083/Payer/getAllPayer',
  //     );
  //     setState((prevState) => {
  //       const data = [...prevState.data];
  //       const sweeterArray = result.data.map(rr => {
  //         data.push(rr);
  //     })
  //       return { ...prevState, data };
  //     });
    
  //   };
 
  //   fetchData();
  // }, []);
 

const handleRowAdd = (newData, resolve) => {
  //validation
  
  api.post("/savePayer", newData)
      .then(res => {
        let dataToAdd = [...data];
        
        console.log("np",res)
        newData.id=res.data.id;
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
        setErrorMessages([])
        setIserror(false)
     })
     .catch(error => {
        setErrorMessages(["Cannot add data. Server error!"])
        setIserror(true)
        resolve()
      })
  }

  const handleRowDelete = (oldData, resolve) => {
    
    api.delete("/deletePayer/"+oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
        setErrorMessages(["Delete failed! Server error"])
        setIserror(true)
        resolve()
      })
  }



  const handleRowUpdate = (newData, oldData, resolve) => {
    //validation
   
      api.patch("/updatePayer/"+newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        setIserror(false)
        setErrorMessages([])
      })
      .catch(error => {
        setErrorMessages(["Update failed! Server error"])
        setIserror(true)
        resolve()
        
      })
    }
    
  






  return (
    <MaterialTable
      title="Payer Detail"
      columns={columns}
      data={data}
      options={{
        search: true
      }}
      editable={{

        onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                      handleRowUpdate(newData, oldData, resolve);
                      
                  }),
        onRowAdd: (newData)  => new Promise((resolve) => {
          handleRowAdd(newData, resolve)
        }),
        onRowDelete: (oldData) =>
        new Promise((resolve) => {
          handleRowDelete(oldData, resolve)
        }),
      }}
    />
  );
}
