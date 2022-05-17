import Signin from "./signin"


function Nav(){


    return(

    <div >
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">V8 Racing Forum</a>

            <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Main Page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="profile" >Profile</a>
                    
                </li>
                <li className="nav-item" >

                    <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Login/Register</a>
                    
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Settings</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            </div>
	    </nav>

        {/* MODAL */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Signin></Signin>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
      
      <div  className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline" aria-label="Secondary navigation">
            <a className="nav-link active" aria-current="page" href="#">Avisos
            </a>
            <a className="nav-link" href="#">
            Amigos
            <span className="badge bg-light text-dark rounded-pill align-text-bottom">27</span>
            </a>
            <a  className="nav-link"  href="eletrica">Elétrica</a>
            <a className="nav-link" href="#">PowerTrain</a>
            <a className="nav-link" href="#">Aerodinâmica </a>
            <a className="nav-link" href="#">Subsistema</a>
            <a className="nav-link" href="#">Subsistema</a>
            <a className="nav-link" href="#">Subsistema</a>
            <a className="nav-link" href="#">Subsistema</a>
        </nav>
      </div>
    </div>

    )
}

export default Nav