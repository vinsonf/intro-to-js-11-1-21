import { getRandomLocation, getRandomUser } from './api.js';
import { phonePattern } from './validations.js';
import { createAlphaButtons, createLocationButtons} from './dom-helpers.js';



// console.log(phonePattern.test('(123)888-8888'));

getRandomUser()
.then(user => {
    console.log(user)
    const phone = user.phone;
    console.log(phone);
    console.log(phonePattern.test(phone));
});

getRandomLocation().then(location => {
    console.log(location);
    createLocationButtons(location);
}) ;


createAlphaButtons();

