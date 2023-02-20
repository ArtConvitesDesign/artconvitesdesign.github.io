const div = document.getElementById('convite-img');
const img = document.getElementById('img-convite');
if (div != null && img != null) {
    div.addEventListener('mousemove', (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = 'scale(2)';

    })
}