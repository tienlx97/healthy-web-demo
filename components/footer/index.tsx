import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>M</span>eliora
            </h6>
            <p>
              Bằng chính sự trách nhiệm của mình. Chúng tôi cam kết tạo ra nhiều
              giá trị tốt đẹp hơn tới khách hàng, các bên tham gia vào chuỗi giá
              trị sản phẩm, chú trọng an toàn thực phẩm và hướng đến sự phát
              triển bền vững, toàn diện của con người, môi trường và xã hội.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Mua hàng trực tuyến</li>
              <li>
                <a href="#">Giao và nhận hàng</a>
              </li>
              <li>
                <a href="#">Đổi trả</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Liên hệ với chúng tôi</a>
              </li>
            </ul>
            <ul>
              <li>Thông tin</li>

              <li>
                <a href="#">Thẻ quà tặng</a>
              </li>
              <li>
                <a href="#">Địa điểm cửa hàng</a>
              </li>
              <li>
                <a href="#">Trở thành thành viên</a>
              </li>
              <li>
                <a href="#">Thư góp ý</a>
              </li>
            </ul>
            <ul>
              <li>Liên hệ</li>
              <li>
                <a href="#">meliora@shop.com</a>
              </li>
              <li>
                <a href="#">Hotline: +1900 8030</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY SLEEKLINGO.COM - © 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
