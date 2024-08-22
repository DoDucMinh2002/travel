import "../scss/navbar.css";
function Navbar() {
  return (
    <div class="home-box">
      <nav class="navbar">
        <div class="logo bars">
          <div class="bar">
            <i class="fa fa-bars"></i>
          </div>
          <h3>Travel</h3>
        </div>
        <div class="menu">
          <div class="close">
            <i class="fa fa-close"></i>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#travel">About</a>
            </li>
            <li>
              <a href="#">Travel Packages</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div class="login-signup">
          <a href="#">LogIn</a>
          <a href="#">SignUp</a>
        </div>
      </nav>
      <div class="content">
        <h4>Travel</h4>
        <h1>
          Let's embark on your drem <p>journey</p>
        </h1>
        <p class="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          sapiente aperiam aliquam alias necessitatibus quos cupiditate
          assumenda adipisci odio modi.
        </p>
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            type="text"
            placeholder="your journey begins with a search..."
          />
          <button>search</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
