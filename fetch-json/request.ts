import axios from 'axios' 


const url = "https://jsonplaceholder.typicode.com/todos/1" 
interface Todo{
    userId:number 
    id: string 
    title: string 
    completed: boolean
}
const  logdata = (Title:string,Data:string)=>{
    console.log(`
    Title : ${Title}
    Data  : ${Data}
  
    `) 

}

axios.get(url).then(response => {
     const todo = response.data as Todo 
    logdata( 
      todo.title ,
       todo.title 
      
    )     


    

}) 