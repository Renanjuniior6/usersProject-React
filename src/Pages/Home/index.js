import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, InputLabel, Input} from './styles'
import ContainerItems from '../../components/Containeritems'
import H1 from '../../components/Title'
import Button from '../../components/Button'
import ImagePeople from '../../assets/people.png'
import ImageArrow from '../../assets/arrow.svg'

function App() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    
    const {data: newUser} = await axios.post("http://localhost:3001/user", { 
      name: inputName.current.value, 
      age: inputAge.current.value 

    })
    setUsers([...users, newUser])

    navigate('/usuários')

  }

  return (
    <Container>
      <Image alt="logo" src={ImagePeople} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' type='number' />

        <Button onClick={addNewUser} >Cadastrar <img src={ImageArrow} alt="arrow"/> </Button>

      </ContainerItems>
    </Container>
  )
}

export default App
