import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Hàng bán chạy</h3>
              <a href="#" className="btn btn--rounded">
                Danh mục sản phẩm
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Các loại rau sấy</h3>
              <a href="#" className="btn btn--rounded">
                Chi tiết
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Khuyến mãi khai trương</h3>
              <a href="#" className="btn btn--rounded">
                Xem thử
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Lý do chọn chúng tôi ?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>An toàn</h4>
                <p>
                  Sản phẩm đảm bảo có nguồn gốc rõ ràng được nhập khẩu từ Úc,
                  Mỹ,...Các loại rau hữu cơ có chứng nhận quốc tế.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Tiện lợi</h4>
                <p>Tất cả hình thức thanh toán dễ dàng và minh bạch. .</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Tận tâm</h4>
                <p>
                  Chăm sóc sự hài lòng của khách hàng là trách nhiệm của chúng
                  tôi .
                </p>
              </div>
            </li>

            <li>
              <i className="icon-delivery-fast"></i>
              <div className="data-item__content">
                <h4>Hoả tốc giao hàng</h4>
                <p>Dịch vụ vận chuyển giao hàng nhanh chóng.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
