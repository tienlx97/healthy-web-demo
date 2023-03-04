const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div
          style={{ backgroundImage: "url(/images/subscribe.jpg)" }}
          className="subscribe__content"
        >
          <h4>
            Đăng ký tài khoản và theo dõi trang chủ để nhận thông báo khi có ưu
            đãi
          </h4>

          <form className="subscribe__form">
            <input type="email" placeholder="Email" />
            <button type="submit" className="btn btn--rounded btn--yellow">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
