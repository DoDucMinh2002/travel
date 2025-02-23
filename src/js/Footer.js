import "../scss/footer.css";
function Footer() {
  return (
    <footer>
      <section class="footer">
        <div class="container">
          <div class="detail">
            <h3>Travel</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              in, non praesentium soluta quis enim aperiam aliquam, rem totam
              porro, vel obcaecati modi architecto error maiores iusto quaerat
              aut eum.
            </p>
            <h5>get in touch</h5>
            <a href="#">example@mail.com</a>
            <div class="social">
              <a href="#">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div class="about-us">
            <h4>about us</h4>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">our term</a>
            </li>
            <li>
              <a href="#">
                careers <span>we're hiring!</span>
              </a>
            </li>
            <li>
              <a href="#">mission and values</a>
            </li>
            <li>
              <a href="#">partnerships</a>
            </li>
          </div>
          <div class="about-us">
            <h4>help</h4>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">booking guide</a>
            </li>
            <li>
              <a href="#">cancellation policy</a>
            </li>
            <li>
              <a href="#">site map</a>
            </li>
          </div>
          <div class="about-us">
            <h4>Resources</h4>
            <li>
              <a href="#">newsletter</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
            <li>
              <a href="#">gallery</a>
            </li>
            <li>
              <a href="#">offers</a>
            </li>
          </div>
        </div>

        <div class="copyright">
          <div>&copy;2024 - Travel, inc, all rights reserved</div>
          <div>
            <a href="#">term & conditions</a>
            <a href="#">privacy policy</a>
          </div>
        </div>
      </section>
    </footer>
  );
}
export default Footer;