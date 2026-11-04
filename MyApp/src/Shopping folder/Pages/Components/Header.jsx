const Header = () => {
  return (
    <header className="headerSection">
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>

      <div className="Center">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" /> 
      </div>

      <div className="Right">
        <div className="signin">
            Sign In / Sign Up
            </div>
        <div className="cart">
            Cart
            </div>
      </div>
    </header>
  )
}

export default Header