import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href='#' className="nav__logo">EV-olution</a>
      <ul className="nav__menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav__contact'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar