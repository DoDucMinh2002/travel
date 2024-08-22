import '../scss/featured.css'

function Featured() {
  return (
    <section class="featured">
      <div class="gallery-fe">
        <div class="box-fe">
          <div class="first-box">
            <h4 class="label">featured offers</h4>
            <h2 class="heading">umlock exclusive travel deals</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
              quae!
            </p>
            <a href="#">show more</a>
            <div class="image">
              <img src="img/plane.png" alt="" />
            </div>
          </div>
        </div>
        <div class="box-fe">
          <img src="img/featured/featured-1.jpg" alt="" />
          <div class="content-de">
            <h2>yuliaya hotel</h2>
            <p>gill trawangan, lombok</p>
            <div class="review-and-usd">
              <div class="review">
                <i class="bi bi-star-fill"></i> 4.9 | 853 review
              </div>
              <p>USD 3 400</p>
            </div>
          </div>
        </div>
        <div class="box-fe">
          <img src="img/featured/featured-2.jpg" alt="" />
          <div class="content-de">
            <h2>feranndo hotel</h2>
            <p>gill trawangan, lombok</p>
            <div class="review-and-usd">
              <div class="review">
                <i class="bi bi-star-fill"></i> 4.9 | 853 review
              </div>
              <p>USD 3 400</p>
            </div>
          </div>
        </div>
        <div class="box-fe">
          <img src="img/featured/featured-3.jpg" alt="" />
          <div class="content-de">
            <h2>evin's hotel</h2>
            <p>gill trawangan, lombok</p>
            <div class="review-and-usd">
              <div class="review">
                <i class="bi bi-star-fill"></i> 4.9 | 853 review
              </div>
              <p>USD 3 400</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Featured;