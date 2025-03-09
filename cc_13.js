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

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    //Create remove button

    removeBtn.addEventListener("click", function(event) {
        console.log('Remove button has been clicked');
        event.stopPropagation();
        card.remove();
    });  //Task 4

    //Add event listner to remove the employee card

    employeeCard.appendChild(heading);
    employeeCard.appendChild(paragraph);
    employeeCard.appendChild(removeBtn);
    //Append elements
    document.getElementById('employeeContainer').appendChild(card);
} //Append employee card to container


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

// Task 5: Inline Editing of Employee Details



