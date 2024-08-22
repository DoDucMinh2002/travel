import '../scss/artcile.css'
function Artcile() {
  return (
    <section class="article">
      <h4 class="label">Resources</h4>
      <h2 class="heading">Latest article</h2>
      <div class="container">
        <div class="latest-article">
          <img src="img/about/hidden-game.jpg" alt="" />
          <p>Destination descovery</p>
          <h3>10 must-visit hidden game in southeasta asia</h3>
          <div class="author">
            <img src="img/messages/Team-04.jpg" alt="" />
            <p>ana davin - 9 min read</p>
          </div>
        </div>
        <div class="more-article">
          <div class="box">
            <div class="image">
              <img src="img/about/family.jpg" alt="" />
            </div>
            <div class="text">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, assumenda!
              </h3>
              <li>family travel - min read</li>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src="img/about/food-article.jpg" alt="" />
            </div>
            <div class="text">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, assumenda!
              </h3>
              <li>food and travel - min read</li>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src="img/about/budget-travel.jpg" alt="" />
            </div>
            <div class="text">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, assumenda!
              </h3>
              <li>budget travel - min read</li>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src="img/about/tips.jpg" alt="" />
            </div>
            <div class="text">
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, assumenda!
              </h3>
              <li>travel tips - min read</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Artcile;