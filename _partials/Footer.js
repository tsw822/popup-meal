const Page = require("./Page");

module.exports = class extends Page {
  constructor(options) {
    super(options);
  }
  render() {
    return `
    <!-- Add a horizontal line -->
    <hr class="my-4" />

    <!--- Connect -->
    <div class="container-fluid" id="contact">
      <div class="row text-center">
        <div class="col-12">
          <h2 class="display-5">Connect with us</h2>
        </div>
        <div class="col-12 social">
          <a href="#" target="_blank"
            ><i class="fab fa-facebook" aria-hidden="true"></i
          ></a>
          <a href="#" target="_blank"
            ><i class="fab fa-instagram" aria-hidden="true"></i
          ></a>
          <a href="#" target="_blank"
            ><i class="fab fa-youtube" aria-hidden="true"></i
          ></a>
          <a href="#" target="_blank"
            ><i class="fab fa-twitter" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>
<footer>
<div class="container-fluid">
        <div class="row text-center">
          <div class="col-md-4">
            <h5>Contact us</h5>
            <hr class="border" />
            <p>888-888-8888</p>
            <p>email@example.com</p>
            <p>100 Street</p>
            <p>City, State, Postal Code</p>
          </div>
          <div class="col-md-4">
            <h5>Our Hours</h5>
            <hr class="border" />
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: closed</p>
          </div>
          <div class="col-md-4">
            <h5>Service Area</h5>
            <hr class="border" />
            <p>Sed in lacus sapien</p>
            <p>Sed in lacus sapien</p>
            <p>Sed in lacus sapien</p>
            <p>Sed in lacus sapien</p>
          </div>
          <!-- Copyright -->
          <div class="col-12">
            <hr class="socket" />
            <p>&copy; <script>document.write(new Date().getFullYear())</script> ${this.sName}</p>
          </div>
        </div>
      </div>
    
</footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
<script type="text/javascript" src="js/orderCalc.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet" href="css/main.css" />
<script src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"></script>
        `;
  }
};

//&copy; <script>document.write(new Date().getFullYear())</script> ${this.sName}
