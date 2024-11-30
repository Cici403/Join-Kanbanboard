function init(){
    moveImage();
//    loadLoginTemplate();
}

/**
 * Let the logo move from the middle of the page to the left top corner.
 * The class 'login_moved' lets the logo move and change the size.
 * the class login_move_image_container must be removed after the move to create new contents
 */
function moveImage() {
    let image = document.getElementById('loginMovableImage');
    image.classList.toggle('login_moved');
    let position = document.getElementById('loginMoveImgContainer');
    let header = document.getElementById('login_header');
    let main = document.getElementById('loginMain');

    setTimeout(function() {
        position.classList.remove('login_move_image_container');
        header.classList.remove('login_d_none');
        main.classList.remove('login_d_none')
    }, 780);
}

/**
 * Create the login template for registered users 
 * 
 */
function loadLoginTemplate() {
    let loginPage = document.getElementById('loginContent');
    loginPage.innerHTML = "",
    loginPage.innerHTML += getUserLoginTemplate();
}

/**
 * check if the inputfield is empty than remove the error class
 * if the user doesnt inser an @ than comes the error 
 * if the user have the @ in his mail adress than also remove the error class
 */
function checkEmailInput() {
    let input = document.getElementById('loginInputMail');
    if (input.value === '') {
        input.classList.remove('login_input_error');
    } else if (!input.value.includes('@')) {
        input.classList.add('login_input_error');
    } else {
        input.classList.remove('login_input_error');
    }
}

function loadSignUpTemplate(){

}