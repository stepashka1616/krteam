document.getElementById('add-review-btn').addEventListener('click', function() {
    let reviewText = prompt('Введіть ваш відгук:');
    if (reviewText) {
        addReview(reviewText);
        
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }
});

window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    savedReviews.forEach(review => addReview(review));
};

function addReview(text) {
    let reviewsContainer = document.getElementById('reviews');
    let reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        removeReview(reviewDiv, text);
    };

    reviewDiv.appendChild(deleteBtn);
    reviewsContainer.appendChild(reviewDiv);

    setTimeout(() => {
        reviewDiv.classList.add('show');
    }, 10);
}

function removeReview(reviewElement, text) {
    reviewElement.classList.add('hide');
    setTimeout(() => {
        reviewElement.remove();
        
        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews = savedReviews.filter(review => review !== text);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }, 500);
}
