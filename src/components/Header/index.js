import { Link } from "react-router-dom"
import { HeaderEl, Menu } from "./styled"

function Header() {
  return (
    <HeaderEl>
      <Menu>
        <h2>MyFinances</h2>
        <Link to="/register">Login</Link>
      </Menu>
    </HeaderEl>
  )
}

export default Header