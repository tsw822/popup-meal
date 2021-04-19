const Page = require("../_partials/Page");
const Head = require("../_partials/Head");
const Nav = require("../_partials/Nav");
const Header = require("../_partials/Header");
const Footer = require("../_partials/Footer");

module.exports = class extends Page {
  constructor(options) {
    super();
    Object.assign(this, options);
  }
  renderHeadHeaderNav(sPage) {
    return `
<!DOCTYPE html>
<html lang="en" class="${sPage}">
    <head>
    ${new Head(this).render()}
    <title>${this.title}</title>
    </head>
    <body>
        ${new Nav(this).render()}
        ${new Header(this).render()}        
        <main class="container">      
          <div class="row">              
    `;
  }
  renderFooter(sPage) {
    return `  
        
      </div> 
      
      <form action="http://localhost:3002/payment" method="post">

          <div class="order">

            <div class="card mt-3" style="width: 18rem;">
              <div class="card-body">
                <p class="card-title" id="orderResult">Please check your order here.</p>
                <br>
                <p class="card-text"><input type="hidden" id="OrderId" value="" /></p>
                <p class="card-text"><input type="hidden" id="Total" value="" /></p>
              </div>
            </div> 

              <div class="input-group mb-3 mt-3">
                <input class="form-control" type="tel" placeholder="Enter your phone number" />
                <div class="input-group-append">
                  <button type="button" class="btn btn-warning" type="submit">Pay Now</button>
                </div>
              </div>

          </div>
        </form> 
    </main>
    ${new Footer(this).render()}
    </body>
</html>
        `;
  }
};
