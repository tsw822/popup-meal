const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Richard Hildred"});
    }
    render(sPage){
        const oJson = fetch("https://prog8110winter2021-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResponse = "";
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            sResponse += `<p>${oEntity.title}</p>`
        });
        return sResponse;
    }
}