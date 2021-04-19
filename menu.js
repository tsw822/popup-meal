const fetch = require("sync-fetch");
const Page = require("./_layout/Default");

module.exports = class extends Page {
  constructor() {
    super({ title: "Home", sName: "Li Deng & Shuwen Tan" });
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
            </div>    
          </div>                    
            `;
    });
    const oJson2 = fetch(
        "https://mobile-winter--todo-default-rtdb.firebaseio.com/meals.json"
      ).json();
      console.log(oJson2);
      Object.keys(oJson2).map((key) => {
        const oEntity2 = oJson2[key];
        console.log(oEntity2);
        oEntity2.id = key;
        sResult += `
        
            <div class="col col-sm">
              <div class="card" style="width:300px; height: 400px">  
                  <img class="card-image-top" src="${oEntity2.featured_image}" alt="${oEntity2.title}">
                  <div class="card-body">  
                      <h4 class="card-title">${oEntity2.title}</h4>
                      <p class="card-text">${oEntity2.full_description}</p>
                  </div>
              </div>    
            </div>                    
              `;
      });
    return sResult;
  }
};
