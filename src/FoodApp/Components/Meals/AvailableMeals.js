import classes from './AvailableMeals.module.css';
import Card from '../UI/Card.js'
import MealItem from './MealsItem/MealItem.js'

const DUMMY_MEALS = [
    {
        "id": "1",
        "price": 50,
        "description": "Carbonated soft drink",
        "name": "CocaCola"
    },
    {
        "id": "2",
        "price": 300,
        "description": "A small pizza is sometimes called a pizzetta",
        "name": "Pizza"
    }
    ,
    {
        "id": "3",
        "price": 250,
        "description": "New dish in the market",
        "name": "Garlic Bread"
    }
    ,
    {
        "id": "4",
        "price": 180,
        "description": "My personal fav",
        "name": "Chilli Patato"
    }
    ,
    {
        "id": "5",
        "price": 350,
        "description": "Special combo offer",
        "name": "Coke with Pizza"
    }
    ,
    {
        "id": "6",
        "price": 100,
        "description": "Get the sahi taste",
        "name": "Sahi Paneer"
    }
    ,
    {
        "id": "7",
        "price": 80,
        "description": "It's fizz time",
        "name": "Fizz"
    }
    ,
    {
        "id": "8",
        "price": 70,
        "description": "Pure refreshed milk",
        "name": "Amul Milk"
    }
    ,
    {
        "id": "9",
        "price": 75,
        "description": "Indian dish",
        "name": "Butter Naan"
    },
    {
        "id": "10",
        "price": 500,
        "description": "Now no wait for sunday",
        "name": "Large Pizza with garlic Bread"
    }
];

const AvailableMeals = () => {
    
    const mealList = DUMMY_MEALS.map((meal) =>(
        <MealItem
          key={meal.id}
          id={meal.id}
          {...meal}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>

    )
}

export default AvailableMeals;