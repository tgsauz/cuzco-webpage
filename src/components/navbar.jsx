import '../styles/navbar.css'


var navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        link.classList.add('active');
    });
});
function Navbar() {

    return (
        <>
            <section className="navbar section">
                <img className='icon' src='/iconocuzco.jpg'/>
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Acerca de</a></li>
                    <li><a>Contacto</a></li>
                    <li><a>Extra</a></li>
                </ul>
            </section>
        </>
    )
}

export default Navbar