/* eslint-disable react/prop-types */
import '../css/listItem.module.css'
import {FaTrash} from 'react-icons/fa6'

export default function TaskList({remove, list}){
  return list.map((item, index)=>
    <li key={index}>
      <p>{item}</p>
      <div>
          <input type="checkbox"/>
        <button onClick={()=>remove(index)}><FaTrash/></button>
      </div>
    </li>
  )
}
  
  

