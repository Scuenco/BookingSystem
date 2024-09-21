const Nav = (prop) => {
  return(
    <nav>
      <div>
        <ul className={prop.className}>
          <li><a className="nav-link" href="">Home</a></li>
          <li><a className="nav-link" href="">About</a></li>
          <li><a className="nav-link" href="">Menu</a></li>
          <li><a className="nav-link" href="">Reservations</a></li>
          <li><a className="nav-link" href="">Order Online</a></li>
          <li><a className="nav-link" href="">Login</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;