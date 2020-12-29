const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Richard Hildred"});
    }
    render(sPage) {
        return `
        <img src="${this.resizeImage(`${__dirname}/img/lake.jpg`, 400)}" alt="lake"/>
        ${this.requireMarked('_pages/index.md')}
        `;
    }
}