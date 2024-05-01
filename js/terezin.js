document.addEventListener('DOMContentLoaded', animationStop());

function animationStop(){
const btn = document.querySelector('.desbtn');
    function stopAnimation() {
        btn.style.animation = 'none';
    }
    btn.addEventListener('mouseenter', stopAnimation);
}

