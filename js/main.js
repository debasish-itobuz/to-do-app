const todoContainer = document.getElementsByClassName('todo-container')[0];
const inputBox = document.getElementsByClassName('input')[0];
const addBtn = document.getElementById('add-btn');


addBtn.addEventListener("click", () => {
    addTask();
})

inputBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})

//print tasks
function addTask() {
    const inputVal = inputBox.value.trim();
    if (check(inputVal)) {
        todoContainer.innerHTML +=
            `<div class=" d-flex justify-content-between taskBox p-3 px-5 " data-id=${Date.now()}> 
            <div class="fs-3 px-2 input-text ">${inputVal}</div>
            <div class="d-flex gap-3">
                <i class="fa-solid fa-check border border-2 bg-body-secondary p-2 fs-3 ms-3 completeTask"></i>
                <i class="fa-solid fa-trash border border-2 bg-body-secondary p-2 fs-3  deleteTask" data-id=${Date.now()}></i>
            </div>
        </div>`;

        /* data-id=${Date.now()} not needed */

        inputBox.value = "";

        todoContainer.querySelectorAll(".deleteTask").forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove();
                // console.log(e.target.parentElement.parentElement);
            })
        })

        todoContainer.querySelectorAll(".completeTask").forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.firstElementChild.classList.toggle("line-through")
                // console.log(e.target.parentElement.parentElement.firstElementChild.classList);
            })
        })
    }
}

function check(inputVal) {
    if (inputVal === "") {
        inputBox.value = "";
        return false;
    }
    return true;
}

