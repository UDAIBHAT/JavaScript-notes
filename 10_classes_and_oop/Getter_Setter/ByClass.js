class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get gettingemail(){
        return this._email.toUpperCase()  // it is used when we are accessing value from outside the class 
                                          // their is need to return 
    }
    set email(value){
        this._email = value  // this is used to when we are setting values in it 
                            // no need to return becoz we are setting values 
                            // error will be thrown of max call stack reached if the setter method and constructor are setting same setting values at same time.
                            // and make practice to call setter varriable as _varriable and normal as varriable like email & _email
                            // here ubderscore is used to indicate private property
    }

    get gettingpassword(){
        return `${this._password}udai`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@udaibhat.ai", "abc")
console.log(hitesh.gettingemail);
console.log(hitesh.gettingpassword);

hitesh.password=`khan`
console.log(hitesh.gettingpassword);






