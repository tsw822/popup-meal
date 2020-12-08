const Page = require("./Page");

module.exports = class extends Page{
    render(){
        const yToday = new Date().getFullYear();
        return `
<footer>
    &copy; ${yToday} ${this.sName}
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="js/main.js"></script>
        `;
    }
}