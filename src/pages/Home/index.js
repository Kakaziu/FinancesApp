import { MdAttachMoney } from 'react-icons/md'
import Header from "../../components/Header"
import { Main } from "./styled"

function Home() {
  return (
    <>
      <Header/>
      <Main>
        <h1>MyFinances</h1>
        <p>O Melhor aplicativo para gerir e organizar sua vida financeira.</p>
        <MdAttachMoney size='90' color="green"/>
      </Main>
    </>
  )
}

export default Home