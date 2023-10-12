import { useEffect, useState } from 'react'
import './App.css'

function useData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://rickandmortyapi.com/api/character/?name"
      )
      const datos = await res.json();
      setData(datos)
    }
    getData();
  }, [])
  
  const saludar = () => alert("Hola Mundo")
  return {data, saludar};
}

function App() {
  const { data, saludar } = useData()
  console.log(data)
  console.log(saludar);
  return <></>
}

export default App