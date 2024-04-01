
const ResizeHandler = () => {
    console.log(" window is resized ...");
}

const BetterResizeHandler = (fn, limit) => {
    let flag = true;
    return function(){
        let context = this,
            args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }

    }
}

document.addEventListener('resize', BetterResizeHandler(ResizeHandler, limit));


/* 
 Throttling is a technique that limits how often a function can be called in a given period of time. It is useful
 for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or 
 expensive operations. 
 e.g window resize, scroll, animations, fetching data etc. 

*/