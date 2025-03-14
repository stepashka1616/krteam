document.getElementById('add-review-btn').addEventListener('click', function() {
    let reviewText = prompt('Введіть ваш відгук:');
    if (reviewText) {
        addReview(reviewText);
        
        // Збереження у localStorage
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }
});

// Завантаження збережених відгуків при завантаженні сторінки
window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(review => addReview(review));
};

// Функція для створення відгуку
function addReview(text) {
    let reviewsContainer = document.getElementById('reviews');
    let reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.textContent = text;

    // Додаємо кнопку видалення
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        removeReview(reviewDiv, text);
    };

    reviewDiv.appendChild(deleteBtn);
    reviewsContainer.appendChild(reviewDiv);

    // Додаємо ефект появи
    setTimeout(() => {
        reviewDiv.classList.add('show');
    }, 10);
}

// Видалення відгуку
function removeReview(reviewElement, text) {
    reviewElement.classList.add('hide');
    setTimeout(() => {
        reviewElement.remove();
        
        // Оновлення localStorage
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews = savedReviews.filter(review => review !== text);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }, 500); // Час має відповідати `transition` у CSS
}
