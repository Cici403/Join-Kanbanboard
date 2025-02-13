/**
 * Returns a template that reports the absence of tasks
 *
 * @param {string} listTitle - Title of the list in which there is no task
 * @returns
 */
function noTasks(listTitle) {
  return `<div class="no-task-card">
                <span>No tasks ${listTitle}</span>
            </div>`;
}

/**
 * Returns a badge for the chosen category *
 * @param {string} categoryName - Name of the category chosen by the user
 * @returns - Returns the correct designed badge for the category
 */
function categoryBadge(categoryName) {
  if (categoryName === "user-story") {
    return `<div class="category-badge-user">
                    <span>User Story</span>
                </div>`;
  } else if (categoryName === "technical-tasks") {
    return `<div class="category-badge-technical">
                    <span>Technical Task</span>
                </div>`;
  }
}

/**
 * Returns a badge for the chosen category in the overlay view *
 * @param {string} categoryName - Name of the category chosen by the user
 * @returns - Returns the correct designed badge for the category
 */
function categoryBadgeOverlay(categoryName) {
  if (categoryName === "user-story") {
    return `<div class="overlay-category-badge-user">
                    <span>User Story</span>
                </div>`;
  } else if (categoryName === "technical-tasks") {
    return `<div class="overlay-category-badge-technical">
                    <span>Technical Task</span>
                </div>`;
  }
}

/**
 * Returns the correct Icon based on the users choice by adding the task *
 * @param {string} prio - Priority chosen by the user at add-task
 * @returns - Returns the correct icon based on the users choice
 */
function prioIcon(prio) {
  if (prio === "low") {
    return `<div class="board-prio-icon" id="boardPrioIcon">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                        <path d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                    </svg>
                </div>`;
  } else if (prio === "medium") {
    return `<div class="board-prio-icon" id="boardPrioIcon">
                    <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>`;
  } else if (prio === "urgent") {
    return `<div class="board-prio-icon" id="boardPrioIcon">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>`;
  }
}

/**
 * Based on the prio-parameter, a HTML-Element in the Overlay is displayed
 * @param {string} prio
 * @returns a HTML-Element
 */
function prioIconOverlay(prio) {
  if (prio === "low") {
    return `<div class="overlay-prio-content">
                    <span>Low</span>
                    <div class="board-prio-icon" id="boardPrioIcon">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                            <path d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                        </svg>
                    </div>
                </div>`;
  } else if (prio === "medium") {
    return `<div class="overlay-prio-content">
                    <span>Medium</span>
                    <div class="board-prio-icon" id="boardPrioIcon">
                        <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                </div>`;
  } else if (prio === "urgent") {
    return `<div class="overlay-prio-content">
                    <span>Urgent</span>
                    <div class="board-prio-icon" id="boardPrioIcon">
                        <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                </div>`;
  }
}

/**
 * Returns a HTML-Element to display the ticket on the board
 * @param {string} ticketID
 * @param {string} category
 * @param {string} ticketTitle
 * @param {string} ticketDescription
 * @param {string} longDescription
 * @param {string} prio
 * @param {int} subtaskDone
 * @param {int} allSubtasks
 * @param {string} ticketDate
 * @returns a HTML-Element
 */
function ticketTemplate(ticketID, category, ticketTitle, ticketDescription, longDescription, prio, subtaskDone, allSubtasks, ticketDate) {
  return `<div class="ticket-card" draggable="true" ondragstart="startDragging('${ticketID}')" onclick="toggleOverlay(); showOverlayTicket('${category}', '${ticketTitle}', '${longDescription}', '${ticketDate}', '${prio}', '${ticketID}')">
                ${categoryBadge(category)}
                <div class="ticket-title">
                    <span>${ticketTitle}</span>
                </div>
                <div class="ticket-description">
                    <span>${ticketDescription}</span>
                </div>
                <div class="ticket-subtask-wrapper">
                    <div class="ticket-subtask-progress-bar" id="ticketSubtaskProgressBar_${ticketID}">
                        <div id="progress-bar_${ticketID}" style="height: 100%; width: 0%; background-color: #4589FF; border-radius: 8px;"></div>
                    </div>
                    <div class="ticket-subtask-counter" id="ticketSubtaskCounter_${ticketID}">
                        <span><span id="subtasksDoneCounter">${subtaskDone}</span>/<span id="allSubtasksSum">${allSubtasks}</span> Subtasks</span>
                    </div>
                </div>
                <div class="users-prio-wrapper">
                <div class="ticket-assigned-users" id="ticketAssignedUsers_${ticketID}"></div>
                    <div class="ticket-prio">
                        <div class="board-prio-icon" id="boardPrioIcon">
                            ${prioIcon(prio)}
                        </div>
                    </div>
                </div>
            </div>`;
}

/**
 * Returns a HTML-Element to display the user-initials in a colored circle
 * @param {string} initials
 * @param {string} color
 * @returns a HTML-Element
 */
function renderUserCircle(initials, color) {
  return `<div class="selected_user_circle_board" style="background-color: ${color};">
                ${initials}
            </div>`;
}

/**
 * Returns a HTML-Element to display a dummy ticket while drag and drop
 * @returns a HTML-Element
 */
function renderDummyTicket() {
  return `<div class="dummy-ticket-card"></div>`;
}

/**
 * Returns a HTML-Element to display the ticket information as an overlay
 * @param {string} category
 * @param {string} ticketTitle
 * @param {string} ticketDescription
 * @param {string} ticketDate
 * @param {string} prio
 * @param {string} ticketID
 * @returns a HTML-Element
 */
function renderOverlayTicket(category, ticketTitle, ticketDescription, ticketDate, prio, ticketID) {
  return `<div class="overlay-card slide-in-right" id="overlayCard">
            <div class="badge-and-close-wrapper">
                <div class="overlay-badge">
                    ${categoryBadgeOverlay(category)}
                </div>
                <div class="overlay-close-btn" onclick="toggleOverlay()">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_264917_4230" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_264917_4230)">
                        <path d="M16 17.4L11.1 22.3C10.9167 22.4834 10.6833 22.575 10.4 22.575C10.1167 22.575 9.88332 22.4834 9.69999 22.3C9.51665 22.1167 9.42499 21.8834 9.42499 21.6C9.42499 21.3167 9.51665 21.0834 9.69999 20.9L14.6 16L9.69999 11.1C9.51665 10.9167 9.42499 10.6834 9.42499 10.4C9.42499 10.1167 9.51665 9.88338 9.69999 9.70005C9.88332 9.51672 10.1167 9.42505 10.4 9.42505C10.6833 9.42505 10.9167 9.51672 11.1 9.70005L16 14.6L20.9 9.70005C21.0833 9.51672 21.3167 9.42505 21.6 9.42505C21.8833 9.42505 22.1167 9.51672 22.3 9.70005C22.4833 9.88338 22.575 10.1167 22.575 10.4C22.575 10.6834 22.4833 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4833 21.0834 22.575 21.3167 22.575 21.6C22.575 21.8834 22.4833 22.1167 22.3 22.3C22.1167 22.4834 21.8833 22.575 21.6 22.575C21.3167 22.575 21.0833 22.4834 20.9 22.3L16 17.4Z" fill="#2A3647"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="overlay-card-title">
                <p>${ticketTitle}</p>
            </div>
            <div class="overlay-card-description">
                <p>${ticketDescription}</p>
            </div>
            <div class="overlay-date-wrapper">
                <div class="overlay-date-label">
                    <span>Due date:</span>
                </div>
                <div class="overlay-date-content">
                    <span>${formatDate(ticketDate)}</span>
                </div>
            </div>
            <div class="overlay-prio-wrapper">
                <div class="overlay-prio-label">
                    <span>Priority:</span>
                </div>
                ${prioIconOverlay(prio)}
            </div>
            <div class="overlay-assigned-wrapper">
                <div class="overlay-assigned-label">
                    <span>Assigned To:</span>
                </div>
                <div class="overlay-assigned-user-content" id="overlayAssignedUserContent_${ticketID}"></div>
            </div>
            <div class="overlay-subtasks-wrapper">
                <div class="overlay-subtasks-label">
                    <span>Subtasks:</span>
                </div>
                <div class="overlay-subtasks-content" id=overlaySubtasksContent_${ticketID}></div>
            </div>
            <div class="overlay-service-btn-wrapper">
                <div class="overlay-ticket-delete" onclick="deleteTicket('${ticketID}')">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_75592_9951" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                        <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_75592_9951)">
                        <path d="M7.14453 21C6.59453 21 6.1237 20.8042 5.73203 20.4125C5.34036 20.0208 5.14453 19.55 5.14453 19V6C4.8612 6 4.6237 5.90417 4.43203 5.7125C4.24036 5.52083 4.14453 5.28333 4.14453 5C4.14453 4.71667 4.24036 4.47917 4.43203 4.2875C4.6237 4.09583 4.8612 4 5.14453 4H9.14453C9.14453 3.71667 9.24036 3.47917 9.43203 3.2875C9.6237 3.09583 9.8612 3 10.1445 3H14.1445C14.4279 3 14.6654 3.09583 14.857 3.2875C15.0487 3.47917 15.1445 3.71667 15.1445 4H19.1445C19.4279 4 19.6654 4.09583 19.857 4.2875C20.0487 4.47917 20.1445 4.71667 20.1445 5C20.1445 5.28333 20.0487 5.52083 19.857 5.7125C19.6654 5.90417 19.4279 6 19.1445 6V19C19.1445 19.55 18.9487 20.0208 18.557 20.4125C18.1654 20.8042 17.6945 21 17.1445 21H7.14453ZM7.14453 6V19H17.1445V6H7.14453ZM9.14453 16C9.14453 16.2833 9.24036 16.5208 9.43203 16.7125C9.6237 16.9042 9.8612 17 10.1445 17C10.4279 17 10.6654 16.9042 10.857 16.7125C11.0487 16.5208 11.1445 16.2833 11.1445 16V9C11.1445 8.71667 11.0487 8.47917 10.857 8.2875C10.6654 8.09583 10.4279 8 10.1445 8C9.8612 8 9.6237 8.09583 9.43203 8.2875C9.24036 8.47917 9.14453 8.71667 9.14453 9V16ZM13.1445 16C13.1445 16.2833 13.2404 16.5208 13.432 16.7125C13.6237 16.9042 13.8612 17 14.1445 17C14.4279 17 14.6654 16.9042 14.857 16.7125C15.0487 16.5208 15.1445 16.2833 15.1445 16V9C15.1445 8.71667 15.0487 8.47917 14.857 8.2875C14.6654 8.09583 14.4279 8 14.1445 8C13.8612 8 13.6237 8.09583 13.432 8.2875C13.2404 8.47917 13.1445 8.71667 13.1445 9V16Z" fill="#2A3647"/>
                        </g>
                    </svg>
                    <span>Delete</span>
                </div>
                <div class="overlay-ticket-edit" onclick="editTicket('${ticketID}', '${ticketTitle}', '${ticketDescription}', '${ticketDate}', '${prio}'); renderSubtasksEditOverlay('${ticketID}');">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_75592_9969" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                        <rect x="0.144531" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_75592_9969)">
                        <path d="M5.14453 19H6.54453L15.1695 10.375L13.7695 8.975L5.14453 17.6V19ZM19.4445 8.925L15.1945 4.725L16.5945 3.325C16.9779 2.94167 17.4487 2.75 18.007 2.75C18.5654 2.75 19.0362 2.94167 19.4195 3.325L20.8195 4.725C21.2029 5.10833 21.4029 5.57083 21.4195 6.1125C21.4362 6.65417 21.2529 7.11667 20.8695 7.5L19.4445 8.925ZM17.9945 10.4L7.39453 21H3.14453V16.75L13.7445 6.15L17.9945 10.4Z" fill="#2A3647"/>
                        </g>
                    </svg>
                    <span>Edit</span>
                </div>
            </div>
        </div>`;
}

