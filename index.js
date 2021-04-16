const fetch = require("sync-fetch");
const Page = require("./_layout/Default");

module.exports = class extends Page {
  constructor() {
    super({ title: "Home", sName: "Li Deng" });
  }
  render(sPage) {
    const oJson = fetch(
      "https://prog8110winter2021li-default-rtdb.firebaseio.com/meals.json"
    ).json();
    console.log(oJson);
    let sResult = "";
    Object.keys(oJson).map((key) => {
      const oEntity = oJson[key];
      console.log(oEntity);
      oEntity.id = key;
      sResult += `
      
          <div class="col col-sm">
            <div class="card" style="width:300px; height: 400px">  
                <img class="card-image-top" src="${oEntity.featured_image}" alt="${oEntity.title}">
                <div class="card-body">  
                    <h4 class="card-title">${oEntity.title}</h4>
                    <p class="card-text">${oEntity.full_description}</p>
                </div>
                <form action="http://localhost:3002/payment" method="post">
                    <input type="hidden" value="${oEntity.title}" />
                    <input type="tel" placeholder="enter your number" />
                    <button type="submit">Order now</button>
                </form>
            </div>    
          </div>                    
            `;
    });
    return sResult;
  }
};
