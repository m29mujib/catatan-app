import React, {  useContext, useState } from 'react'
import './Main.scss'
import { v4 as uuidv4 } from 'uuid';
import { DarkProvider } from '../../context/DarkMode'

export default function Main({data, setData}) {
   const [ values, setValues ] = useState([
    {
      title: "",
      createdAt: "",
      archived: false,
      body: ""
    }
  ])
  const { isDarkMode } = useContext(DarkProvider)
  const maxTitleLength = 20;
  const handleChange = (e) => {

    const { name, value } = e.target;
      if (value.length <= maxTitleLength) {
        setValues({
            ...values,
            [name]: value, id: uuidv4()
          })   
      } else {
        alert("input tidak boleh melebihi 20 karakter")
      }
   }

   const tambahList = () => {  
      setData([
        ...data, values
   ])
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    tambahList()

    setValues({
      title: "",
      body: "",
    })
  }
  const isDisabled = values.length <= 1;
  return (
    <div className={isDarkMode? "darkMain" : "main"}>
      <h1 className={isDarkMode ? 'dark-catatan' : 'catatan-aktif'}>Catatan</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='title'>
           <label htmlFor="">Title :</label>
           <input type="text" placeholder='ini adalah judul..' name='title' value={values.title} onChange={handleChange}/>
        </div>
        <div className='body'>
          <label htmlFor="">body :</label>
          <textarea name="body" label="body" id="" cols="30" rows="10" placeholder='tuliskan catatanmu disini' value={values.body} onChange={handleChange}></textarea>
        </div>  
         <button type='submit' disabled={isDisabled}>Buat</button>
      </form>
      {/* <ListCatatan data={data} searchData={search}/> */}
    </div>
  )
}
