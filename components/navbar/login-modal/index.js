import Signin from '../../pages/signin';

const LoginModal = () => {
    return (
        <div className="modal fade" id="Login" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Signin />
                    </div>
                    <div className="modal-footer">
                        <a type="button" className="nav-link" data-bs-toggle="modal" data-bs-target="#Register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;