import React from 'react';

// const Greet = () => {
//     return <h1>Hello Sravanthi</h1>
// }


//Props 
// const Greet = (props) => {
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }


//destructuring props
const Greet = ({name,heroName}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}


export default Greet;