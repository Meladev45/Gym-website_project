

const Header = ({tittle, image, children}) => {
  return (
   <header className="header">
    <div className="header_container">
        <div className="header-bg">
            <img src={image} alt="image" />
        </div>
        <div className="header_content">
            <h2>{tittle}</h2>
            <p>{children}</p>
        </div>
    </div>
   </header>
  )
}

export default Header