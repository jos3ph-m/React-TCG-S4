# Section 4 - Working with Lists and Conditionals

---

## Rendering Content Conditionally

```javascript
togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({ showPersons: !doesShow });
};
```

```javascript
<button style={style} onClick={this.togglePersonsHandler}>
  Toggle Persons
</button>;
{
  this.state.showPersons ? (
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Mega Shteve")}
        changed={this.nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  ) : null;
}
```

---

## Handling Dynamic Content

We can more eligantly achieve the same result as above like so:

```javascript
if (this.state.showPersons) {
  persons = (
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Mega Shteve")}
        changed={this.nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  );
}
```

```javascript
let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Mega Shteve")}
        changed={this.nameChangedHandler}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  );
}

return (
  <div className="App">
    <h1 className="title">Hello, I'm a React App</h1>
    <p style={{ fontSize: "20px" }} className="blurb">
      And I was built for gaining a more developed grasp of React
    </p>
    <button style={style} onClick={this.togglePersonsHandler}>
      Toggle Persons
    </button>
    {persons}
  </div>
);
```

---

## Outputting lists

We can map through an array and output data using some vanilla JavaScript - EVERYTHING is JavaScript

```javascript
state = {
  persons: [
    { name: "Joey", age: 34 },
    { name: "Shteve", age: 43 },
    { name: "Audrey", age: 30 },
  ],
  otherState: "Some other value",
  showPersons: false,
};
```

```javascript
let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person) => {
        return <Person name={person.name} age={person.age} />;
      })}
    </div>
  );
}
```

Consider we want to change an individual person from our list. For this example we will delete an entry.

Using the following code, we would be able to delete whichever person element we clicked on in the DOM:

```javascript
deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({ persons: persons });
};
```

```javascript
let persons = null;

if (this.state.showPersons) {
  persons = (
    <div>
      {this.state.persons.map((person, index) => {
        return (
          <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
          />
        );
      })}
    </div>
  );
}
```

#### You should ALWAYS update state in an immutable fashion.

A better way to use the above example would be the following, which creates a copy of the array before manipulating it:

```javascript
deletePersonHandler = (personIndex) => {
  const persons = this.state.persons.slice();
  persons.splice(personIndex, 1);
  this.setState({ persons: persons });
};
```

Or with the spread operator:

```javascript
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({ persons: persons });
};
```

---

## Lists & Keys

The key prop is an important property we should add when rendering lists of data. It is a default property React expects to find. This key property helps React update lists efficiently.
