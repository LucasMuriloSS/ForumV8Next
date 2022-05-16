import Signin from "./signin"


function Nav(){


    return(

    <div >
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">V8 Racing Forum</a>

            <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Main Page</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Notifications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="profile" >Profile</a>
                    
                </li>
                <li class="nav-item" >

                    <a type="button" class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Register</a>
                    
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            </div>
	    </nav>

        {/* MODAL */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Signin></Signin>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
      
      <div  class="nav-scroller bg-body shadow-sm">
        <nav class="nav nav-underline" aria-label="Secondary navigation">
            <a class="nav-link active" aria-current="page" href="#">Avisos
            </a>
            <a class="nav-link" href="#">
            Amigos
            <span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
            </a>
            <a  class="nav-link"  href="eletrica">Elétrica</a>
            <a class="nav-link" href="#">PowerTrain</a>
            <a class="nav-link" href="#">Aerodinâmica </a>
            <a class="nav-link" href="#">Subsistema</a>
            <a class="nav-link" href="#">Subsistema</a>
            <a class="nav-link" href="#">Subsistema</a>
            <a class="nav-link" href="#">Subsistema</a>
        </nav>
      </div>
    </div>

    )
}

export default Nav