contacts = [];

/**
 * Get all contacts from firebase and push them to the global contacts array
 * @returns {Array} Array of contacts
 */
async function getItemsFromFirebase() {
  try {
    let path = `contacts/`;
    let response = await fetch(BASE_URL + path + ".json");
    let json = await response.json();
    contacts = [];
    contactIds = [];
    if (json) {
      for (let key in json) {
        if (json.hasOwnProperty(key)) {
          contacts.push(json[key]);
          contactIds.push(key);
        }
      }
    }
    return contacts;
  } catch (error) {
    console.error("Failed to fetch contacts from Firebase:", error);
    return [];
  }
}

/**
 * Updates a contact in Firebase
 * @param {int} i
 * @param {string} contactName
 * @param {string} contactEmail
 **/
function createNewContact(event) {
  event.stopPropagation();
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  const color = createRandomColor();
  const newContact = {
    name: name,
    email: email,
    phone: phone,
    color: color,
    createdAt: new Date().toISOString(),
  };
  contacts.push(newContact);
  pushContactToFirebase(newContact);
  hideAddNewContact(event);
  animateContactCreated();
  getItemsFromFirebase();
  renderContactsListHTML();
  document.getElementById("ContactsList").style.overflow = "scroll";
}

/**
 * Pushes the new contact information to Firebase
 */
