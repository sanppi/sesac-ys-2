// import add2 from "./math_es6.js"; 
// math_es6.js 파일에서 default로 export 하고 있는 식별자를 add2 라는 식별자로 받아옴.
// console.log(add2(2, 3));


//import { add } from "./math_es6.js"
// console.log(add(2, 3));


// es6 문법에서 모듈 import할 떄, 구조 분해 없이 식별자를 만들어서 받아오는 방법은 
// module 파일(math_es6.js)에 default로 export 하는 값이 있어야 함.   
import math from "./math_es6.js";
console.log(math.add(2,3)); // 오류 발생!!

// import math from "./math_es6.js";  얘는 불러오는 파일에서 디폴트로 export 하는 게 있어야 사용 가능
// import { } from "./math_es6.js";  얘는 불러오는 파일에서 export{ add , minus } 이렇게 되어 있어야 가능