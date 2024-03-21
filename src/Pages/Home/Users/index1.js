import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, User } from './styles1'
import ContainerItems from '../../../components/Containeritems'
import H1 from '../../../components/Title'
import Button from '../../../components/Button'
import ImagePeople2 from '../../../assets/people2.png'
import ImageArrow from '../../../assets/arrow.svg'
import ImageTrash from '../../../assets/trash.svg'

function Users() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
   async function fetchUsers(){ 
    const {data: newUsers} = await axios.get('http://localhost:3001/user')
    setUsers(newUsers)
  }

  fetchUsers()

  }, [])

  //React Hook => useEffect (Efeito Colateral)
  //a minha aplicacão inicia (a minha pagina carregou, useEffect é chamado)
  //Quando um estado que está no array de dependencia do useEffect é alterado

  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/user/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    
    setUsers(newUsers)
  }

  function goBackPage(){
    navigate('/')
  }


  return (
    <Container>
      <Image alt="img-logo" src={ImagePeople2} />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img src={ImageTrash} alt="trash"/> </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}> <img src={ImageArrow} alt="arrow"/> Voltar </Button>


      </ContainerItems>
    </Container>
  )
}

export default Users
