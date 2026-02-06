let input = document.querySelector(".user-input");
let addBtn = document.querySelector(".addBtn");
let list = document.querySelector(".list-container");

// check in local storage if any todos with key tasks are there if yes store in variable if not then assign empty array.
const saved = localStorage.getItem("tasks");
const todoList = saved ? JSON.parse(saved) : [];
// You are loading from localStorage we need to call render() and if dont UI stays empty even though array has data.
render();

// adding task on pressing ENTER key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();

  // preventing empty tasks
  if (taskText === "") {
    input.focus();
    alert("Enter some text");
    return; //stops execution
  }

  console.log(taskText);
  // adding task to array
  todoList.push({ text: taskText, completed: false });
  //after adding task to array we will call render function to update dom
  console.log(todoList);

  render();
  saveTasks();
  // clear input
  input.value = "";
});

// toggleTaskComplete function
function toggleTaskComplete(index) {
  todoList[index].completed = !todoList[index].completed;
  // here you are toggling but you need to update the UI also i.e why render call here
  render();
  saveTasks();
  // console.log(todoList);
}

// delete task
const deleteTask = function (index) {
  todoList.splice(index, 1);
  render();
  saveTasks();
};

// edit task
const editTask = function (index) {
  // task to edit should come on main input field and it should be gone
  input.value = todoList[index].text;
  input.focus();
  todoList.splice(index, 1);
  render();
  saveTasks();
};

// render function = Take whatever is in my array → show it on the screen.
function render() {
  // render() = rebuild UI from scratch

  // as UI should be rebuilt from the array every time and Not “add one more li to whatever is already there”.
  //i.e why clear list content
  // Because we will redraw everything from scratch based on latest array.
  // Even if list already has items — wipe → rebuild.

  list.innerHTML = "";
  // looping through array
  todoList.forEach((taskelement, index) => {
    const liEl = document.createElement("li");
    // li.textContent = taskelement;
    liEl.innerHTML =
      //     if completed = true → add class "completed"
      // else → add nothing
      `
    <div class="item">
          <div class="task  ${taskelement.completed ? "completed" : ""}">
            <input type="checkbox" class="checkbox" ${taskelement.completed ? "checked" : ""}/>
            <p class="list-item">${taskelement.text}</p>
          </div>
          <div class="icons">
            <img src="./assets/edit.png" onClick="editTask(${index})"/>
            <img src="./assets/delete.png" onClick="deleteTask(${index})"/>
          </div>
        </div>
    `;
    // to do check uncheck
    // When this task is clicked → toggle → update array → call render() again → UI refresh.
    liEl.querySelector(".task").addEventListener("click", () => {
      toggleTaskComplete(index);
    });

    // append li to list
    list.append(liEl);
  });
}

// localStorage
const saveTasks = () => {
  // JSON.stringify = used to convert JavaScript objects into a JSON string
  // store with key tasks

  localStorage.setItem("tasks", JSON.stringify(todoList));
};

// why not added li one by one and used array is bcz if need to do below things then array is a good approach as
// we dont need to read everytime from dom and we can read from array and manipulate it easily
// app grows
// features add
// delete/edit needed
// persistence needed
// multiple views needed
