import React from 'react'
import MeetUpDetail from '../../components/meetup/MeetUpDetail'

const data = {
  title: 'a first meetup ',
  address: 'this is our first meetup address',
  id: 1,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatum beatae animi repellendus ducimus natus sequi tempore dicta, quos, alias quisquam facilis illo eligendi, assumenda temporibus pariatur? Ut, laboriosam? Enim.',
}
const MeetUpDetailPage = () => {
  return <MeetUpDetail title={data.title} address={data.address} image={data.image} description={data.description} />
}

export default MeetUpDetailPage