/**
 * Returns a HTML-Element to display the Overlay Edit Ticket
 * @param {string} ticketID
 * @returns a HTML-Element
 */
function renderOverlayEditTicket(ticketID) {
  return `<div class="overlay-close-btn-edit" onclick="toggleOverlay()">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_264917_4230" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                    <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_264917_4230)">
                    <path d="M16 17.4L11.1 22.3C10.9167 22.4834 10.6833 22.575 10.4 22.575C10.1167 22.575 9.88332 22.4834 9.69999 22.3C9.51665 22.1167 9.42499 21.8834 9.42499 21.6C9.42499 21.3167 9.51665 21.0834 9.69999 20.9L14.6 16L9.69999 11.1C9.51665 10.9167 9.42499 10.6834 9.42499 10.4C9.42499 10.1167 9.51665 9.88338 9.69999 9.70005C9.88332 9.51672 10.1167 9.42505 10.4 9.42505C10.6833 9.42505 10.9167 9.51672 11.1 9.70005L16 14.6L20.9 9.70005C21.0833 9.51672 21.3167 9.42505 21.6 9.42505C21.8833 9.42505 22.1167 9.51672 22.3 9.70005C22.4833 9.88338 22.575 10.1167 22.575 10.4C22.575 10.6834 22.4833 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4833 21.0834 22.575 21.3167 22.575 21.6C22.575 21.8834 22.4833 22.1167 22.3 22.3C22.1167 22.4834 21.8833 22.575 21.6 22.575C21.3167 22.575 21.0833 22.4834 20.9 22.3L16 17.4Z" fill="#2A3647"/>
                    </g>
                </svg>
            </div>
            <form class="overlay-edit-form-wrapper" id="overlayEditForm">
                            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="task-title-overlay-edit" name="title">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="task-description-overlay-edit" name="description" placeholder="Enter a Description"></textarea>
            </div>
            <div class="form-group">
                <label for="due-date">Due date</label>
                <input type="date" id="task-due-date-overlay-edit" name="due-date">
            </div>
            <div class="form-group prio-group">
                <label>Priority</label>
                <div class="prio-options">
                  <button type="button" class="prio-btn" id="urgent-btn" onclick="setUrgent()">
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
                  <button type="button" class="prio-btn active" id="medium-btn" onclick="setMedium()">
                    <span>Medium</span>
                    <svg id="medium-svg" width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <button type="button" class="prio-btn" id="low-btn" onclick="setLow()">
                    <span>Low</span>
                    <svg id="low-svg" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8555 9.69779C10.6209 9.69819 10.3923 9.62335 10.2035 9.48427L1.30038 2.91453C1.18454 2.82898 1.0867 2.72146 1.01245 2.59812C0.938193 2.47478 0.888977 2.33803 0.867609 2.19569C0.824455 1.90821 0.897354 1.61537 1.07027 1.3816C1.24319 1.14782 1.50196 0.992265 1.78965 0.949143C2.07734 0.906021 2.3704 0.978866 2.60434 1.15165L10.8555 7.23414L19.1066 1.15165C19.2224 1.0661 19.354 1.00418 19.4938 0.969432C19.6336 0.934685 19.7788 0.927791 19.9213 0.949143C20.0637 0.970495 20.2006 1.01967 20.324 1.09388C20.4474 1.16808 20.555 1.26584 20.6407 1.3816C20.7263 1.49735 20.7883 1.62882 20.823 1.7685C20.8578 1.90818 20.8647 2.05334 20.8433 2.19569C20.822 2.33803 20.7727 2.47478 20.6985 2.59812C20.6242 2.72146 20.5264 2.82898 20.4106 2.91453L11.5075 9.48427C11.3186 9.62335 11.0901 9.69819 10.8555 9.69779Z" fill="#7AE229"/>
                        <path d="M10.8555 15.4463C10.6209 15.4467 10.3923 15.3719 10.2035 15.2328L1.30038 8.66307C1.06644 8.49028 0.910763 8.2317 0.867609 7.94422C0.824455 7.65674 0.897354 7.3639 1.07027 7.13013C1.24319 6.89636 1.50196 6.7408 1.78965 6.69768C2.07734 6.65456 2.3704 6.7274 2.60434 6.90019L10.8555 12.9827L19.1066 6.90019C19.3405 6.7274 19.6336 6.65456 19.9213 6.69768C20.209 6.7408 20.4678 6.89636 20.6407 7.13013C20.8136 7.3639 20.8865 7.65674 20.8433 7.94422C20.8002 8.2317 20.6445 8.49028 20.4106 8.66307L11.5075 15.2328C11.3186 15.3719 11.0901 15.4467 10.8555 15.4463Z" fill="#7AE229"/>
                    </svg>
                  </button>
                </div>
            </div>
            <div class="assigned_to_container">
                <label for="assigned-to">Assigned to</label>
                <div id="assigned" class="add_task_dropdown" onclick="openEditDropdown('${ticketID}' , event)"">
                    <input type="text" id="addTaskSearchContacts" placeholder="Select contacts to assign" oninput="addTaskSearchUser()">
                    <img id="dropDownArrow" src="./assets/img/arrow_drop_down.png" alt="" onclick="openEditDropdown('${ticketID}' , event)">
                </div>
                    <div id="addTaskDropdown" class="custom_dropdown" onclick="event.stopPropagation()"></div>
                <div id="selectedUsers" class="selected_users"></div>
            </div>                          
                            <div class="form-group">
                                <label for="subtasks">Subtasks</label>
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
                                        <span class="check-icon" id="checkIcon" onclick="pushEditSubtasksArray('${ticketID}')">
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
            </form>
            <button class="endEdit-btn" id="endEditBtn" onclick="saveEditOnClick('${ticketID}')">
                <span>Ok</span>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_259614_6254" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                    <rect x="0.248535" width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_259614_6254)">
                    <path d="M9.79923 15.15L18.2742 6.675C18.4742 6.475 18.7117 6.375 18.9867 6.375C19.2617 6.375 19.4992 6.475 19.6992 6.675C19.8992 6.875 19.9992 7.1125 19.9992 7.3875C19.9992 7.6625 19.8992 7.9 19.6992 8.1L10.4992 17.3C10.2992 17.5 10.0659 17.6 9.79923 17.6C9.53256 17.6 9.29923 17.5 9.09923 17.3L4.79923 13C4.59923 12.8 4.5034 12.5625 4.51173 12.2875C4.52006 12.0125 4.62423 11.775 4.82423 11.575C5.02423 11.375 5.26173 11.275 5.53673 11.275C5.81173 11.275 6.04923 11.375 6.24923 11.575L9.79923 15.15Z" fill="white"/>
                    </g>
                </svg>
            </button>
        `;
}

