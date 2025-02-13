/**
 * A HTML-Element for the subtask item gets rendered
 * @param {int} itemID
 * @param {string} itemContent
 * @returns a HTML-Element
 */
function renderSubtaskItem(itemID, itemContent, ticketID, index) {
  return `<div class="subtask-item" id="subtaskItem_${index}">
                <div class="subtask-content-wrapper" id="addTaskSubContentWrapper${index}">
                    <span class="bullet-point">•</span>
                    <span class="subtask-content" id="subtaskContent_${itemID}">${itemContent}</span>
                </div>
                <div class="subtask-actions">
                    <img class="add-task-edit-icon" onclick="addTaskHandleEditClick('${index}')" src="./assets/icons/subtask-edit.png" alt="">
                    <span class="divider"></span>
                    <img class="delete-icon" onclick="addTaskhandleDeleteClick('${index}')" src="./assets/icons/subtask-delete.png" alt="">
                </div>
            </div>`;
}

/**
 * A HTML-Element for the subtask item gets rendered
 * @param {int} itemID
 * @param {string} itemContent
 * @returns a HTML-Element
 */
function renderEditSubtaskItem(itemID, itemContent, ticketID, index) {
  return `<div class="subtask-item" id="subtaskItem_${itemID}">
                  <div class="subtask-content-wrapper">
                      <span class="bullet-point">•</span>
                      <span class="subtask-content" id="subtaskContent_${itemID}">${itemContent}</span>
                  </div>
                  <div class="subtask-actions">
                      <img class="edit-icon" src="./assets/icons/subtask-edit.png" alt="">
                      <span class="divider"></span>
                      <img class="delete-icon" onclick="handleDeleteEditClick(event, '${ticketID}')" src="./assets/icons/subtask-delete.png" alt="">
                  </div>
              </div>`;
}

/**
 * Returns the new and updated text as a bullet point if any changes were made
 *
 * @param {string} updatedText
 * @returns HTML-Snippet for the subtask bullet point
 */
function saveSubtaskItem(updatedText) {
  return `<span class="bullet-point">•</span>
            <span class="subtask-content">${updatedText}</span>
    `;
}

/**
 * Returns the origin text in the bullet point if the input was canceled
 *
 * @param {string} text
 * @returns HTML-Snippet for the subtask bullet point
 */
function cancelSubtaskItem(text) {
  return `<span class="bullet-point">•</span>
            <span class="subtask-content">${text}</span>
    `;
}

/**
 * Creates a JSON-Object out of the form content to be pushed into the Firebase Realtime DB with an unique ID
 *
 * @param {string} taskTitle
 * @param {string} taskDate
 * @param {string} taskPrio
 * @param {string} taskDescription
 * @param {string} taskCategory
 * @param {object} taskSubtasks
 * @param {object} taskAssigned
 * @param {string} taskState
 * @returns a JSON Object which is uploaded into the Firebase Realtime DB
 */
function taskToJSON(taskTitle, taskDate, taskPrio, taskDescription, taskCategory, taskSubtasks, taskAssigned, taskState, taskCreator) {
  return {
    id: generateTaskID(),
    title: taskTitle,
    due_date: taskDate,
    prio: taskPrio,
    description: taskDescription,
    category: taskCategory,
    subtasks: taskSubtasks,
    assigned_to: taskAssigned,
    state: taskState,
    creator: taskCreator,
  };
}

/**
 * Creates a user template with the user's initials.
 */
function createUserTemplate(contact) {
  let initials = contact.name.charAt(0).toUpperCase() + contact.name.charAt(contact.name.length - 1).toUpperCase();
  return `
          <div onclick="toggleUserSelection('${contact.email}')" class="user_template_not_selected" id="template-${contact.email}" >
              <div class="user_template_circle_name">
                  <div class="user_circle" style="background-color: ${contact.color};">
                      ${initials}
                  </div>
                  <p>${contact.name}</p>
              </div>
              <input type="checkbox" class="user_checkbox" id="checkbox-${contact.email}">
              <label class="user_template_label" for="checkbox-${contact.email}">
                  <img src="./assets/img/check button.png" alt="" id="img-${contact.email}">
              </label>
          </div>
      `;
}

/**
 * Creates a user template with the user's initials.
 */
