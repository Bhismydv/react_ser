const Header = ({title ="Default Title"}) => {
   
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}

// Header.defaultProps = {
//     title: "Default Title"
// }

export default Header;