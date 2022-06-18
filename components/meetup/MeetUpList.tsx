import MeetUpItem from './MeetUpItem'
import { meetUpObj } from './meetUpTypes'

type meetUPProps = {
  items: meetUpObj[]
}

const MeetUpList = (props: meetUPProps) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <MeetUpItem title={item.title} address={item.address} id={item.id} image={item.image} key={item.id} />
      })}
    </ul>
  )
}

export default MeetUpList
