import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CAT_ENDPOINT_TEXT = `https://catfact.ninja/fact`;
//const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${threeFirstWord}?size=:size&color=:color/c/s/:text?s=:size&c=:color&json=true`;
const CAT_IMG_PREFIX = ` https://cataas.com`;

function App() {
  const [fact, setFact] = useState()
  const [imgUrl , setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_TEXT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)

        const threeFirstWord = fact.split(" ", 3).join(" ")
        console.log(threeFirstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=:size&color=:color/c/s/:text?s=:size&c=:color&json=true`)
          .then(res => res.json())
          .then((response) => {
            const { url } = response
            setImgUrl(url)
           //console.log(response)
            
           })
      })
  },[])

  return (
    <main>
    <h1> App Prueba </h1>
      <p> {fact} </p> 
      <img src={` ${CAT_IMG_PREFIX}${imgUrl} `} alt="Image url cat" />
      
    </main>
  )
}

export default App
