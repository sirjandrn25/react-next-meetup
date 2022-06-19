import React from 'react'
import MeetUpDetail from '../../components/meetup/MeetUpDetail'
import { meetUpObj } from '../../components/meetup/meetUpTypes'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { supabase } from '../../helpers/supabaseClient'

const data = {
  title: 'a first meetup ',
  address: 'this is our first meetup address',
  id: 1,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum beatae animi repellendus ducimus natus sequi tempore dicta, quos, alias quisquam facilis illo eligendi, assumenda temporibus pariatur? Ut, laboriosam? Enim.',
}

type objPropType = {
  meetup: meetUpObj
  fallback?: boolean
}

const MeetUpDetailPage = (props: objPropType) => {
  const router = useRouter()
  if (router.isFallback) {
    return <p>loading .....</p>
  }
  // return <MeetUpDetail title={data.title} address={data.address} image={data.image} description={data.description} />
  return (
    <MeetUpDetail
      title={props.meetup.title}
      address={props.meetup.address}
      image={props.meetup.image}
      description={props.meetup.description}
    />
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { meetupId: '1' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const response = await supabase.from('meetup').select(`*`).match({ id: params.meetupId })
  console.log(response.data)
  // const response = await fetch(`http://localhost:4000/meetups/${params.meetupId}`)
  // const data = await response.json()

  return {
    props: {
      meetup: response.data[0]!,
    },
  }
}

export default MeetUpDetailPage
