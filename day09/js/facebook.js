const forms = document.forms;

let page = 'register';

const storageData = localStorage.getItem('data');



const data = storageData ? JSON.parse(storageData) : {
    users: [],
};


// forms

forms.register.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit register');
    register();
});

forms.login.addEventListener('submit', (event) => {
    event.preventDefault();
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
    }
   
});


forms.profile.style.display = 'none';
forms.login.style.display = 'none';

function login() {
    console.log('login');
    const email = forms.login.email.value;
    const password = forms.login.password.value;

    const user = data.users.find( user => user.email === email);
    if (!user) {
        return alert('no user with that email. Please register');
    }

    if (user.password !== password) {
        return forms.login.password.style.border= '5px solid red';
    }




    if (user) {
        goTo('profile')
    } else {
        alert('Invalid email or password');
    }


}

function register() {
    console.log('register');
    const user = {
        email: forms.register.email.value,
        password: forms.register.password.value,
    };
    data.users.push(user);
    console.log(data);
    localStorage.setItem('data', JSON.stringify(data));
}

function goTo(p_page) {
    console.log('goTo', p_page);
    switch (p_page) {
        case 'register':
            forms.register.style.display = 'inline-block';
            forms.login.style.display = 'none';
            forms.profile.style.display = 'none';
            forms.goTo.button.value = 'Login';
            forms.goTo.querySelector('div').innerText = 'Already Registered?';
            page = 'register';
            break;
        case 'login':
            forms.register.style.display = 'none';
            forms.login.style.display = 'inline-block';
            forms.profile.style.display = 'none';
            forms.goTo.button.value = 'Register';
            forms.goTo.querySelector('div').innerText = 'Not Registered?';
            page = 'login';
            break;
        case 'profile':
            forms.register.style.display = 'none';
            forms.login.style.display = 'none';
            forms.profile.style.display = 'inline-block';
            page = 'profile';
            break;

    }
}