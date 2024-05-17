/* **************************************************************************/
/* *****************   HEADER                            ********************/
/* **************************************************************************/ 


$(document).ready(function(){
    function createHeader() {
        var headerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="./index.html" target="_self">Sport Planet</a>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="./skate.html">Skate</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active" aria-current="page" href="./roller.html">Rollers</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active" aria-current="page" href="./surf.html">Surf</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="accesoriosDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false" data-bs-toggle="popover"
                                    title="Elige tu categoría"
                                    data-bs-content="Encuentra una amplia gama de accesorios para skate, surf y rollers.">Accesorios</a>
                                <ul class="dropdown-menu" aria-labelledby="accesoriosDropdown">
                                    <li><a class="dropdown-item" href="./accesorioskate.html" target="_self">SKATE 🛹</a>
                                    </li>
                                    <li><a class="dropdown-item" href="./accesoriosurf.html" target="_self">SURF 🏄</a></li>
                                    <li><a class="dropdown-item" href="./accesorioroller.html" target="_self">PATINES 🛼</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link active" aria-current="page" href="./spots.html">Spots</a>
                            </li>
                        </ul>
                        <div class="search-container">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                        <div class="login-btn">
                        <div class="dropdown">
                            <a class="btn btn-success dropdown-toggle" href="#" role="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                Login
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="loginDropdown">
                                <li><a class="dropdown-item" href="./loginNuevo.html">Ingresar</a></li>
                                <li><a class="dropdown-item" href="./registroUser.html">Registrar</a></li>
                            </ul>
                        </div>
                    </div>

                    </div>
                </div>
            </nav>
        `;
        $('#myHeader').html(headerHTML);
        
    }
    
    createHeader();


});

/* **************************************************************************/
/* *****************   FOOTER                            ********************/
/* **************************************************************************/ 

$(document).ready(function(){
    function createFooter() {
        var footerHTML = `
            <footer class="footer mt-auto py-3 bg-dark text-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>Nuestro Contacto</h5>
                            <ul class="list-unstyled">
                                <li>Teléfono: 123-456-789</li>
                                <li>Correo electrónico: info@sportplanet.com</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Dirección</h5>
                            <p>Alvarez 2440, Viña del mar, Chile</p>
                        </div>
                        <div class="col-md-4">
                            <h5>Desarrolladores</h5>
                            <ul class="list-unstyled">
                                <li>Oskar Cubillos B.</li>
                                <li>Benjamin Marchant</li>
                                <li>Benjamin Stavrakopulos</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5>Comunidad</h5>
                            <li><a href="./trabajaconnosotros.html"> Trabaja con Nostros</a> </li>
                            <li><a href="./mapa.html"> Encuentranos</a> </li>
                           
                        </div>
                        <div class="col-md-4">
                            <h5>Profesor Guia</h5>
                            <ul class="list-unstyled">
                                <li>Ignacio Cuturrufo</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
       
            </footer>
        `;
        $('#myFooter').html(footerHTML);
        
    }
    
    createFooter();


});