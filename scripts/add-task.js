let selectedContacts = [];
let selectedPrio = "medium";
let subtasksArray = [];

function addTaskOnInit() {
  sideNavigation();
  onloadFunction();
  setMedium();
  subtaskInput();
  addTaskClearTask();
  getLoggedInUserData();
  initializeKeyDown();
  checkAndLoadArraysToLocalStorage();
}

/**
 * clears the list from all subtasks, clears the list of all assigned users
 */
function addTaskClearTask() {
  let list = document.getElementById("subtasksList");
  let assignedList = document.getElementById("selectedUsers");
  document.getElementById("urgent-btn").classList.remove("urgent");
  document.getElementById("urgent-btn").classList.remove("active");
  setMedium();
  document.getElementById("medium-btn").classList.add("active");
  document.getElementById("low-btn").classList.remove("low");
  document.getElementById("low-btn").classList.remove("active");
  selectedContacts = [];
  subtasksArray = [];
  selectedPrio = "medium";
  enableInputAndButton();
  list.innerHTML = "";
  assignedList.innerHTML = "";
}

/**
 * Goes back to the add task step in the overlay.
 * @param {Event} event - The event object.
 */
function goBackToAddTask(event) {
  document.getElementById("addTaskOverlayNextStep").style.display = "none";
  document.body.style.overflow = "auto";
  event.preventDefault();
}

/**
 * Builds a task object from form input values.
 * @param {string} state - The state of the task.
 * @returns {Object} - The task object in JSON format.
 */
function buildTask(state) {
  let taskTitle = document.getElementById("task-title").value;
  let taskDate = document.getElementById("task-due-date").value;
  let taskPrio = selectedPrio;
  let taskDescription = document.getElementById("task-description").value;
  let taskCategory = document.getElementById("task-category").value;
  let taskSubtasks = subtasksArray;
  let taskState = state;
  let taskAssigned = selectedContacts;
  return taskToJSON(taskTitle, taskDate, taskPrio, taskDescription, taskCategory, taskSubtasks, taskAssigned, taskState);
}

/**
 * Posts a task to the local storage.
 * Combines buildTask and postTask into a single function call.
 * @param {string} state - The state of the task.
 */
function postTask(state, path = "tasks") {
  let task = buildTask(state);
  let tasks = JSON.parse(localStorage.getItem(path)) || [];
  tasks.push(task);
  localStorage.setItem(path, JSON.stringify(tasks));
}

/**
 * Builds a task object from form input values for the board.
 * @param {string} state - The state of the task.
 * @returns {Object} - The task object in JSON format.
 */
function buildTask(state) {
  let taskTitle = document.getElementById("task-title").value;
  let taskDate = document.getElementById("task-due-date").value;
  let taskPrio = selectedPrio;
  let taskDescription = document.getElementById("task-description").value;
  let taskCategory = document.getElementById("task-category").value;
  let taskSubtasks = subtasksArray;
  let taskState = state;
  let taskAssigned = selectedContacts;
  return taskToJSON(taskTitle, taskDate, taskPrio, taskDescription, taskCategory, taskSubtasks, taskAssigned, taskState);
}

/**
 * Handles the input event for the subtask input field.
 */
function subtaskInput() {
  const input = document.getElementById("task-subtasks");
  const iconsContainer = document.getElementById("iconsContainer");
  const addSubtaskBtn = document.getElementById("add-subtask-btn");
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      iconsContainer.style.visibility = "visible";
      addSubtaskBtn.style.visibility = "hidden";
    } else {
      iconsContainer.style.visibility = "hidden";
      addSubtaskBtn.style.visibility = "visible";
    }
  });
}

/**
 * Clears the subtask input field and updates the UI accordingly.
 */
function clearSubtaskInput() {
  const input = document.getElementById("task-subtasks");
  const clearIcon = document.getElementById("clearIcon");
  const iconsContainer = document.getElementById("iconsContainer");
  const addSubtaskBtn = document.getElementById("add-subtask-btn");
  clearIcon.addEventListener("click", () => {
    input.value = "";
    input.focus();
    iconsContainer.style.visibility = "hidden";
    addSubtaskBtn.style.visibility = "visible";
  });
}

/**
 * Adds a new subtask to the subtasks array and updates the UI.
 */
function pushSubtaskArray() {
  let subTaskInput = document.getElementById("task-subtasks");
  let content = subTaskInput.value.trim();
  console.log(subtasksArray);

  if (subtasksArray.length < 4 && content !== "") {
    let newSubtask = {
      id: generateUniqueID(),
      content: content,
      status: "open",
    };
    subtasksArray.push(newSubtask);
    subTaskInput.value = "";
    renderAddTaskSubtaskList();
    if (subtasksArray.length >= 4) {
      disableInputAndButton();
    }
  } else if (subtasksArray.length >= 4) {
    disableInputAndButton();
  }
}

