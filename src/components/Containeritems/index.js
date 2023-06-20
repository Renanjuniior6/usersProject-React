import React from 'react'
import { ContainerItems as Container } from './styles'

function ContainerItems({children, isBlur}){

    return <Container isBlur={isBlur} >{children}</Container>
}

export default ContainerItems
