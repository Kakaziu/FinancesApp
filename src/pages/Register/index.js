import { useState } from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import { Container, FormRegister, InputGroup, RegisterPage } from "./styled"

function Register() {

  const navigate = useNavigate()

  const [inputName, setInputName] = useState({ value: "", error: "" })
  const [inputEmail, setInputEmail] = useState({ value: "", error: "" })
  const [inputPassword, setInputPassword] = useState({ value: "", error: "" })

  async function handleSubmit(e) {
    e.preventDefault()

    handleError(inputName.value, setInputName, "Nome")
    handleError(inputEmail.value, setInputEmail, "E-mail")
    handleError(inputPassword.value, setInputPassword, "Senha")

    if (inputName.value && inputEmail.value && inputPassword.value) {
      const data = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
      }
  
      try {
        const response = await api.post("/User", data)
  
        if (response.status === 200) {
          navigate("/")
        }
      } catch(e) {
        console.log(e)
      }
    }
  }

  function handleError(value, setFunc, camp) {
    if (value === "") setFunc({ value: "",  error: `* O campo '${camp} está vazio'`})
  }

  return (
    <RegisterPage>
      <Container>
        <div>
          <h1>MyFinances</h1>
          <p>Faça seu cadastro</p>
        </div>

        <FormRegister onSubmit={handleSubmit}>
          <InputGroup>
            <label><FaUser size="20" color='#bf1953'/></label>
            <input type='text' placeholder='Nome' onChange={(e) => setInputName({ value: e.target.value, error: "" })} value={inputName.value}/>
            <span>{inputName.error}</span>
          </InputGroup>
          <InputGroup>
            <label><IoMdMail size="20" color='#bf1953'/></label>
            <input type='email' placeholder='E-mail' onChange={(e) => setInputEmail({ value: e.target.value, error: "" })} value={inputEmail.value}/>
            <span>{inputEmail.error}</span>
          </InputGroup>
          <InputGroup>
            <label><FaLock size="20" color='#bf1953'/></label>
            <input type='password' placeholder='Senha' onChange={(e) => setInputPassword({ value: e.target.value, error: "" })} value={inputPassword.value}/>
            <span>{inputPassword.error}</span>
          </InputGroup>

          <button>Cadastrar</button>
        </FormRegister>
      </Container>
    </RegisterPage>
  )
}

export default Register