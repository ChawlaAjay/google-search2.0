import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useResultContext } from '../contexts/ResultContextProvider'
import  Loading  from './Loading'
const Results = () => {
  const { results, isLoading, getResult, search } = useResultContext()
  const location = useLocation() // images, news, videos
  
  if (isLoading) return <Loading />
  console.log(location.pathname)
  switch (location.pathname) {
    case '/search':
      return 'SEARCH'
  
    default:
      return 'ERROR'
  }
  
}

export default Results
