import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/storeHooks'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <>
      <span className='logo'>😎</span>
    </>
  )
}

export default App
