import { useState } from "react"
import {btn} from '../css/NewTask.module.css'
import TaskList from "./TaskList"

export default function NewTask(){

  const [task, setTask] = useState()
  const [list, setList] = useState([])

  function post(e){
    e.preventDefault()
    
    setList([...list, task])
    setTask("")
  }

  function remove(key){
    let newlist = list.filter((item, index)=> index !== key)
    setList(newlist)
  }

  return (
    <section>
      <form onSubmit={(e) => post(e)}>
        <input onChange={(e) => setTask(e.target.value)} type="text" value={task}/>
        <input className={btn} type="submit" value="New"/>
      </form>
        <TaskList teste={setTask} list={list} remove={remove}/>
    </section>
  )
}