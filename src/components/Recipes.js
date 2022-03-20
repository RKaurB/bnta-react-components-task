const Recipes = () => {

    const cakes = [
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["sunflower oil", "oat milk", "lemon  zest", "caster sugar", "self-raising flour", "baking powder"],
            rating: 3
        },
        {
            cakeName: "Coffee Loaf",
            ingredients: ["sunflower oil", "oat milk", "dried fruit", "caster sugar", "self-raising flour", "baking powder", "strong coffee"],
            rating: 5
        },
        {
            cakeName: "Best Brownie",
            ingredients: ["sunflower oil", "oat milk", "chocolate", "brown sugar", "self-raising flour", "glace cherries", "sliced almonds"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["sunflower oil", "oat milk", "carrots", "walnuts", "sultanas", "cinnamon", "vegan cream cheese", "self-raising flour", "baking powder", "brown sugar"],
            rating: 4
        }
    ];

    const listedCakes = cakes.map(cake => {
        return (
            <>
                <h2>{cake.cakeName}</h2>
                <p><strong>Cake rating: </strong>{cake.rating}</p>
                <p><strong>Ingredients: </strong></p>
                {/* <li class="ingredients">{cake.ingredients.map(ingredient => {
                    return <li key={ingredient}>{ingredient}</li>
                    })}
                </li> */}
                <p>{cake.ingredients.join(', ')}</p>

            </>
        )
    });

    return (
        <>          
            {listedCakes}
        </>
    );

}

export default Recipes;