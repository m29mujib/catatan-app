import Down from '../../assets/down.png'
import Up from '../../assets/up.png'
import React, { useContext, useState } from 'react'
import './Arsip.scss'
import { DarkProvider } from '../../context/DarkMode'
const Arsip = ({data, setData, dataArsip, setDataArsip}) => {
  const [isDropDown, setIsDropDown] = useState(false)

  const { isDarkMode } = useContext(DarkProvider)

  const deleteData = (id) => {
    if(window.confirm("Apakah anda yakin akan menghapus ?")){
      setDataArsip((val)=> val.filter((x)=> {
            return x.id !== id
         }))
    }
  }
 
  const pulihData = (id) => {
    const updatedData = dataArsip.filter((item) => item.id !== id);
    const itemToRestore = dataArsip.find((item) => item.id === id);
    setDataArsip(updatedData);
    setData([...data, itemToRestore]);
};

  return (
        <div className={isDarkMode ? "darkArsip" : "contain"}>
          <p className='arsip'>{isDropDown? "tutup arsip" : "buka arsip"}</p>
          <button onClick={() => setIsDropDown((prev) => !prev)} className='button'><img src={isDropDown? Up : Down} className='icon'/></button>
              <div className="wrap-card">
                {
                  isDropDown&&
                  dataArsip && dataArsip.length > 0 ? (
                  dataArsip.map((item) => {
                      return(
                        <div className="card">
                            <div className='card-desc'>
                              <h1 className={isDarkMode ? "darkJudul" : "judul"}>{item.title}</h1>
                              <p className={isDarkMode ? "darkDate" : "date"}>{item.createdAt}</p>
                              <p className={isDarkMode ? "darkCatatan" : "catatan"}>{item.body}</p>
                            </div>
                            <div className='card-button'>
                              <button className='btn-1'onClick={()=> deleteData(item.id)}>Delete</button>
                              <button className='btn-2' onClick={() => pulihData(item.id)}>Pindahkan</button>
                            </div>
                        </div>
                      ) ;  
                    })     
                  ) : (<p className={isDarkMode? "darkArsipKosong" : "light"}>{isDropDown ? "Data arsip kosong" : ""}</p>)
               }
              </div>          
        </div>
 )}
export default Arsip
