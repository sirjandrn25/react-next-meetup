import { useEffect } from 'react'
import { supabase } from '../helpers/supabaseClient'

const HomePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await supabase.from('meetup').select('*')
      console.log(data.data)
    }
    fetchData()
  }, [])
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  return (
    <>
      <h1>meet up details</h1>

      <img src='https://picsum.photos/200/300' alt='' />
    </>
  )
}

export default HomePage
