export default function SliderPage() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      <div className="carousel-indicators">
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
        ></button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
        ></button>
        <button
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/slider1.png" className="d-block w-100" alt="slide1" />
        </div>
        <div className="carousel-item">
          <img src="/slider2.png" className="d-block w-100" alt="slide2" />
        </div>
        <div className="carousel-item">
          <img src="/slider3.png" className="d-block w-100" alt="slide3" />
        </div>
        <div className="carousel-item">
          <img src="/slider4.png" className="d-block w-100" alt="slide4" />
        </div>
        <div className="carousel-item">
          <img src="/slider5.png" className="d-block w-100" alt="slide5" />
        </div>
        <div className="carousel-item">
          <img src="/slider6.png" className="d-block w-100" alt="slide6" />
        </div>
      </div>

      <button
        type="button "
        className="carousel-control-prev "
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <div className="control-icon">
          <span className="carousel-control-prev-icon"></span>
        </div>
      </button>

      <button
        type="button "
        className="carousel-control-next "
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <div className="control-icon">
          <span className="carousel-control-next-icon "></span>
        </div>
      </button>
    </div>
  );
}
