import { useEffect, useState } from 'react'
import MeetUpList from '../../components/meetup/MeetUpList'
import { meetUpObj } from '../../components/meetup/meetUpTypes'

const data = [
  {
    title: 'a first meetup ',
    address: 'this is our first meetup address',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    title: 'second meet up ',
    address: 'this is our second meetup address',
    id: 2,
    image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    title: 'third meet up ',
    address: 'this is our third meetup address',
    id: 3,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
]

type meetUpProps = {
  meetups: meetUpObj[]
}

const MeetUp = (props: meetUpProps) => {
  const [meetupData, setMeetupData] = useState<meetUpObj[]>([])
  console.log(props)
  //   useEffect(() => {
  //     setMeetupData(props.meetups)
  //   }, [])

  return <MeetUpList items={props.meetups} />
}

export async function getStaticProps() {
  return {
    props: {
      meetups: data,
    },
  }
}
export default MeetUp
