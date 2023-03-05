


const inputS = document.querySelector('.searchinput');
const inputA = document.querySelector('.addinput'); 

const buttonA = document.querySelector('.second button'); 
const h1 = document.querySelector('h1 span'); 

const ul = document.querySelector('ul'); 

const toDoList = [];
const everyLi = document.querySelectorAll('li');
const removeTask = (e) => { 
    
   

    e.target.parentNode.remove(); 
   
    toDoList.forEach((li,key) => {
        li.dataset.key = key;
    })
    
    let index = e.target.parentNode.dataset.key;

 

    
    toDoList.splice(index,1); 
    const everyLi = document.querySelectorAll('li');

    console.log(everyLi.length);
    h1.textContent = toDoList.length; 
    console.log(everyLi.length);
   

}

const addTask = (e) => {   
    console.log(toDoList.length + 'dasdas');
    if(toDoList.length === 10) {
        alert('Limit zadań to 10 '); 
        return;
    }
    if(inputA.value === '') return 
   

   const everyLi = document.querySelectorAll('li');   
   
    let title = inputA.value;

    const li = document.createElement('li'); 

    li.innerHTML = title + '<button></button><i class="fa-solid fa-trash-can"></i>'; 


    ul.appendChild(li); 
    toDoList.push(li); 

    toDoList.forEach((li,key) => {
        li.dataset.key = key; 
        
    })

    inputA.value = '';

    h1.textContent = everyLi.length + 1; 

    li.querySelector('button').addEventListener('click',removeTask); 
    console.log(everyLi.length);

}

const searchTask = (e) => {
    let inputSvalue = inputS.value.toLocaleLowerCase(); 

    let tasks = toDoList; 

    tasks = tasks.filter(li => li.textContent.toLocaleLowerCase().includes(inputSvalue)); 

    

    ul.textContent = '';

    tasks.forEach(li => ul.appendChild(li));
}



buttonA.addEventListener('click',addTask); 
inputS.addEventListener('input',searchTask);
