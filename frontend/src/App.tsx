import { useEffect } from 'react'
import './App.css'
import { useAppDispatch } from './hooks/storeHooks'
import { initFetch } from './store/initThunks'
import { Drivers } from './components/Drivers'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initFetch())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <span className='logo'>🚗 😎 🚗</span>
      <Drivers />
    </>
  )
}

export default App
