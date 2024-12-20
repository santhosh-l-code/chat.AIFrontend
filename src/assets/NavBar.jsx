
function NavBar(){
    return (
        <header className='header'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Chat.AI</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a> */}
          {/* <a class="nav-link" href="#">Pricing</a> */}
          {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </div>
      </div>
    </div>
  </nav>
  </header>
    )
}

export default NavBar;