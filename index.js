document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const taskDescription = document.querySelector('#new-task-description')
  const taskList = document.querySelector('#tasks');



  const handleSubmit = (e) => {
    event.preventDefault();
    const task = taskDescription.value;
    const fullListItem = document.createElement('div')
    const listItem = document.createElement('li');
    const btn = document.createElement('button');
    const deleteTask = () => {
      console.log("Y")
    }
    
   

    listItem.innerText = task;
    btn.innerText = 'X'

    btn.addEventListener('click', (e) => fullListItem.remove())
    fullListItem.append(listItem, btn);

    taskList.appendChild(fullListItem)

    e.target.reset();

  }



  form.addEventListener('submit', handleSubmit)







});

