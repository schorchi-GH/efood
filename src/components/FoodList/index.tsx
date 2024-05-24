import React from 'react'
import FoodModel from '../../models/Food'
import { List, Container } from './styles'
import Food from '../../components/Food'

export type Props = {
    foods: FoodModel[]
}

const FoodList = ({ foods }: Props) => (
    <Container>
        <List>
            {foods.map(
                ({
                    id,
                    foodPhoto,
                    foodTitle,
                    foodDescription,
                    foodPhotoAlt
                }) => (
                    <li key={id}>
                        <Food
                            FoodPhoto={foodPhoto}
                            FoodTitle={foodTitle}
                            FoodDescription={foodDescription}
                            FoodPhotoAlt={foodPhotoAlt}
                        />
                    </li>
                )
            )}
        </List>
    </Container>
)

export default FoodList
