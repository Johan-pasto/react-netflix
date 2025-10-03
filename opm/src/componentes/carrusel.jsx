import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import  './styles/module.css'


export default function App() {
  const [index, setIndex] = useState(0)
  const [imagenes,SetImagenes]=useState([])
  const [pages,setPages]=useState([])

  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(20%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-20%,0,0)' },
    config:{tension: 170, friction: 26}
  })
  useEffect(()=>{
    const IP=async ()=>{
    try{
      const res = await fetch('http://localhost:5000/obtener')
      const datos=await res.json()
      SetImagenes(datos)
      const CI=datos.map(comino=>(style)=>(
        <animated.div style={style}>
          <img src={comino.imagen} alt={comino.titulo} style={{height:'auto'}}/>
        </animated.div>
      ))
      setPages(CI)
    }
    catch(err){
      console.error(err)
    }
  }
  IP()
  },[])


  useEffect(() => {
    transRef.start()
  }, [index,transRef])

  useEffect(()=>{
    if(pages.length>0){
      const intervalo=setInterval(()=>{
      setIndex(prev=>(prev+1)%pages.length)
    },3000)
    return ()=>clearInterval(intervalo)
    }
  },[pages.length])
  return (
    <div  className='imagenes'>
      {transitions((style, i) => {
        const Page = pages[i]
        if(!Page) return null
        return <Page key={i} style={style} />
      })}
    </div>
  )
}
