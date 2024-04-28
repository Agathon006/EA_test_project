export default () => {
    document.querySelector('#down-link').addEventListener("click", function () {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
    
    const target = document.querySelector('#events-title');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add("animate__animated", "animate__fadeInDown");
            }
        });
    });
    observer.observe(target);
}