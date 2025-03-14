document.getElementById('add-review-btn').addEventListener('click', function() {
    let reviewText = prompt('Введіть ваш відгук:');
    if (reviewText) {
        let reviewsContainer = document.getElementById('reviews');
        let reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.textContent = reviewText;
        reviewsContainer.appendChild(reviewDiv);

        // Збереження у localStorage
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }
});

// Завантаження збережених відгуків
window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    let reviewsContainer = document.getElementById('reviews');
    savedReviews.forEach(review => {
        let reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        reviewDiv.textContent = review;
        reviewsContainer.appendChild(reviewDiv);
    });
};