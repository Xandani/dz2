let user = {
    sName: 'Davidov',
    fName: 'Ilya',
    friends: [
        friend1 = {
            sName: 'Lenin',
            fName: 'Vladimir',
            age: 15,
        },

        friend2 = {
            sName: 'Malinina',
            fName: 'Maria',
            age: 16,
        },

        friend3 = {
            sName: 'Dubrovin',
            fName: 'Bogdan',
            age: 13,
        }
    ],

    age: 14, 
}

let message = "";
let g = 0;

function showObj (object) {
    for (let key in object) {
        if ((object[key]) == user.friends) {
            g = 1;
            continue;
        }
        else {
            message = message + (JSON.stringify(key + " - " + (object[key])) + "\n" );
        }
    }
    if (g==1){
            for (let key in user.friends){
            message = message + JSON.stringify("Friend number " + (+key + 1) + " - ") + (JSON.stringify(user.friends[key]) + "\n");
        }
    }
}


showObj(user);
module.exports.message = message;