/**
 * Returns the Ticket Date in the correct format
 * @param {string} ticketDate - Ticket Due Date as a string in the incorrect format
 * @returns The Ticket Date in the Format DD/MM/YYYY
 */
function formatDate(ticketDate) {
  let [year, month, day] = ticketDate.split("-");
  return `${day}/${month}/${year}`;
}

/**
 * Takes the username and returns it with the first letter capitalized
 * @param {string} username
 * @returns The username with the first letter in capitals
 */
function capitalizeFirstChar(username) {
  if (!username) return "";
  if (username.charAt(0) === username.charAt(0).toUpperCase()) {
    return username;
  }
  return username.charAt(0).toUpperCase() + username.slice(1);
}

/**
 * Returns a HTML Snippet with the Users Circle Icon and his/her name
 * @param {string} userName
 * @param {string} initials
 * @param {string} color
 * @returns a HTML Snippet to create the User Element in the Front-End
 */
function renderOverlayUserElement(userName, initials, color) {
  return `<div class="overlay-assigned-user-element">
                ${renderUserCircle(initials, color)}
                <span class="overlay-assigned-user-name">${capitalizeFirstChar(userName)}</span>
            </div>`;
}

/**
 * Creates a HTML-Snippet to display the subtask element in the front-end
 * @param {int} subtaskIndex
 * @param {string} subtaskContent
 * @param {string} ticketID
 * @param {string} taskStatus
 * @returns a HTML Snippet to create a Subtask Element in the Front-End
 */
