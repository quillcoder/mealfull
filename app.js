// Get elements from the DOM
const mealNameInput = document.getElementById('meal-name');
const addMealButton = document.getElementById('add-meal');
const searchMealInput = document.getElementById('search-meal');
const mealList = document.getElementById('meal-items');

// Array to store meals
const meals = [];

// Add a meal
addMealButton.addEventListener('click', () => {
    const mealName = mealNameInput.value.trim();
    
    if (mealName !== '') {
        meals.push(mealName);
        mealNameInput.value = '';
        displayMeals();
    }
});

// Display meals
function displayMeals() {
    mealList.innerHTML = '';
    meals.forEach((meal) => {
        const li = document.createElement('li');
        li.textContent = meal;
        mealList.appendChild(li);
    });
}

// Search meals
searchMealInput.addEventListener('input', () => {
    const searchTerm = searchMealInput.value.trim().toLowerCase();
    const filteredMeals = meals.filter((meal) =>
        meal.toLowerCase().includes(searchTerm)
    );
    displayMeals(filteredMeals);
});

// Initial display of meals
displayMeals();
