// why? Why do we need to do this?

const forms = document.forms; // shortening the code // document clear

let page = 'register'; // default page / start page
goTo(page);

const storageData = localStorage.getItem('data'); // get the data from local storage

const data = storageData ? JSON.parse(storageData) : {users: []}; // json string needs to be parsed or converted to an in memory object


// forms
forms.register.addEventListener('submit', (event) => { // binding the event listener to the form
    event.preventDefault(); // prevent the default behavior of the form (refresh the page) send the data to the server
    console.log('submit register');
    register(); // call the register function
});

forms.login.addEventListener('submit', (event) => { // binding the event listener to the form event submit (when the user clicks the button)
    event.preventDefault(); // prevent the default behavior of the form (refresh the page) send the data to the server
    console.log('submit login');
    login();
});

forms.profile.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit profile');
});

forms.goTo.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit goTo');

    if (page === 'register') {
        console.log('page', page);
        goTo('login');
    } else if (page === 'login') {
        console.log('page', page);
        goTo('register');
    } else if (page === 'profile') {
        goTo('register')
    }
   
});




function login() {
    console.log('login');
    const email = forms.login.email.value; // email is the key and the value is the value of the email input
    const password = forms.login.password.value; // password is the key and the value is the value of the password input

    const user = data.users.find( user => user.email === email); // find the user with the email
    
    if (!user) {
        return alert('no user with that email. Please register');
    }
    // there must be a user with that email

    if (user.password !== password) { // if the password is not the same as the password in the database
        return forms.login.password.style.border= '5px solid red'; // change the border color to red if the password is not the same
    }




    goTo('profile'); // goTo is the function that changes the page and profile is the parameter


}

function register() {
    console.log('register');
    const user = { // create an object
        email: forms.register.email.value, // email is the key and the value is the value of the email input
        password: forms.register.password.value, // password is the key and the value is the value of the password input
    };
    data.users.push(user); // push the user object to the users array
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data)); // 
}

function goTo(p_page) {
    console.log('goTo', p_page);
    switch (p_page) { // switch statement if the page is register or login or profile
        case 'register':
            gotRegister();
            break;
        case 'login':
            goToLogin();
            break;
        case 'profile':
            goToProfile();
            break;
        default:
            goToLogin();    
    }
    page = p_page;
}

function gotRegister(){
    forms.register.style.display = 'inline-block';
            forms.login.style.display = 'none';
            forms.profile.style.display = 'none';
            forms.goTo.button.value = 'Login';
            forms.goTo.querySelector('div').innerText = 'Already Registered?';
}

function goToLogin() {
    console.log('login')
    forms.register.style.display = 'none';
    forms.login.style.display = 'inline-block';
    forms.profile.style.display = 'none';
    forms.goTo.button.value = 'Register';
    forms.goTo.querySelector('div').innerText = 'Not Registered?';
}

function goToProfile() {

    forms.register.style.display = 'none';
    forms.login.style.display = 'none';
    forms.profile.style.display = 'inline-block';
    forms.goTo.querySelector('div').innerText = 'Log Out';
    forms.goTo.button.innerText = 'Log Out';
    forms.goTo.button.value = 'Log Out';
}




const random = ['yes', 'no', 'maybe'].sort(() => Math.random() < .5 ? 1 : -1)[0];
console.log(random);

const index = 0;
switch (index) {
    case 0:
        console.log('yes');
        return 'yes'
        break;
    case 1:
        console.log('no');
        return 'no'
        break;
    case 2:
        console.log('maybe');   
        return 'maybe';
        default:
        console.log('idk');
}

