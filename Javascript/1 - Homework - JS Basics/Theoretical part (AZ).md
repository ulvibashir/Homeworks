1. Explain in your own words the difference between declaring variables via `var`, `let` and `const`.

var - əsasən old-way sayılır və demək olarki işlədilmir. var ilə declare olunan dəyişənlər global dəyişənlər sayıla bilər(functionlarda xaric). var ın block-scope`u yoxdur. 

if (true) {
  var tmp = "Hey"; 
}
alert(tmp); // block-scope olmadığı üçün error çıxmayacaq.

var ilə function daxilində yaradılan dəyişənlər function-level-variable sayılır, yəni yalnız function daxilində görünə bilir. Function call olunduğu zaman ilk olaraq var dəyişənlər declare olunur (var ın kodun hansı sətrində declare olunmasından asılı deyil). Lakin onun assign olunması yalnız həmin sətirə gəldikdə baş verir.

function foo() {
  alert(tmp);      // tmp declare olunub lakin assign olunmayıb deyə undefined göstərəcək
  tmp = "Hey";     // tmp bu sətirdə assign olunacaq
  var tmp;	   // bu sətir elə functionun başlığında icra olunub.
}
sayHi();
var'ı istədiyimiz qədər yenidən declare edə bilərik, o dəyəri re-assign edəcək lakin let buna icazə vermir yalnız 1 dəfə declare olar.
----------------------------------------------------------------------
let - new-way və block-scope variable tipidir. Daha müasirdir

if(true) {
  let tmp = "Hey";
}
  alert(tmp); // error verəcək çünki bu scope`da deyil tmp dəyişəni.
----------------------------------------------------------------------
const - buda let ilə demək olar eynidi sadəcə tək fərqi yalnız birdəfə assign olunmasıdır.
constant olaraq qəbul edilir və runtime zamanı bu tip dəyişənləri yenidən assign etmək olmur.
----------------------------------------------------------------------

2. Why is declaration of a variable via `var` considered a bad tone?

Əsas səbəbi onun block-scope olmamasıdır çünki global olaraq yaradılır və lazımsız yer tutur. 