/**
 * Generates a unique ID for subtasks.
 */
function generateUniqueID() {
  return subtasksArray.length ? Math.max(...subtasksArray.map((subtask) => subtask.id)) + 1 : 1;
}

function renderAddTaskSubtaskList(ticketID) {
  let target = document.getElementById("subtasksList");
  target.innerHTML = "";
  for (let i = 0; i < subtasksArray.length; i++) {
    let itemID = subtasksArray[i].id;
    let itemContent = subtasksArray[i].content;
    target.innerHTML += renderSubtaskItem(itemID, itemContent, ticketID, i);
  }
}

/**
 * Disables the subtask input field and add button.
 */
function disableInputAndButton() {
  let subtaskInput = document.getElementById("task-subtasks");
  let addButton = document.getElementById("add-subtask-btn");
  subtaskInput.placeholder = "maximum 4 Subtasks reached";
  subtaskInput.disabled = true;
  addButton.disabled = true;
  subtaskInput.classList.add("disabled");
  addButton.classList.add("disabled");
}

/**
 * Enables the subtask input field and add button.
 */
function enableInputAndButton() {
  let subtaskInput = document.getElementById("task-subtasks");
  let addButton = document.getElementById("add-subtask-btn");
  subtaskInput.placeholder = "Add new subtask";
  subtaskInput.disabled = false;
  addButton.disabled = false;
  subtaskInput.classList.remove("disabled");
  addButton.classList.remove("disabled");
}

/**
 * Renders the list of subtasks.
 */
function renderSubtaskList(ticketID) {
  let target = document.getElementById("subtasksList");
  target.innerHTML = "";
  localStorage.getItem("subtasks");
  for (let i = 0; i < subtasksArray.length; i++) {
    if (subtasksArray.length == 0) {
      break;
    } else {
      let itemID = subtasksArray[i].id;
      let itemContent = subtasksArray[i].content;
      target.innerHTML += renderSubtaskItem(itemID, itemContent, ticketID, i);
      console.log("renderSubtaskList:", ticketID);
      console.log("index", i);
    }
  }
}

/**
 * Handles the edit click event for a subtask.
 * @param {HTMLElement} target - The target element that triggered the event.
 */
//! Nur zur Sicherheit auskommentiert. Kann gelöscht werden, wenn alles klappt.
// function handleEditClick(target) {
//   const subtaskItem = target.closest(".subtask-item");
//   const contentWrapper = subtaskItem.querySelector(".subtask-content-wrapper");
//   const contentSpan = subtaskItem.querySelector(".subtask-content");
//   subtaskItem.classList.add("editing");
//   const inputContainer = document.createElement("div");
//   inputContainer.classList.add("input-container");
//   const input = createInputField(contentSpan.textContent);
//   const deleteIcon = createIcon("delete-icon", "./assets/icons/subtask-delete.png");
//   const saveIcon = createIcon("save-icon", "./assets/icons/subtask-save.png");
//   inputContainer.appendChild(input);
//   inputContainer.appendChild(deleteIcon);
//   inputContainer.appendChild(saveIcon);
//   contentWrapper.innerHTML = "";
//   contentWrapper.appendChild(inputContainer);
//   const actions = subtaskItem.querySelector(".subtask-actions");
//   actions.style.visibility = "hidden";
// }

/**
 * Creates an icon element.
 * @param {string} className - The class name for the icon.
 * @param {string} src - The source URL for the icon image.
 * @returns {HTMLElement} - The created icon element.
 */
function createIcon(className, src) {
  const icon = document.createElement("img");
  icon.setAttribute("src", src);
  icon.setAttribute("alt", className);
  icon.classList.add(className);
  return icon;
}

/**
 * Creates an input field element for editing a subtask.
 * @param {string} currentText - The current text of the subtask.
 * @returns {HTMLElement} - The created input field element.
 */
function createInputField(currentText) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.classList.add("subtask-input");
  return input;
}

/**
 * Edits an entry in the subtasks array.
 * @param {number} subtaskID - The ID of the subtask to edit.
 * @param {string} updatedText - The updated text for the subtask.
 */
function editArrayEntry(subtaskID, updatedText) {
  const subtask = subtasksArray.find((item) => item.id === subtaskID);
  if (subtask) {
    subtask.content = updatedText;
  }
}

/**
 * Deletes an entry from the subtasks array.
 * @param {number} subtaskID - The ID of the subtask to delete.
 */
function deleteArrayEntry(subtaskID) {
  const index = subtasksArray.findIndex((item) => item.id === subtaskID);
  if (index !== -1) {
    subtasksArray.splice(index, 1);
  }
}

/**
 * Handles the save click event for a subtask.
 * @param {HTMLElement} target - The target element that triggered the event.
 */
