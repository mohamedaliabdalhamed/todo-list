// ||\\ CSS //|||||||||   |||||\ TS ||\\     //||||||| ||||||\
// |||\\   //|||    |||   ||| ||\   |||\\   //|||      |||  ||\
// ||| \\ // ||| JS |||||||||  ||\  ||| \\ // |||||||| |||   |||
// |||  |||  |||    |||   ||||||||| |||  |||  |||      |||  ||/
// |||  |||  ||||||||||   |||HTML||||||  |||  |||||||| ||||||/

//set logo in header
let logo = "todo list";
let count = 0;
document.getElementById("logo").innerHTML = "";
setInterval(() => {
  if (document.getElementById("logo").innerHTML !== logo) {
    $(".logo").html(document.getElementById("logo").innerHTML + logo[count]);
  } else {
    document.getElementById("logo").innerHTML = logo[0];
    count = 0;
  }
  count++;
}, 500);

//set time in header
setInterval(() => {
  $(".time-now").html(
    (new Date().getHours() > 12
      ? new Date().getHours() - 12
      : new Date().getHours()) +
      " : " +
      new Date().getMinutes() +
      " $ " +
      new Date().getDate() +
      " / " +
      (new Date().getMonth() + 1) +
      " / " +
      new Date().getFullYear()
  );
}, 1000);

// edit section tasks
//get element by dom
let inputTask = document.getElementById("task");
let addTask = document.getElementById("add-task");

//focus in input task
window.onload = () => {
  inputTask.focus();
};

let form = document.getElementById("form");
form.onclick = () => {
  form.style.transform = "scale(1.1)";
};
//  creat array and add tasks in local storage
let allTasks = [];
if (localStorage.getItem("tasks")) {
  allTasks = JSON.parse(localStorage.getItem("tasks"));
}

//re set tasks in local storage in onload thid bage
setBoxTasks();

// add task click
addTask.addEventListener("click", () => {
  if (inputTask.value !== "") {
    if (/[ا-يa-zA-Z]+/.test(inputTask.value)) {
      //add new task in array all task and local storage
      addNewTask();
      // add to box tasks this tasks
      setBoxTasks();
      // clear input
      inputTask.value = "";
      inputTask.focus();
      Swal.fire({
        position: "top",
        icon: "success",
        title: "ok",
        showConfirmButton: false,
        timer: 800,
      });
    } else {
      inputTask.value = "";
      Swal.fire("writ word only !");
      inputTask.focus();
    }
  } else {
    Swal.fire("the task is empty !");
  }
});

//add new task in array all task and local storage
function addNewTask() {
  let task = {
    id: new Date(),
    value: inputTask.value,
    date:
      new Date().getDate() +
      " / " +
      (new Date().getMonth() + 1) +
      " / " +
      new Date().getFullYear(),
    story: false,
  };

  allTasks.push(task);

  let taskString = JSON.stringify(allTasks);

  localStorage.setItem("tasks", taskString);
}

// add to box tasks this tasks
function setBoxTasks() {
  let taskBox = document.getElementById("task-box");
  taskBox.innerHTML = "";
  if (localStorage.getItem("tasks")) {
    allTasks.forEach((e) => {
      taskBox.innerHTML =
        taskBox.innerHTML +
        `
        <div class="task" id="${e.id}">
            <div class="task-value">${e.value}</div>
            <div class="task-detals">
                <div class="date-now">${e.date}</div>
                <div class="btn-task">
                    <button class="edite">edite</button>
                    <button class="remove">delete</button>
                </div>
            </div>
        </div>
        `;
    });
  } else {
    taskBox.innerHTML = "not task now";
  }
}
// delete button
document.addEventListener("click", (e) => {
  if (e.target !== form) {
    form.style.transform = "scale(1)";
  }
  //  enter the button remove
  if (e.target.classList.contains("remove")) {
    // get id task delete
    let idTaskDelete = e.target.parentElement.parentElement.parentElement.id;

    // remove element in the page
    e.target.parentElement.parentElement.parentElement.remove();

    // delete element in the array
    allTasks = allTasks.filter((e) => e.id != idTaskDelete);

    // set new array in the local storage
    let taskString = JSON.stringify(allTasks);
    localStorage.setItem("tasks", taskString);
  }

  // enter the button edite
  if (e.target.classList.contains("edite")) {
    let taskText =
      e.target.parentElement.parentElement.previousElementSibling.textContent;
    inputTask.value = taskText;
    let idTaskDelete = e.target.parentElement.parentElement.parentElement.id;
    // delete element in the array
    allTasks = allTasks.filter((e) => e.id != idTaskDelete);

    // set new array in the local storage
    let taskString = JSON.stringify(allTasks);
    localStorage.setItem("tasks", taskString);
  }
});
