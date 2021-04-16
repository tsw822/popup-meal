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
    </main>
    ${new Footer(this).render()}
    </body>
</html>
        `;
  }
};
