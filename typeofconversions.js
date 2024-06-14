// let aman = "bhat"
// console.log(typeof(aman));
// let udai = 12
// console.log(typeof(udai));
// {
//      let udai = true
// console.log(typeof(udai));
// }
// {
//     let udai ;
//     console.log(typeof(udai));
// }
// {
//     let udai = null
//     console.log(typeof(udai));
// }


//            [ CONVERSION TO NUMBER DATA TYPE]



// let tony = 33;
// console.log("The type of varriable tony is :-",typeof(tony));
// let avengers = Number(tony);
// console.log("After conversion to number the is value :-",avengers);
// console.log("The type after conversion to number is :-",typeof(avengers));

// {
//     let tony = "33";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }

// {
//     let tony = "33abc";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);  [IT WILL PRINT NAN]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }

// {
//     let tony = "";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);    [IT WILL PRINT  0 ]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }

// {
//     let tony  ;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);   [IT WILL PRINT UNDEFINED]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }


// {
//     let tony = null;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony); [IT WILL PRINT 0 ]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }

// {
//     let tony = true;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);  //[IT WILL PRINT  1]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }
// {
//     let tony = false;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Number(tony);  //[IT WILL PRINT  0]
//     console.log("After conversion to number the is value :-",avengers);
//     console.log("The type after conversion to number is :-",typeof(avengers));
// }



//                [ CONVERSION TO STRING DATATYPE ]




// let tony = 33;
// console.log("The type of varriable tony is :-",typeof(tony));
// let avengers = String(tony);      
// console.log("After conversion to string datatype the is value :-",avengers);
// console.log("The type after conversion to String datatype is :-",typeof(avengers));

// {
//     let tony = "33";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }

// {
//     let tony = "33abc";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);     //        [IT WILL PRINT ]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }



// {
//     let tony = "       ";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);    //        [IT WILL PRINT  nothing ]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }

// {
//     let tony  ;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);  //       [IT WILL PRINT  undefined ]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }


// {
//     let tony = null;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony); //       [IT WILL PRINT  null]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }

// {
//     let tony = true;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);  //[IT WILL PRINT  true]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }
// {
//     let tony = false;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = String(tony);  //[IT WILL PRINT  false]
//     console.log("After conversion to String datatype the is value :-",avengers);
//     console.log("The type after conversion to String datatype is :-",typeof(avengers));
// }



//                [ CONVERSION TO Boolean DATATYPE ]




// let tony = 33;  0,1 resp===> true false
// console.log("The type of varriable tony is :-",typeof(tony));
// let avengers = Boolean(tony);      
// console.log("After conversion to Boolean datatype the is value :-",avengers);
// console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));

// {
//     let tony = "33";  it will print true for all string value except ""
//                        ie, "udai","udai123","    " ,"33","33abc" ==> true
//                             "" ===> false                              
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }

//{
//     let tony = "33abc";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);     //        [IT WILL PRINT  true]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }



// {
//     let tony = "";
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);    //        [IT WILL PRINT false ]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }

// {
//     let tony  ;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);  //       [IT WILL PRINT  false ]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }


// {
//     let tony = null;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony); //       [IT WILL PRINT  false ]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }

// {
//     let tony = true;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);  //[IT WILL PRINT  true]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }
// {
//     let tony = false;
//     console.log("The type of varriable tony is :-",typeof(tony));
//     let avengers = Boolean(tony);  //[IT WILL PRINT  false]
//     console.log("After conversion to Boolean datatype the is value :-",avengers);
//     console.log("The type after conversion to Boolean datatype is :-",typeof(avengers));
// }

