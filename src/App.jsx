import { useEffect, useState } from 'react'
import Container from './Container';
import './App.css'

function useData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://restcountries.com/v3.1/all"
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
  return (
  <>
    <Container/>
  </>
  )
}

export default App