function renderOverlaySubtaskElement(subtaskIndex, subtaskContent, ticketID, taskStatus) {
  return `<div class="overlay-subtask-element">
                <div class="overlay-subtask-status" onclick="changeSubtaskStatus(${subtaskIndex}, '${ticketID}')">
                    ${subtaskStatus(taskStatus)}
                </div>
                <span>${subtaskContent}</span>
            </div>`;
}

/**
 * Returns a different symbol (checked oder unchecked) based on the status of the task
 * @param {string} taskStatus
 * @returns a different symbol (checked oder unchecked) based on the status of the task
 */
function subtaskStatus(taskStatus) {
  if (taskStatus === "open") {
    return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4.38818" y="4" width="16" height="16" rx="3" stroke="#2A3647" stroke-width="2"/>
                </svg>`;
  } else if (taskStatus === "closed") {
    return `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3882 11V17C20.3882 18.6569 19.045 20 17.3882 20H7.38818C5.73133 20 4.38818 18.6569 4.38818 17V7C4.38818 5.34315 5.73133 4 7.38818 4H15.3882" stroke="#2A3647" stroke-width="2" stroke-linecap="round"/>
                    <path d="M8.38818 12L12.3882 16L20.3882 4.5" stroke="#2A3647" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`;
  }
}

/**
 * Returns a HTML Element for the error message of a failed search
 * @param {string} searchTerm
 * @returns a HTML-Element
 */
function renderFailedSearchBox(searchTerm) {
  return `<div class="failed-search-dialog">
            <div class="failed-search-title-and-close">
                <p class="failed-search-title">Failed Search</p>
                <div class="overlay-close-btn" onclick="toggleOverlay()">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_264917_4230" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                        <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_264917_4230)">
                        <path d="M16 17.4L11.1 22.3C10.9167 22.4834 10.6833 22.575 10.4 22.575C10.1167 22.575 9.88332 22.4834 9.69999 22.3C9.51665 22.1167 9.42499 21.8834 9.42499 21.6C9.42499 21.3167 9.51665 21.0834 9.69999 20.9L14.6 16L9.69999 11.1C9.51665 10.9167 9.42499 10.6834 9.42499 10.4C9.42499 10.1167 9.51665 9.88338 9.69999 9.70005C9.88332 9.51672 10.1167 9.42505 10.4 9.42505C10.6833 9.42505 10.9167 9.51672 11.1 9.70005L16 14.6L20.9 9.70005C21.0833 9.51672 21.3167 9.42505 21.6 9.42505C21.8833 9.42505 22.1167 9.51672 22.3 9.70005C22.4833 9.88338 22.575 10.1167 22.575 10.4C22.575 10.6834 22.4833 10.9167 22.3 11.1L17.4 16L22.3 20.9C22.4833 21.0834 22.575 21.3167 22.575 21.6C22.575 21.8834 22.4833 22.1167 22.3 22.3C22.1167 22.4834 21.8833 22.575 21.6 22.575C21.3167 22.575 21.0833 22.4834 20.9 22.3L16 17.4Z" fill="#2A3647"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="failed-search-info-text">
                <p>The word you are looking for ("${searchTerm}") could not be found on the board. Please try another search term.</p>
            </div>
            <button class="failed-search-cancel-btn" onclick="toggleOverlay()">Cancel</button>
        </div>`;
}

/**
 * Renders a move to option feature on the board-overlay. On a mobile device the user can decide in which column he wants to put the ticket.
 * @param {string} ticketID
 * @returns a HTML-Element
 */
function renderMoveToOptions(ticketID) {
  return `<div class="move-to-container">
                <p class="move-to-title">Move to ...</p>
                <div class="move-to-box-container-top">
                    <div class="move-to-box" onclick="moveToOverlay('toDo', '${ticketID}')">
                        <p>To Do</p>
                    </div>
                    <div class="move-to-box" onclick="moveToOverlay('inProgress', '${ticketID}')">
                        <p>In Progress</p>
                    </div>
                </div>
                <div class="move-to-box-container-bottom">
                    <div class="move-to-box" onclick="moveToOverlay('awaitFeedback', '${ticketID}')">
                        <p>Await Feedback</p>
                    </div>
                    <div class="move-to-box" onclick="moveToOverlay('done', '${ticketID}')">
                        <p>Done</p>
                    </div>
                </div>
                <button class="move-to-back-to-board-btn" onclick="toggleOverlay()">
                    <span>Back to board</span>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.9546 5.73855L22.9546 26.1929C22.954 26.7955 22.7143 27.3732 22.2882 27.7993C21.8622 28.2253 21.2844 28.465 20.6819 28.4656L16.1365 28.4656C15.5339 28.465 14.9562 28.2253 14.5301 27.7993C14.104 27.3732 13.8644 26.7955 13.8638 26.1929L13.8638 5.73855C13.8644 5.13597 14.104 4.55825 14.5301 4.13217C14.9562 3.70608 15.5339 3.46644 16.1365 3.46584L20.6819 3.46584C21.2844 3.46644 21.8622 3.70608 22.2882 4.13217C22.7143 4.55825 22.954 5.13597 22.9546 5.73855ZM16.1365 26.1929L20.6819 26.1929L20.6819 5.73855L16.1365 5.73855L16.1365 26.1929ZM16.1365 5.73855L16.1365 26.1929C16.1359 26.7955 15.8962 27.3731 15.4701 27.7992C15.0441 28.2253 14.4663 28.4649 13.8638 28.4655L9.31835 28.4655C8.71578 28.4649 8.13806 28.2253 7.71197 27.7992C7.28589 27.3731 7.04625 26.7954 7.04565 26.1928L7.04565 5.73852C7.04625 5.13595 7.28589 4.55823 7.71197 4.13214C8.13806 3.70606 8.71578 3.46642 9.31835 3.46582L13.8638 3.46582C14.4663 3.46642 15.0441 3.70606 15.4701 4.13214C15.8962 4.55823 16.1359 5.13597 16.1365 5.73855ZM9.31835 26.1928L13.8638 26.1929L13.8638 5.73855L9.31835 5.73852L9.31835 26.1928ZM9.31835 5.73852L9.31835 26.1928C9.31775 26.7954 9.07811 27.3731 8.65203 27.7992C8.22594 28.2253 7.64822 28.4649 7.04565 28.4656L2.50024 28.4656C1.89767 28.4649 1.31995 28.2253 0.893863 27.7992C0.467779 27.3731 0.228141 26.7954 0.227539 26.1928L0.227538 5.73852C0.22814 5.13595 0.467778 4.55823 0.893862 4.13214C1.31995 3.70606 1.89767 3.46642 2.50024 3.46582L7.04565 3.46582C7.64822 3.46642 8.22594 3.70606 8.65203 4.13214C9.07811 4.55823 9.31775 5.13595 9.31835 5.73852ZM2.50024 26.1928L7.04565 26.1928L7.04565 5.73852L2.50024 5.73852L2.50024 26.1928Z" fill="#CDCDCD"/>
                        <path d="M29.7727 5.7388L29.7727 26.1931C29.7721 26.7957 29.5324 27.3734 29.1064 27.7995C28.6803 28.2256 28.1026 28.4652 27.5 28.4658L22.9546 28.4658C22.352 28.4652 21.7743 28.2256 21.3482 27.7995C20.9221 27.3734 20.6825 26.7955 20.6819 26.1929L20.6819 5.73855C20.6825 5.13597 20.9221 4.5585 21.3482 4.13242C21.7743 3.70633 22.352 3.4667 22.9546 3.46609L27.5 3.46609C28.1026 3.4667 28.6803 3.70633 29.1064 4.13242C29.5324 4.5585 29.7721 5.13622 29.7727 5.7388ZM22.9546 26.1929L27.5 26.1931L27.5 5.7388L22.9546 5.73855L22.9546 26.1929Z" fill="#CDCDCD"/>
                    </svg>
                </button>
            </div>`;
}
