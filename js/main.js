// your javascript here
class Order {
    constructor(name, subTotal, amount) //constructor build
    {
        this.orderName = name;
        this.orderSub = subTotal;
        this.orderAmount = amount;
    }
}

$(function(){
    $('button[name="orderCalc"]').click(function(){
        var Amount = [];            
        $('input[name^=cardAmount]').each(function(){
            Amount.push($(this).val());
        });

        var Name = [];            
        $('input[name^=cardName]').each(function(){
            Name.push($(this).val());
        });

        var Price = [];            
        $('input[name^=cardPrice]').each(function(){
            Price.push($(this).val());
        });

        console.log(Amount);
        console.log(Price);
        console.log(Name);

        var Total = 0;
        var subTotal = 0;
        var sCode ="";
        var orderCount = 0;
        var Orders = [];
        for(var i=0; i<=Amount.length;i++){

            if(Amount[i]!="" && parseInt(Amount[i]) >0){
                subTotal =  parseInt(Amount[i]) * parseFloat(Price[i]);
                Total += subTotal;
                sCode += Amount[i] + Name[i].split(" ").join('');
                orderCount++;
                var orderItem = new Order(Name[i],subTotal,Amount[i]);
                Orders.push(orderItem);
            }
            // console.log(new Order(1,2,3));
            // console.log(Orders);
            // console.log(Total);
        }

        var OrderId = sCode;
        
        // function(sCode){
        //     return sCode.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
        //   }
        console.log(orderCount);

        var myOutput = "Your Order includes: <br>";
        for(var i=0; i<orderCount;i++){
            myOutput += `
            ${Orders[i].orderAmount} pieces of ${Orders[i].orderName} <br>
            SubTotal: $ ${Orders[i].orderSub.toFixed(2)}<br>
            `;
            console.log(Orders[i].orderAmount);

        }
        myOutput +=`<br>
        Total: $ ${Total.toFixed(2)}
        `;
        console.log(myOutput);
        
        document.getElementById('orderResult').innerHTML = myOutput;
        document.getElementById('Total').value = Total.toFixed(2);
        document.getElementById('OrderId').value = OrderId;

        return false;
    });
});