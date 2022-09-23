import axios from 'axios' 


const url = "https://jsonplaceholder.typicode.com/todos/1" 
interface Todo{
    userId:number 
    id: string 
    title: string 
    completed: boolean
}


axios.get(url).then(response => {
     const todo = response.data as Todo 
 


    console.log(`
    Title : ${todo.title}
    Data  : ${todo.id}
    userid  : ${todo.userId}
    Finished : ${todo.completed}
    `) 

}) 