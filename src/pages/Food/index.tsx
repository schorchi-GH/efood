import React from 'react'
import Perfil from '../Perfil'
import { useParams } from 'react-router-dom'

type RouteParams = {
    id: string
}

const Food = () => {
    const { id } = useParams<RouteParams>()
    return (
        <main>
            <Perfil />
            <h1>Prato id: {id}</h1>
        </main>
    )
}

export default Food
