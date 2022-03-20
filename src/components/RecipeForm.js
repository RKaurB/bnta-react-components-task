const RecipeForm = () => {

    return (
        <>
            <h3>Submit a recipe!</h3>
            <form action=''></form>
                {/* <fieldset> */}
                <label>Cake name: <input type="text" name="cakeName" required /></label>
                <br/>
                {/* </fieldset> */}
                {/* <fieldset> */}
                <label>Ingredients: <input type="text" name="ingredients" required /></label>
                <br/>
                {/* </fieldset> */}
                {/* <fieldset> */}
                <label>Rating: <input type="textbox" name="rating" required /></label>
                {/* </fieldset> */}
        </>
    )
}

export default RecipeForm;