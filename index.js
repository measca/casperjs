//解决乱码
phantom.outputEncoding="GBK";

var casper = require('casper').create({
    clientScripts: ["jquery-1.12.4.js"]
});

var temp = "";

casper.start('http://ued.qunar.com/oniui/mmRouter/avalon.mmRouter.ex1.html#!/contacts');

casper.then(function() {
    this.wait(5000, function() {
        this.echo('First Page: ' + this.getTitle() + "   ");
        temp = this.evaluate(function(){
            return $(".oni-mmRouter-slide").html();
        });
        console.log(temp);
    });
    
});

casper.thenOpen('http://www.duowan.com/', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run(function (){
    console.log(temp);
    casper.done();
});