async function pushContactToFirebase(contact) {
  try {
    let path = `contacts/`;
    let response = await fetch(BASE_URL + path + ".json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let data = await response.json();
  } catch (error) {}
}

/**
 * Fetches the selected contact from firebase and displays it
 * @param {int} i - The index of the contact
 * @param {event} event
 */
function loadContact(i, event) {
  document.getElementById("body").classList.add("over-hidden");
  event.stopPropagation();
  if (window.innerWidth < 1050) {
    document.getElementById("Contacts").style = "display:none;";
    document.getElementById("headline-contact").classList.remove("d-none3");
  }
  hideContact();
  let contact = contacts[i];
  renderContactInformation(contact, i);
  setTimeout(() => {
    waitForAnimation(i);
  }, 100);
  setTimeout(() => {
    document.getElementById("body").classList.remove("over-hidden");
  }, 500);
}

/**
 * Fetches the contact information from firebase by index
 * @param {int} i
 * @returns {Object} contact
 */
async function getContactFromFirebase(i) {
  try {
    let path = `contacts/${i}.json`;
    let response = await fetch(BASE_URL + path);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let contact = await response.json();
    return { ...contact, id: i }; // Add the index to the contact object
  } catch (error) {
    console.error("Failed to fetch contact from Firebase:", error);
    return null;
  }
}

/**
 * Delete a contact from firebase
 * @param {string} id - The unique ID of the contact
 * @returns {Object} response
 */
async function deleteContactfromFirebase(id) {
  try {
    let path = `contacts/${id}.json`;
    let response = await fetch(BASE_URL + path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return { success: true };
  } catch (error) {
    console.error("Failed to delete contact from Firebase:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Get a random generated number from firebase because it can't connect to the array without it
 * @param {string} path
 * @param {object} data
 * @returns a random generated number
 */
async function getNumFromFirebase(path = "", data = {}) {
  let response = await fetch(BASE_URL + path + ".json");
  let json = await response.json();
  let num = Object.keys(json)[0];
  return num;
}

/**
 * Update a contact in firebase
 * @param {string} id - The unique ID of the contact
 * @param {Object} contact - The contact object to be updated
 * @returns {Object} response
 */
async function updateContactInFirebase(id, contact) {
  try {
    let path = `contacts/${id}.json`;
    let response = await fetch(BASE_URL + path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    let responseToJson = await response.json();
    return responseToJson;
  } catch (error) {}
}

/*_________ add task ____________________________________________________________________________________________________*/

/**
 * Pushes a task to Firebase.
 * @param {Object} task - The task object to be pushed.
 * @param {string} path - The storage path for the task in Firebase.
 * @returns {Object} response
 */
async function pushTaskToFirebase(task, path = "tasks") {
  try {
    let response = await fetch(BASE_URL + path + ".json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let responseToJson = await response.json();
    return responseToJson;
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Saves the task and redirects to the board page.
 * @param {Event} event - The event object.
 */
async function saveTaskGoToBoard(event, state = "toDo") {
  event.preventDefault();
  let data = buildTask(state);
  await postTask("tasks", data);
  window.location.href = getBaseWebsideURL() + "/board.html";
}

/**
 * Saves the task and resets the form to create a new task.
 * @param {Event} event - The event object.
 */
async function saveTaskCreateNewTask(event, state = "toDo") {
  event.preventDefault();
  let data = buildTask(state);
  await postTask("tasks", data);
  document.getElementById("addTaskForm").reset();
  document.getElementById("addTaskOverlayNextStep").style.display = "none";
  document.body.style.overflow = "auto";
  addTaskClearTask();
}

/**
 * Saves the task and closes the overlay on the board
 * @param {Event} event
 */
async function saveTaskCloseOverlay(event, state = "toDo") {
  event.preventDefault();
  let data = buildTaskOnBoard(state);
  await postTask("tasks", data);
  addTaskClearTask();
  showToast("The ticket was created successfully", "success");
  setTimeout(() => {
    toggleOverlay();
    location.reload();
  }, 2500);
}

/*_________________ board.js ______________________________________*/

let actualFirebaseID;

/**
 * Gets all tasks which are saved in the firebase realtime database with its Firebase-ID
 */
async function getAllTasks() {
  let response = await fetch(BASE_URL + "tasks" + ".json");
  let responseAsJSON = await response.json();
  allTasks = Object.entries(responseAsJSON).map(([id, task]) => {
    return { firebase_id: id, ...task };
  });
}

/**
 * Changes the Subtask Status in the front-end and on the Firebase DB
 * @param {int} subtaskIndex
 * @param {string} ticketID
 */
async function changeSubtaskStatus(subtaskIndex, ticketID) {
  let task = allTasks.find((t) => t["id"] === ticketID);
  let firebaseID = task["firebase_id"];
  let subtask = task.subtasks[subtaskIndex];
  subtask.status = subtask.status === "open" ? "closed" : "open";
  try {
    await fetch(`${BASE_URL}tasks/${firebaseID}/subtasks/${subtaskIndex}.json`, {
      method: "PATCH",
      body: JSON.stringify({ status: subtask.status }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to update subtask in Firebase:", error);
  }
  renderSubtasksOverlay(ticketID);
  updateProgressBar(ticketID);
  updateSubtaskCounter(ticketID);
}

/**
 * Toggles the Overlay view
 */
function toggleOverlay() {
  let overlay = document.getElementById("overlayID");
  if (overlay.classList.contains("d_none")) {
    overlay.classList.remove("d_none");
    overlay.classList.add("d_flex");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("d_flex");
    overlay.classList.add("d_none");
    document.body.style.overflow = "auto";
    subtasksArray = [];
    selectedUsers = [];
    location.reload();
  }
}

/**
 * Updates the subtask counter on the UI related to a certain ticket
 * @param {string} ticketID
 */
function updateSubtaskCounter(ticketID) {
  let closedTasks = subtasksClosed(ticketID);
  let task = allTasks.find((t) => t["id"] === ticketID);
  let totalSubtasks = task.subtasks ? task.subtasks.length : 0;
  let counterElement = document.getElementById(`subtask-counter_${ticketID}`);
  if (counterElement) {
    counterElement.textContent = `${closedTasks}/${totalSubtasks}`;
  }
}

/**
 * Moves the ticket into another column and update the state in the firebase database
 * @param {string} category - describes in which column the ticket was moved
 */
async function move(category) {
  let currentIndex = allTasks.findIndex((ix) => ix["id"] === currentDraggedElement);
  if (currentIndex !== -1) {
    allTasks[currentIndex]["state"] = category;
    let firebaseID = allTasks[currentIndex]["firebase_id"];
    await fetch(`${BASE_URL}tasks/${firebaseID}.json`, {
      method: "PATCH",
      body: JSON.stringify({ state: category }),
      headers: { "Content-Type": "application/json" },
    });
    renderFilteredTickets();
  } else {
    console.error("Task not found in allTasks array");
  }
}

/**
 * * Mobile Version
 * Moves the ticket into another column and update the state in the firebase database. Function as a longtap for mobile use.
 * @param {string} category - describes in which column the ticket was moved
 */
async function moveToOverlay(category, ticketID) {
  let currentIndex = allTasks.findIndex((ix) => ix["id"] === ticketID);
  if (currentIndex !== -1) {
    allTasks[currentIndex]["state"] = category;
    let firebaseID = allTasks[currentIndex]["firebase_id"];
    await fetch(`${BASE_URL}tasks/${firebaseID}.json`, {
      method: "PATCH",
      body: JSON.stringify({ state: category }),
      headers: { "Content-Type": "application/json" },
    });
    renderFilteredTickets();
  } else {
    console.error("Task not found in allTasks array");
  }
  toggleOverlay();
}

/**
 * Deletes the task from the board, the array and from the Firebase-DB
 * @param {string} ticketID
 * @returns
 */
async function deleteTicket(ticketID) {
  let taskIndex = allTasks.findIndex((task) => task["id"] === ticketID);
  let firebaseID = allTasks[taskIndex]["firebase_id"];
  try {
    await fetch(`${BASE_URL}tasks/${firebaseID}.json`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to delete ticket from Firebase:", error);
    return;
  }
  allTasks.splice(taskIndex, 1);
  renderAllTickets(allTasks);
  showToast("The ticket was deleted", "alert");
  setTimeout(() => {
    toggleOverlay();
  }, 2500);
}

/**
 * Finds the unique Firebase ID of the chosen ticket and returns it
 * @param {string} targetID
 * @returns the firebase ID of the ticket
 */
async function findFirebaseIdById(targetID) {
  try {
    const response = await fetch(BASE_URL + "tasks.json");
    if (!response.ok) {
      throw new Error("Error by fetching data from database");
    }
    const tasks = await response.json();
    if (tasks) {
      for (const [firebaseId, task] of Object.entries(tasks)) {
        if (task.id === targetID) {
          return firebaseId;
        }
      }
    }
  } catch (error) {
    console.error("Error by fetching data:", error);
    return null;
  }
}

/**
 * Gets the new variables content and saves it to the firebase database while accordingly updating the board UI
 * @param {string} ticketID
 */
async function saveEditOnClick(ticketID) {
  let newTitle = document.getElementById("task-title-overlay-edit").value;
  let newDescription = document.getElementById("task-description-overlay-edit").value;
  let newDueDate = document.getElementById("task-due-date-overlay-edit").value;
  let newPrio = editedPrio;
  let newAssignedUsers = selectedUsers;
  let newSubtasks = subtasksArray;
  let firebaseID = await findFirebaseIdById(ticketID);
  let data = buildEditTask(newTitle, newDescription, newDueDate, newPrio, newAssignedUsers, newSubtasks);
  await patchTask(firebaseID, data);
  showToast("The ticket was edited successfully", "success");
  setTimeout(() => {
    toggleOverlay();
    location.reload();
  }, 2500);
}

/**
 * Patches the task in the Firebase Realtime Database
 * @param {string} firebaseID
 * @param {object} data
 * @returns
 */
async function patchTask(firebaseID, data) {
  let url = BASE_URL + "tasks/" + firebaseID + ".json";
  let response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return (responseToJSON = await response.json());
}

/**
 * Shows the ticket in the overlay when clicked on it
 * @param {string} category - The category of the ticket
 * @param {string} ticketTitle  - The Ticket title
 * @param {string} ticketDescription - The Ticket description
 * @param {string} ticketDate - The due date of the ticket
 * @param {string} prio - The Priority of the ticket
 * @param {string} ticketID - The exact ID which is based on the Firebase-ID
 */
async function showOverlayTicket(category, ticketTitle, ticketDescription, ticketDate, prio, ticketID) {
  document.getElementById("overlayID").innerHTML = renderOverlayTicket(category, ticketTitle, ticketDescription, ticketDate, prio, ticketID);
  renderAssignedUsersOverlay(ticketID);
  renderSubtasksOverlay(ticketID);
  actualFirebaseID = await findFirebaseIdById(ticketID);
}

/**
 * Handles click events on subtask action icons.
 */
document.addEventListener("click", (event, ticketID) => {
  const target = event.target;
  if (target.classList.contains("edit-icon")) {
    handleEditClick(target);
  } else if (target.classList.contains("save-icon")) {
    handleSaveClick(target);
  } else if (target.classList.contains("delete-icon")) {
    handleDeleteClick(target, ticketID);
  }
});

/**
 * Handles the delete click event for a subtask.
 * @param {Event} event - The event object.
 * @param {string} ticketID - The ID of the task the subtask belongs to.
 * @param {number} index - The index of the subtask to delete.
 */
function handleDeleteClick(event, ticketID, index) {
  const subtaskItem = getClosestSubtaskItem(event);

  if (ticketID === "undefined") {
    deleteSubtaskLocally(subtaskItem, index);
  } else {
    deleteSubtaskFromStorage(subtaskItem, ticketID);
  }
}

/**
 * Retrieves the closest subtask item element from the event target.
 * @param {Event} event - The event object.
 * @returns {HTMLElement} The closest subtask item element.
 */
function getClosestSubtaskItem(event) {
  return event.target.closest(".subtask-item");
}

/**
 * Deletes a subtask locally and updates the UI.
 * @param {HTMLElement} subtaskItem - The subtask item to delete.
 * @param {number} index - The index of the subtask to delete.
 */
function deleteSubtaskLocally(subtaskItem, index) {
  if (subtaskItem) subtaskItem.remove();
  subtasksArray.splice(index, 1);
  reindexSubtasks();
  if (subtasksArray.length < 4) enableInputAndButton();
}

/**
 * Deletes a subtask from the task's subtasks array in local storage.
 * @param {HTMLElement} subtaskItem - The subtask item to delete.
 * @param {string} ticketID - The ID of the task the subtask belongs to.
 */
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

/**
 * Extracts the numeric ID from a subtask item's ID.
 * @param {HTMLElement} subtaskItem - The subtask item.
 * @returns {number} The numeric ID.
 */
function getNumericID(subtaskItem) {
  return parseInt(subtaskItem.id.split("_")[1], 10);
}

/**
 * Reindexes the subtasks array and updates their IDs.
 */
function reindexSubtasks() {
  subtasksArray.forEach((subtask, i) => (subtask.id = i + 1));
}

/**
 * Deletes a subtask from the task's subtasks array in local storage.
 * @param {HTMLElement} subtaskItem - The subtask item to delete.
 * @param {string} ticketID - The ID of the task the subtask belongs to.
 */
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
