import { useEffect, useState } from 'react'

import MeetUpList from '../../components/meetup/MeetUpList'
import { meetUpObj } from '../../components/meetup/meetUpTypes'
import { supabase } from '../../helpers/supabaseClient'

type meetUpProps = {
  meetups: meetUpObj[]
}

const MeetUp = (props: meetUpProps) => {
  // const [meetupData, setMeetupData] = useState<meetUpObj[]>([])

  return <>{props.meetups.length ? <MeetUpList items={props.meetups} /> : <p>not found</p>}</>
}

export async function getStaticProps() {
  try {
    const response = await supabase.from('meetup').select('*')
    const data = response.data
    return {
      props: {
        meetups: data,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}
export default MeetUp
