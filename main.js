console.log("Hello World!");

// Bài 1: Tính lương nhân viên

// Sơ đồ 3 khối
/*
   INPUT: lương 1 ngày, số ngày làm
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính lương = lương 1 ngày * số ngày làm
       3. log lương ra màn hình

    OUTPUT:  tổng lương   

*/ 

var salaryPerDay = 100000;
var workingDays=20;
var totalSalary= salaryPerDay * workingDays;
console.log( "BÀI 1: Tổng lương là: " + totalSalary);

// Bài 2: Tính giá trị trung bình

// Sơ đồ 3 khối
/*
   INPUT: 5 số thực
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính giá trị trung bình = tổng 5 số / 5
       3. log trung bình cộng ra màn hình

    OUTPUT:  giá trị trung bình của 5 số đó

*/ 

var float1 = 5.15; 
var float2 = 5.0; 
var float3 = 5.0; 
var float4 = 5.0; 
var float5 = 5.0; 

var average = (float1+float2+float3+float4+float5)/5;
console.log("BÀI 2: Trung bình cộng là:" + average);

// Bài 3: Quy đổi tiền

// Sơ đồ 3 khối
/*
   INPUT: tiền USD
   
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính VND = tiền USD * 235000
       3. log tiền VND ra màn hình

    OUTPUT:  giá trị tiền VND

*/ 

var USD = 5;

var VND = USD * 23500;

console.log("BÀI 3: Số tiền VND quy đổi ra là: " + VND);



// Bài 4: Tính chu vi, diện tích hình chữ nhật


// Sơ đồ 3 khối
/*
   INPUT: chiều dài, chiều rộng
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính chu vi = chiều dài + chiều rộng ; 
       3. diện tích = chiều dài * chiều rộng;
       4. log chu vi và diện tích ra màn hình

    OUTPUT:  chu vi và diện tích

*/ 

var longs = 20;
var width = 20;

var perimeter = longs + width;
var area = longs * width;

console.log("BÀI 4: Chu vi hình chữ nhật là: " + perimeter + " Diện tích hình chữ nhật là: " + area);



// Bài 5: Tính tổng 2 ký số

// Sơ đồ 3 khối
/*
   INPUT: một số có 2 chữ số
   PROCESS: (pseudo code)
       1. lấy được input (hardcode)
       2. tính tổng 2 ký số = (số đó % 10) + ( số đó /10 làm tòn xuống)
       3. log tổng 2 ký số ra màn hình

    OUTPUT:  tổng 2 ký số 

*/ 

var number = 69;
// var units = number % 10;
// var dozens = Math.floor(number/10);
var total2Digits = number % 10 + Math.floor(number/10);
console.log("BÀI 5: Số: " + number + " có tổng 2 ký số là: " + total2Digits);
