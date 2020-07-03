import {useState, useEffect} from 'react'
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me'

const useGetData = () => {
  //mydata: estado
  //setData: Funcion que actualiza nuestro estado
  //useState recibe el estado Inicial
  const [mydata, setData] = useState([])

  //useEffect se encarga de hacer la peticion
  useEffect(()=> {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  //Retornar lo que la peticion resuelva
  return mydata
}

export default useGetData

