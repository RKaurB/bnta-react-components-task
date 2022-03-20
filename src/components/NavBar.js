const NavBar = () => {

    const navItems = ["Home", "Recipes", "About us"];

    const listedNavItems = navItems.map(items => {
        return <li key={items}>{items}</li>
    })

    return (
        <>
            <ul>
                {listedNavItems}
            </ul>
        </>
    )

}

export default NavBar;