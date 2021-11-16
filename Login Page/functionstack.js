
function f3() { 
     console.log("f3 called from f1");
    }
    function f2() { 
         console.log("f2 called from f1...");  
         f3();}
         function f1() {
               console.log("f1 called...");  f2();}
             f1();

