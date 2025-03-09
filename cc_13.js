// Task 2: Adding Employee Cards Dynamically

function createEmployeeCard(name, position) { 

    const employeeContainer = document.getElementById('employeeContainer');

    const card = document.createElement('div');
    card.setAttribute(`class`, `employee-card`); //Setting attributes 

    const heading = document.createElement('h3'); //Add heading as employee name
    heading.textContent = name;

    const paragraph = document.createElement('p'); //Adding paragraph as Employee postition
    paragraph.textContent = position;

    const removeButton = document.createElement('button'); //Add remove button
    removeButton.textContent = 'Remove';

    const editButton = document.createElement('button'); //Add edit button for task 5
    editButton.textContent = 'Edit Employee Card'

    // Task 5 Modifications

    editButton.addEventListener('click', (event) => {
    
        const nameInput = document.createElement('input'); // create an input field for employee name when edit button is clicked
        nameInput.value = heading.textContent;
    
        const positionInput = document.createElement('input'); // create an input field for employee position when edit button is clicked
        positionInput.value = paragraph.textContent;
    
        const saveButton = document.createElement('button'); // Create save button when edit employee card is clicked
        saveButton.textContent = 'Save Changes';
    
        saveButton.addEventListener('click', (event) => { // Adding an event listener to the save button
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;
            card.removeChild(saveButton) // remove save button when save chnages is clicked
            card.removeChild(positionInput) // remove position input field when save changes is clicked
            card.removeChild(nameInput); // remove name input field when save changes is clicked
    })

    card.appendChild(nameInput); // appending name input
    card.appendChild(positionInput); // appending position input
    card.appendChild(saveButton); // appending the save button
    
    })

    //Task 4 additions
    card.addEventListener('click', event => {
        console.log(heading.textContent, "Employee card clicked")
    })

    removeButton.addEventListener('click', (event) => {
        card.remove(); // Adding an event listener to remove an employee card when it is clicked

        console.log('Employee Card Removed.'); // Log to console everytime remove button is clicked for an employee card
    

        event.stopPropagation(); // Prevent the clicks from effecting the parent container
    }); 
    
    // appending elements to the card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    employeeContainer.appendChild(card); // appending the employee card

}
// Task 3 Converting NodeLists to Arrays for Bulk Updates

const cards = document.querySelectorAll('.employee-card'); // Used query selectorAll to select all employee cards
const cardArray = [...cards]; // Converting Nodelist to an array

cardArray.forEach(card => {
card.style.backgroundColor = 'orange'; // Updated the employee cards to be orange
    });

 // Test example employees
addEmployeeCard('Annabelle', 'Manager');      //employee card info
addEmployeeCard('Ariana', 'Sales Associate');
addEmployeeCard('Karen', 'General Manager')   
    