function createUserTemplateEdit(contact) {
  let initials = contact.name.charAt(0).toUpperCase() + contact.name.charAt(contact.name.length - 1).toUpperCase();
  return `
            <div onclick="toggleUserSelectionEdit('${contact.email}')" class="user_template_not_selected" id="template-${contact.email}" >
                <div class="user_template_circle_name">
                    <div class="user_circle" style="background-color: ${contact.color};">
                        ${initials}
                    </div>
                    <p>${contact.name}</p>
                </div>
                <input type="checkbox" class="user_checkbox" id="checkbox-${contact.email}">
                <label class="user_template_label" for="checkbox-${contact.email}">
                    <img src="./assets/img/check button.png" alt="" id="img-${contact.email}">
                </label>
            </div>
        `;
}

/**
 * A HTML-Element for the add-task-feature on the board view gets rendered
 * @param {string} state
 * @returns a HTML-Element
 */
function renderAddTaskFeatureOnBoard(state) {
  return `<div class="board-add-task-card slide-in-right" onload="subtaskInput()">
            <div class="board_add_task_head">
                <h1>Add Task</h1>
                <img onclick="toggleOverlay()" src="./assets/img/Close.png" alt="">
            </div>
            <form id="addTaskForm" class="board_add_task_main_content" oninput="checkFormFilledBoard()" onclick="handleDropdownBodyClick()">
                <div class="board_form_wrapper">
                        <div class="board_form_column_left">
                            <div class="form-group required_focus add_task_for_error_height">
                                <label for="task-title">Title <span class="required-icon">*</span></label>
                                <input id="task-title" oninput="checkFormValidityFromInputFieldTitleBoard()" class="" type="text"  name="title" placeholder="Enter a title" required>
                                <small style="display: none" class="add_task_error" id="addTaskTitleErrorInput">* This field is required</small>
                            </div>
                            <div class="form-group">
                                <label for="task-description">Description</label>
                                <textarea class="addTaskDescription" id="task-description" name="description" placeholder="Enter a Description"></textarea>
                            </div>
                            <div class="assigned_to_container">
                                <label for="addTaskSearchContacts">Assigned to</label>
                                <div id="assigned" class="add_task_dropdown" onclick="openDropdown(event)">
                                    <input type="text" id="addTaskSearchContacts" placeholder="Select contacts to assign" oninput="addTaskSearchUser()">
                                    <img id="dropDownArrow" src="./assets/img/arrow_drop_down.png" alt="" onclick="openDropdown(event)">
                                </div>
                                    <div id="addTaskDropdown" class="custom_dropdown" onclick="event.stopPropagation()"></div>
                                <div id="selectedUsers" class="selected_users"></div>
                            </div>                          
                        </div>
                        <div class="board_separator"></div>
                        <div class="board_form_column_right">
                            <div class="form-group required_focus add_task_for_error_height">
                                <label for="task-due-date">Due date <span class="required-icon">*</span></label>
                                <input oninput="checkFormValidityFromInputFieldDueDateBoard()" class="" type="date" id="task-due-date" name="due-date" placeholder="dd/mm/yyyy" required>
                                <small style="display: none" class="add_task_error" id="addTaskDateErrorInput">* This field is required</small>
                            </div>
                            <div class="prio-group">
                                <span>Prio <span class="required-icon">*</span></span>
                                <div class="prio-options">

                                  <button type="button" class="prio-btn" id="urgent-btn" onclick="setUrgentOnBoard()">
                                    <span>Urgent</span>
                                    <svg id="urgent-svg" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_156_943)">
                                        <path d="M19.2597 15.4464C19.0251 15.4468 18.7965 15.3719 18.6077 15.2328L10.3556 9.14965L2.10356 15.2328C1.98771 15.3184 1.85613 15.3803 1.71633 15.4151C1.57652 15.4498 1.43124 15.4567 1.28877 15.4354C1.14631 15.414 1.00944 15.3648 0.885997 15.2906C0.762552 15.2164 0.654943 15.1186 0.569314 15.0029C0.483684 14.8871 0.421712 14.7556 0.386936 14.6159C0.352159 14.4762 0.345259 14.331 0.366629 14.1887C0.409788 13.9012 0.565479 13.6425 0.799451 13.4697L9.70356 6.89926C9.89226 6.75967 10.1208 6.68433 10.3556 6.68433C10.5904 6.68433 10.819 6.75967 11.0077 6.89926L19.9118 13.4697C20.0977 13.6067 20.2356 13.7988 20.3057 14.0186C20.3759 14.2385 20.3747 14.4749 20.3024 14.6941C20.2301 14.9133 20.0904 15.1041 19.9031 15.2391C19.7159 15.3742 19.4907 15.4468 19.2597 15.4464Z" fill="#FF3D00"/>
                                        <path d="M19.2597 9.69733C19.0251 9.69774 18.7965 9.62289 18.6077 9.48379L10.3556 3.40063L2.10356 9.48379C1.86959 9.6566 1.57651 9.72945 1.28878 9.68633C1.00105 9.6432 0.742254 9.48762 0.569318 9.25383C0.396382 9.02003 0.323475 8.72716 0.366634 8.43964C0.409793 8.15213 0.565483 7.89352 0.799455 7.72072L9.70356 1.15024C9.89226 1.01065 10.1208 0.935303 10.3556 0.935303C10.5904 0.935303 10.819 1.01065 11.0077 1.15024L19.9118 7.72072C20.0977 7.85763 20.2356 8.04974 20.3057 8.26962C20.3759 8.4895 20.3747 8.72591 20.3024 8.94509C20.2301 9.16427 20.0904 9.35503 19.9031 9.49012C19.7159 9.62521 19.4907 9.69773 19.2597 9.69733Z" fill="#FF3D00"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_156_943">
                                        <rect width="20" height="14.5098" fill="white" transform="translate(0.355469 0.936768)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                  </button>
                                  <button type="button" class="prio-btn medium active" id="medium-btn" onclick="setMediumOnBoard()">
                                    <span>Medium</span>
                                    <svg id="medium-svg" class="medium-icon" width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_156_950)">
                                        <path d="M19.7596 7.91693H1.95136C1.66071 7.91693 1.38197 7.80063 1.17645 7.59362C0.970928 7.3866 0.855469 7.10584 0.855469 6.81308C0.855469 6.52032 0.970928 6.23955 1.17645 6.03254C1.38197 5.82553 1.66071 5.70923 1.95136 5.70923H19.7596C20.0502 5.70923 20.329 5.82553 20.5345 6.03254C20.74 6.23955 20.8555 6.52032 20.8555 6.81308C20.8555 7.10584 20.74 7.3866 20.5345 7.59362C20.329 7.80063 20.0502 7.91693 19.7596 7.91693Z" fill="#FFA800"/>
                                        <path d="M19.7596 2.67376H1.95136C1.66071 2.67376 1.38197 2.55746 1.17645 2.35045C0.970928 2.14344 0.855469 1.86267 0.855469 1.56991C0.855469 1.27715 0.970928 0.996386 1.17645 0.789374C1.38197 0.582363 1.66071 0.466064 1.95136 0.466064L19.7596 0.466064C20.0502 0.466064 20.329 0.582363 20.5345 0.789374C20.74 0.996386 20.8555 1.27715 20.8555 1.56991C20.8555 1.86267 20.74 2.14344 20.5345 2.35045C20.329 2.55746 20.0502 2.67376 19.7596 2.67376Z" fill="#FFA800"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_156_950">
                                        <rect width="20" height="7.45098" fill="white" transform="translate(0.855469 0.466064)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                  </button>
                                  <button type="button" class="prio-btn" id="low-btn" onclick="setLowOnBoard()">
                                    <span>Low</span>
                                    <svg id="low-svg" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                                        <path d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                                    </svg>
                                  </button>
                                </div>
                            </div>
                            <div class="form-group add_task_for_error_height">
                                <label for="task-category">Category <span class="required-icon">*</span></label>
                                <div class="custom-select-wrapper ">
                                    <select oninput="checkFormValidityFromInputFieldCategoryBoard()" class="custom-select" name="category" id="task-category" required>                                        
                                        <option value="" disabled selected>Select task category</option>
                                        <option value="technical-tasks">Technical Tasks</option>
                                        <option value="user-story">User Story</option>
                                    </select>                                    
                                </div>
                                <small style="display: none" class="add_task_error" id="addTaskCategoryErrorInput">* This field is required</small>
                            </div>
                            <div class="form-group">
                                <label for="task-subtasks">Subtasks</label>
                                <div class="subtasks-input">
                                    <input type="text" id="task-subtasks" name="subtasks" placeholder="Add new subtask" oninput="subtaskInput()">
                                        <button type="button" class="add-subtask-btn" id="add-subtask-btn">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_75601_15213" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                    <rect x="0.248535" width="24" height="24" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_75601_15213)">
                                                    <path d="M11.2485 13H6.24854C5.9652 13 5.7277 12.9042 5.53604 12.7125C5.34437 12.5208 5.24854 12.2833 5.24854 12C5.24854 11.7167 5.34437 11.4792 5.53604 11.2875C5.7277 11.0958 5.9652 11 6.24854 11H11.2485V6C11.2485 5.71667 11.3444 5.47917 11.536 5.2875C11.7277 5.09583 11.9652 5 12.2485 5C12.5319 5 12.7694 5.09583 12.961 5.2875C13.1527 5.47917 13.2485 5.71667 13.2485 6V11H18.2485C18.5319 11 18.7694 11.0958 18.961 11.2875C19.1527 11.4792 19.2485 11.7167 19.2485 12C19.2485 12.2833 19.1527 12.5208 18.961 12.7125C18.7694 12.9042 18.5319 13 18.2485 13H13.2485V18C13.2485 18.2833 13.1527 18.5208 12.961 18.7125C12.7694 18.9042 12.5319 19 12.2485 19C11.9652 19 11.7277 18.9042 11.536 18.7125C11.3444 18.5208 11.2485 18.2833 11.2485 18V13Z" fill="#2A3647"/>
                                                </g>
                                            </svg>
                                        </button>
                                    <div class="icons" id="iconsContainer">
                                        <span class="clear-icon" id="clearIcon">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_75592_9957" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_75592_9957)">
                                                <path d="M12.1443 13.4L7.24434 18.3C7.061 18.4834 6.82767 18.575 6.54434 18.575C6.261 18.575 6.02767 18.4834 5.84434 18.3C5.661 18.1167 5.56934 17.8834 5.56934 17.6C5.56934 17.3167 5.661 17.0834 5.84434 16.9L10.7443 12L5.84434 7.10005C5.661 6.91672 5.56934 6.68338 5.56934 6.40005C5.56934 6.11672 5.661 5.88338 5.84434 5.70005C6.02767 5.51672 6.261 5.42505 6.54434 5.42505C6.82767 5.42505 7.061 5.51672 7.24434 5.70005L12.1443 10.6L17.0443 5.70005C17.2277 5.51672 17.461 5.42505 17.7443 5.42505C18.0277 5.42505 18.261 5.51672 18.4443 5.70005C18.6277 5.88338 18.7193 6.11672 18.7193 6.40005C18.7193 6.68338 18.6277 6.91672 18.4443 7.10005L13.5443 12L18.4443 16.9C18.6277 17.0834 18.7193 17.3167 18.7193 17.6C18.7193 17.8834 18.6277 18.1167 18.4443 18.3C18.261 18.4834 18.0277 18.575 17.7443 18.575C17.461 18.575 17.2277 18.4834 17.0443 18.3L12.1443 13.4Z" fill="#2A3647"/>
                                                </g>
                                            </svg>
                                        </span>
                                        <div class="divider"></div>
                                        <span class="check-icon" id="checkIcon" onclick="pushSubtaskArray()">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_75592_9963" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                                <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_75592_9963)">
                                                <path d="M9.69474 15.15L18.1697 6.675C18.3697 6.475 18.6072 6.375 18.8822 6.375C19.1572 6.375 19.3947 6.475 19.5947 6.675C19.7947 6.875 19.8947 7.1125 19.8947 7.3875C19.8947 7.6625 19.7947 7.9 19.5947 8.1L10.3947 17.3C10.1947 17.5 9.96141 17.6 9.69474 17.6C9.42807 17.6 9.19474 17.5 8.99474 17.3L4.69474 13C4.49474 12.8 4.3989 12.5625 4.40724 12.2875C4.41557 12.0125 4.51974 11.775 4.71974 11.575C4.91974 11.375 5.15724 11.275 5.43224 11.275C5.70724 11.275 5.94474 11.375 6.14474 11.575L9.69474 15.15Z" fill="#2A3647"/>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="subtasks-list" id="subtasksList">
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-buttons">
                        <p class="required-hint"><span class="required-icon">*</span>This field is required</p>
                        <div class="btn-wrapper">
                            <div class="add_task_clear_button">
                                <button onclick="addTaskClearTask()" type="reset">
                                    <p>Clear</p>
                                    <img class="add_task_clear_button_image" src="./assets/img/Close.png" alt="">
                                    <img class="add_task_clear_button_image_hover" src="./assets/img/Close-blue.png" alt="">
                                </button>
                            </div>
                            <div class="add_task_create_button">
                                <button id="createTaskButton" type="submit" class="create-btn" onclick="checkFormValidityBoard(event, '${state}')" disabled>
                                    <p>Create Task</p>
                                    <img src="./assets/img/check.png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
            </form>
        </div>`;
}

/**
 * Returns a HTML-Element to display the user-initials in a colored circle
 * @param {string} initials
 * @param {string} color
 * @returns a HTML-Element
 */
function renderAssignedContactCircle(initials, color) {
  return `<div class="selected_user_circle" style="background-color: ${color};">
                  ${initials}
              </div>`;
}
