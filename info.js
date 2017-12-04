console.info("Ints my info");

String.prototype.logAsInfo = function() {
    console.info(this.valueOf());
}

"My man".logAsInfo();