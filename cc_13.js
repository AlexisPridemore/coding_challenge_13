// Task 2: Adding Employee Cards Dynamically

function createEmployeeCard(name, position) {
//main employee card container

    const employeeCard = document.createElement('div');
    employeeCard.setAttribute('class', 'employee-card');
    //Build employee card

    const heading = document.createElement("h2");
    heading.textContent = name;
    //Create heading for employee name

    const paragraph = document.createElement("h2");
    paragraph.textContent = position;
    //Create paragraph for employee position

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    //Create remove button

    const editButton = document.createElement('button'); //Adding edit button -Task 5
    editButton.textContent = 'Edit';

    //Add event listener to remove the employee card

    employeeCard.appendChild(heading);
    employeeCard.appendChild(paragraph);
    employeeCard.appendChild(removeButton);
    employeeCard.appendChild(editButton);

    //Append elements
    document.getElementById('employeeContainer').appendChild(card);
} //Append employee card to container

removeButton.addEventListener("click", function(event) {
    console.log('Remove button has been clicked');
    event.stopPropagation();
    card.remove();
});  //Task 4

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
addEmployeeCard('Annabelle', 'Manager');
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




