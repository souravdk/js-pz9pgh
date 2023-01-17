// Import stylesheets
import './style.css';

// Arrow Funnctions
const hello = (name) => {
  console.log(name);
}
hello('Rosy');

// Immidiately invoked functions
((a , b) => {
  console.log(a*b);
})(2,3);

(function(arg1, arg2) {
  console.log(arg1 +"-"+arg2);
})("hello", "world");
