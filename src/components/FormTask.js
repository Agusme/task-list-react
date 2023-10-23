import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";

const FormTask = () => {
//se define los estados
let tasksFormLocalStorage = JSON.parse(localStorage.getItem('tasklist')) || [];
const [task, setTask] = useState('')
const [tasks, setTasks] = useState(tasksFormLocalStorage)

//ciclo de vida del componente se usa el hook useEffect

/* useEffect(()=>{
//AQUI SE EJECUTA EL MONTAJE COMO LA ACTUALIZACION
console.log("ejecutando el ciclo de vida del componente formtask")

})
 */
//para que se monte una sola vez
/* useEffect(()=>{

},[] ) */

useEffect(()=>{
//aqui se eceuta tanto el montaje como actualizacion pero dependiendo de uno o varios states

//console.log('ejecutando el ciclo de vida del componente formtask')
localStorage.setItem('tasklist', JSON.stringify(tasks))
}, [tasks]);



console.log(task)
const handleSubmit =(e)=>{
    //para evitar recargar la pagina
    e.preventDefault()
    //haria task.push pero eso en react no se puede
    //se clona el array y se agrega el ultimo elemento
    setTasks([...tasks, task])
    //borrar el formulario
    setTask('')
console.log(e)
}

const deleteTask = (taskName)=>{
  let filterArray = tasks.filter(task => task !== taskName)
  setTasks(filterArray)
  }
  


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-center">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Enter a task"
            onChange={(e) => {
              setTask(e.target.value);
            }} value={task}
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
      <TaskList taskArray ={tasks} deleteTask={deleteTask}></TaskList>

      </section>
    </>
  );
};

export default FormTask;
