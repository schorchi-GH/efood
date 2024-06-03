import React, { useState } from 'react'
import Product from '../Restaurant'
import { Container, List } from './styles'
import { Restaurant } from '../../pages/Home'

export type Props = {
    restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
    const [destaque] = useState('Destaque da semana')
    return (
        <Container>
            <List>
                {restaurants.map((restaurants) => (
                    <Product
                        key={restaurants.id}
                        RestaurantTitle={restaurants.titulo}
                        RestaurantRate={restaurants.avaliacao}
                        RestaurantDetails={restaurants.descricao}
                        RestaurantPhoto={restaurants.capa}
                        RestaurantCategories={[
                            restaurants.tipo,
                            restaurants.destacado ? destaque : ''
                        ]}
                        RestaurantToLink={`/restaurant/${restaurants.id}`}
                    />
                ))}
            </List>
        </Container>
    )
}

export default RestaurantList
