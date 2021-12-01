function Navbar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Web3 Starter Kit</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {
              props.account ?
              props.account
              :
              <a className="btn btn-primary" aria-current="page" href="#" onClick={props.connectWallet}>Connect Wallet</a>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
