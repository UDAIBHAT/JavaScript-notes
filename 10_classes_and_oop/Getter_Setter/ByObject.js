const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get gettingemail(){
        return this._email.toUpperCase()
    },

    

    set settingemail(value){
        this._email = value
    }
}

const tea = Object.create(User)    // creating new instance from User object 

console.log(tea.gettingemail);            // Accessing email through `getting email function` by using get keyword       

tea.settingemail=`udaibhaxyz.com`     // Updating email feild through set email keyword 

console.log(tea._email);  // checking updated email feild 


