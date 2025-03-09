// Task 2: Adding Employee Cards Dynamically

function addEmployeeCard(name, position) {
// main employee card container
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card'); //Set class attribute
    
    const heading = document.createElement('h3'); //Add heading for employee's name
    heading.textContent = name;
    
    const paragraph = document.createElement('h3'); //Add paragragh for employee's position
    paragraph.textContent = position;
    
    const removeButton = document.createElement('button'); //Add remove button
    removeButton.textContent = 'Remove';
    
    const editButton = document.createElement('button'); //Add edit button - task 5
    editButton.textContent = 'Edit';
    
    // appending elements to the card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);
    
    // appending card to employee container
    document.getElementById('employeeContainer').appendChild(card);
    
    // remove functionality
    removeButton.addEventListener('click', function(event) {
        // task 4
        console.log('Remove button has been clicked');
        event.stopPropagation();
        card.remove();
    });


// Task 5 Inline Editing of Employee Details

editButton.addEventListener('click', function() {
    const nameInput = document.createElement('input');
    nameInput.value = heading.textContent;

    const positionInput = document.createElement('input');
    positionInput.value = paragraph.textContent;

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    card.appendChild(positionInput);
    
    // appending new functions
    card.innerHTML = '';
    card.appendChild(nameInput);
    card.appendChild(position);
    card.appendChild(saveButton);
    card.appendChild(removeButton);

    // save button listener
    saveButton.addEventListener('click', function() {
        heading.textContent = nameInput.value;
        paragraph.textContent = positionInput.value;

        card.innerHTML = '';
        card.appendChild(heading);
        card.appendChild(paragraph);
        card.appendChild(editButton);
        card.appendChild(removeButton);
    }); // event listener for save button and inner text appending
});
}

// Test example employees
addEmployeeCard('Annabelle', 'Manager');      //employee card info
addEmployeeCard('Ariana', 'Sales Associate');
addEmployeeCard('Karen', 'General Manager')

// Task 3 Converting NodeLists to Arrays for Bulk Updates

function bulkUpdateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.style.backgroundColor = 'lightblue';
    }); // function for bulk updating to cards
}

// activating bulk update function
bulkUpdateEmployeeCards();




