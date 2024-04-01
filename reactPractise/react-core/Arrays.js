import React, { Component } from 'react'
import Person from './Person';

class Arrays extends Component {

  render() {

    const person = [
        {
            id: '1',
            name: 'Alace',
            age: 20,
            skill : 'React'
            
        },
        {
            id: '2',
            name: 'Brain',
            age: 25,
            skill : 'Angular'
        },
        {
            id: '3',
            name: 'John',
            age: 30,
            skill : 'Vue'
        }
    ];

    const personList = person.map(person => <Person key={person.id} person={person}/>);

    return (
      <div>{personList}</div>
    )
  }
}

export default Arrays