document.getElementById('add-review-btn').addEventListener('click', function() {
    let reviewText = prompt('Введіть ваш відгук:');
    if (reviewText) {
        let reviewsContainer = document.getElementById('reviews');
        let reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');
        
        let reviewTextElem = document.createElement('span');
        reviewTextElem.textContent = reviewText;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', function() {
            reviewDiv.classList.add('fade-out');
            setTimeout(() => {
                let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
                savedReviews = savedReviews.filter(r => r !== reviewText);
                localStorage.setItem('reviews', JSON.stringify(savedReviews));
                reviewDiv.remove();
            }, 500);
        });

        reviewDiv.appendChild(reviewTextElem);
        reviewDiv.appendChild(deleteBtn);
        reviewsContainer.appendChild(reviewDiv);
        
        setTimeout(() => reviewDiv.classList.add('show'), 10);

        let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        savedReviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(savedReviews));
    }
});

window.onload = function() {
    let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    let reviewsContainer = document.getElementById('reviews');
    savedReviews.forEach(review => {
        let reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review', 'show');
        
        let reviewTextElem = document.createElement('span');
        reviewTextElem.textContent = review;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Видалити';
        deleteBtn.addEventListener('click', function() {
            reviewDiv.classList.add('fade-out');
            setTimeout(() => {
                let savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
                savedReviews = savedReviews.filter(r => r !== review);
                localStorage.setItem('reviews', JSON.stringify(savedReviews));
                reviewDiv.remove();
            }, 500);
        });

        reviewDiv.appendChild(reviewTextElem);
        reviewDiv.appendChild(deleteBtn);
        reviewsContainer.appendChild(reviewDiv);
    });
};
