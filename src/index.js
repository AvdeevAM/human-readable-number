module.exports = function toReadable (s){
    var dg = ['zero','one','two','three','four','five','six','seven','eight','nine']; 
    var teen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var ty = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if (s < 10){
        return dg[s];
    }
    if (s >= 10 && s < 20){
        return teen[s - 10];
    }
    str = s.toString();
    var n = str.split('').length;
    if (n == 2){
        if (s % 10 == 0){
            return ty[s / 10 - 1];
        }
        return ty[str.charAt(0) - 1] + ' ' + dg[str.charAt(1)];
    }
    if (n == 3){
        if (s % 100 == 0){
            return dg[s / 100] + ' hundred';
        }
        if (s % 10 == 0){
            return dg[Math.floor(s / 100)] + ' hundred ' + ty[(s % 100) / 10 - 1];
        }
        if (s % 100 < 10){
            return dg[Math.floor(s / 100)] + ' hundred ' + dg[s % 100];
        }
        if (s % 100 < 20){
            return dg[Math.floor(s / 100)] + ' hundred ' + teen[s % 100 - 10];
        }
        return  dg[str.charAt(0)] + ' hundred ' + ty[str.charAt(1) - 1] + ' ' + dg[str.charAt(2)];
    }
}
  

