import Register from "../../../pages/register";

const RegisterModal = () => {
    return (
        <div className="modal fade" id="Register" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Register />
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#Login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal;