import { HeaderEl, Menu } from "./styled"

function Header() {
  return (
    <HeaderEl>
      <Menu>
        <h2>MyFinances</h2>
        <button>Login</button>
      </Menu>
    </HeaderEl>
  )
}

export default Header