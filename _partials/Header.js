module.exports = class {
  render() {
    return `
        <!-- your header here -->
        <!--- Image Slider -->
    <div class="carousel slide" id="slides" data-ride="carousel">
      <ul class="carousel-indicators">
        <li class="active" data-target="#slides" data-slide-to="0"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="img/food-1.jpg" alt="Food" />
          <div class="carousel-caption">
            <h1 class="display-2">Popup meals Waterloo</h1>
            <h3 class="display-3">Welcome to our popup restaurant</h3>
            <a href="#" class="btn btn-outline-light btn-lg display-3"
              >Get Started</a
            >
          </div>
        </div>
        <div class="carousel-item">
          <img src="img/restaurant-1.jpg" alt="Restaurant 1" />
        </div>
        <div class="carousel-item">
          <img src="img/restaurant-2.jpg" alt="Food" />
        </div>
      </div>
      <a
        href="#slides"
        class="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        href="#slides"
        class="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

     <!--- Jumbotron -->
    <div class="container-fluid">
      <div class="row jumbotron text-center">
        <div class="col-lg-7 col-xl-8 pt-4">
          <h4>Order your popup meal below</h4>
        </div>
        <div class="col-lg-5 col-xl-4">
          <a href="#" target="_blank" class="btn btn-secondary btn-lg"
            >Lorem ipsum dolor sit amet</a
          >
        </div>
      </div>
    </div>
    
        `;
  }
};
