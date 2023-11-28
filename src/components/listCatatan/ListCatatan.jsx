import React, { useContext, useEffect, useState } from 'react'
import { DarkProvider } from '../../context/DarkMode'
import './ListCatatan.scss'
export default function ListCatatan({search, data, setData, dataArsip, setDataArsip, showFormattedDate}) {
   const { isDarkMode } = useContext(DarkProvider)

   const deleteData = (id) => {
    if(window.confirm("Apakah anda yakin akan menghapus ?")){
      setData((val)=> val.filter((x)=> x.id !== id ))
    }
  } 

  const arsipData = (id) => {  
    const updatedList = data.filter((data) => data.id !== id);
    const archivedItem = data.find((data) => data.id === id);
    setDataArsip([...dataArsip, archivedItem]);
    setData(updatedList);
  }

  const date = new Date()
  return (
    <div className={isDarkMode ? "dark" : "wrap"}>
      <h1 className={isDarkMode ? 'darkCatatanAktif' : 'catatan-aktif'}>Catatan Aktif</h1>
        <div className='wrap-card'>
         {
            data && data.length > 0 ? (
            data
               .filter((x) => {
               return search.toLowerCase() === "" ? x : x.title.toLowerCase().includes(search.toLowerCase());
               })
               .map((item) => {
            return(         
               <div className="card">
                  <div className='card-desc' key={item.id}>
                     <h1 className={isDarkMode ? "darkJudul" : "judul"}>{item.title}</h1>
                     <p className={isDarkMode ? "darkDate" : "date"}>{showFormattedDate(date)}</p>
                     <p className={isDarkMode ? "darkCatatan" : "catatan"}>{item.body}</p>
                  </div>
                  <div className='card-button'>
                     <button className='btn-1'onClick={()=> deleteData(item.id)}>Delete</button>
                     <button className='btn-2' onClick={() => arsipData(item.id)}>Arsipkan</button>
                  </div>
               </div>
               
            )
         })) : (<p className={isDarkMode? "darkEmpety" : "lightCat"}>tidak ada catatan</p>)
      }
      </div>
   </div>
  )
}
