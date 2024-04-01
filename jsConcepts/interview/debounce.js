
let counter = 0;

const getData = () => {
    console.log(" Hit the api " , counter++);
}

const debounce = (fn,d) => {
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
        fn.apply(context,args);
        },d);
    }
}


const betterFunction = debounce(getData, 300);


/*

 Debouncing is a programming pattern or a technique to restrict the calling of a time consuming function
 frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles 
 & API calls & improve performance. 
*/