function handleSaveClick(target) {
  const subtaskItem = target.closest(".subtask-item");
  const targetID = subtaskItem.id;
  const numericID = parseInt(targetID.split("_")[1], 10);
  const contentWrapper = subtaskItem.querySelector(".subtask-content-wrapper");
  const inputContainer = subtaskItem.querySelector(".input-container");
  const input = inputContainer.querySelector(".subtask-input");
  const updatedText = input.value;
  contentWrapper.innerHTML = saveSubtaskItem(updatedText);
  const actions = subtaskItem.querySelector(".subtask-actions");
  actions.style.visibility = "visible";
  inputContainer.remove();
  subtaskItem.classList.remove("editing");
  editArrayEntry(numericID, updatedText);
}

/**
 * Handles the cancel click event for a subtask.
 * @param {HTMLElement} target - The target element that triggered the event.
 */
function handleCancelClick(target) {
  const subtaskItem = target.closest(".subtask-item");
  const contentWrapper = subtaskItem.querySelector(".subtask-content-wrapper");
  const inputContainer = subtaskItem.querySelector(".input-container");
  const contentSpan = subtaskItem.querySelector(".subtask-content");
  contentWrapper.innerHTML = cancelSubtaskItem(contentSpan.textContent);
  const actions = subtaskItem.querySelector(".subtask-actions");
  actions.style.visibility = "visible";
  inputContainer.remove();
}

/**
 * Generates a unique ID based on the current timestamp and random values.
 * @returns {string} - The generated unique ID.
 */
function generateUniqueID() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
}

/**
 * Shows the next step overlay for adding a task.
 * @param {Event} event - The event object.
 */
function showAddTaskOverlayNextStep(event) {
  event.preventDefault();
  document.getElementById("addTaskOverlayNextStep").style.display = "flex";
  document.body.style.overflow = "hidden";
}

/**
 * Checks the validity of the form fields and enables/disables the create task button accordingly.
 */
function checkFormValidity() {
  let taskTitle = document.getElementById("task-title").value;
  let taskDueDate = document.getElementById("task-due-date").value;
  let taskCategory = document.getElementById("task-category").value;
  let createTaskButton = document.getElementById("createTaskButton");
  if (taskTitle && taskDueDate && taskCategory) {
    createTaskButton.disabled = false;
  } else {
    createTaskButton.disabled = true;
  }
}

/**
 * Handles the edit click event for a subtask.
 * @param {HTMLElement} target - The target element that triggered the event.
 */
function handleEditClick(target) {
  const subtaskItem = target.closest(".subtask-item");
  const contentWrapper = subtaskItem.querySelector(".subtask-content-wrapper");
  const contentSpan = subtaskItem.querySelector(".subtask-content");
  subtaskItem.classList.add("editing");
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  const input = createInputField(contentSpan.textContent);
  const deleteIcon = createIcon("delete-icon", "./assets/icons/subtask-delete.png");
  const saveIcon = createIcon("save-icon", "./assets/icons/subtask-save.png");
  inputContainer.appendChild(input);
  inputContainer.appendChild(deleteIcon);
  inputContainer.appendChild(saveIcon);
  contentWrapper.innerHTML = "";
  contentWrapper.appendChild(inputContainer);
  const actions = subtaskItem.querySelector(".subtask-actions");
  actions.style.visibility = "hidden";
}

function handleDeleteClick(event, ticketID, index) {
  const subtaskItem = getClosestSubtaskItem(event);

  if (ticketID === "undefined") {
    deleteSubtaskLocally(subtaskItem, index);
  } else {
    deleteSubtaskFromStorage(subtaskItem, ticketID);
  }
}

function getClosestSubtaskItem(event) {
  return event.target.closest(".subtask-item");
}

function deleteSubtaskLocally(subtaskItem, index) {
  if (subtaskItem) subtaskItem.remove();
  subtasksArray.splice(index, 1);
  reindexSubtasks();
  if (subtasksArray.length < 4) enableInputAndButton();
}

function deleteSubtaskFromStorage(subtaskItem, ticketID) {
  if (!subtaskItem) return;
  const numericID = getNumericID(subtaskItem);
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks.find((task) => task.id === ticketID);
  if (!task || !task.subtasks) return;
  task.subtasks = task.subtasks.filter((subtask) => parseInt(subtask.id, 10) !== numericID);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  subtasksArray = task.subtasks;
  reindexSubtasks();
  subtaskItem.remove();
  if (subtasksArray.length < 4) enableInputAndButton();
}

function getNumericID(subtaskItem) {
  return parseInt(subtaskItem.id.split("_")[1], 10);
}

function reindexSubtasks() {
  subtasksArray.forEach((subtask, i) => (subtask.id = i + 1));
}
