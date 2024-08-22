import '../scss/destination.css'
function Destination() {
  return (
    <section class="destination" id="destination">
      <h4 class="label">Destinations</h4>
      <div class="container">
        <div class="container-box">
          <h2 class="heading">City Escape And Nature Retreats</h2>
          <div class="content-destination">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              exercitationem necessitatibus architecto, obcaecati aut quo odio
              excepturi nesciunt quam quis deserunt eveniet nemo non nihil
              nostrum. Repellendus vel rem eaque.
            </p>
            <a href="#">
              explore more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="gallery">
          <div class="box">
            <img src="img/destinations/destinations-5.jpg" alt="" />
            <div class="text">
              <h2>east nusa tenggara</h2>
            </div>
          </div>
          <div class="box">
            <img src="img/destinations/destinations-1.jpg" alt="" />
            <div class="text">
              <h2>bali</h2>
            </div>
          </div>
          <div class="box">
            <img src="img/destinations/destinations-2.jpg" alt="" />
            <div class="text">
              <h2>bali</h2>
            </div>
          </div>
          <div class="box">
            <img src="img/destinations/destinations-3.jpg" alt="" />
            <div class="text">
              <h2>east java</h2>
            </div>
          </div>
          <div class="box">
            <img src="img/destinations/destinations-4.jpg" alt="" />
            <div class="text">
              <h2>west papua</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Destination;
