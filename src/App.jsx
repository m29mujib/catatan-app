
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import ListCatatan from './components/listCatatan/ListCatatan'
import './App.scss'
import Arsip from './components/arsip/Arsip'
import { useState } from 'react'
import { getInitialData, showFormattedDate } from '../utils/index';
function App() {
     const [dataArsip, setDataArsip] = useState([])
     const [data, setData] = useState(getInitialData)
     const [search, setSearch] = useState("")
     const onSearchData = (e) => {
      setSearch(e.target.value)
   }

  return (
    <div>
      <Navbar onSearchData={onSearchData}/>
      <Main data={data} setData={setData}/>
      <ListCatatan search={search} data={data} setData={setData} dataArsip={dataArsip} setDataArsip={setDataArsip} showFormattedDate={showFormattedDate}/>
      <Arsip data={data} setData={setData} dataArsip={dataArsip} setDataArsip={setDataArsip} showFormattedDate={showFormattedDate}/>
    </div>
  )
}

export default App
