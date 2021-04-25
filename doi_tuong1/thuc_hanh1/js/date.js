let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
};
let date = new MyDate(2, 2, 2007);

//Truy cập phương thức của lớp Date như sau:
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();

alert(day +"/"+ month +"/"+ year);

date.setDay('..');
date.setMonth('..');
date.setYear('....');

day = date.getDay();
month = date.getMonth();
year = date.getYear();

alert(day +"/"+ month +"/"+ year);
