import React, { useEffect , useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import axios from 'axios'
import { setusers, settickets } from '../reducers/stateSlice'

const CardLayout = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const group = useSelector((state) => state.states.group)
  const order = useSelector((state) => state.states.order)
  const tickets = useSelector((state) => state.states.tickets)


  useEffect(() => {
    axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers')
    .then(res => {
      dispatch(setusers(res.data.users))
      dispatch(settickets(res.data.tickets))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  

  const groupTickets = () => {
    if (group === 'status') {
      return tickets.reduce((grouped, ticket) => {
        const status = ticket.status;
        if (!grouped[status]) {
          grouped[status] = [];
        }
        grouped[status].push(ticket);
        return grouped;
      }, {});
    } else if (groupingOption === 'user') {
      return tickets.reduce((grouped, ticket) => {
        const user = ticket.user;
        if (!grouped[user]) {
          grouped[user] = [];
        }
        grouped[user].push(ticket);
        return grouped;
      }, {});
    } else if (groupingOption === 'priority') {
      return tickets.reduce((grouped, ticket) => {
        const priority = ticket.priority;
        if (!grouped[priority]) {
          grouped[priority] = [];
        }
        grouped[priority].push(ticket);
        return grouped;
      }, {});
    }
    return {};
  };

  const sortedTickets = (groupedTickets) => {
    if (order === 'priority') {
      return Object.keys(groupedTickets).sort((a, b) => b - a).reduce((sorted, key) => {
        sorted[key] = groupedTickets[key];
        return sorted;
      }, {});
    } else if (order === 'title') {
      return Object.keys(groupedTickets).reduce((sorted, key) => {
        sorted[key] = groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
        return sorted;
      }, {});
    }
    return groupedTickets;
  };

  const groupedAndSortedTickets = sortedTickets(groupTickets());
  console.log(groupedAndSortedTickets)

  return (
    <div>

    </div>
  )
}

export default CardLayout