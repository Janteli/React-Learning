// <!-- Java's International name - es6 was developed in 2015 and later
// version in each yeay is upgraded
// -->

// <!-- var was only to define variable but later let and const is used in es-6.
// var is funtion scoped and kett is block scoped
// -->

const biodatas = {
    Name: 'TirthA', 
    Age :'28',
    sex:'male',
};

res = biodatas.Age
console.log(res);

// destructuring =- no need to repead biodata.Age 
const  {Age, sex} = biodatas

console.log(Age);
console.log(sex);
console.log("My name is" + sex + "My age is" + Age);
// template string is uset to replace place inverted comma etc `no "` $before var${variable}
let showvalue = `My name is ${sex}. My name is ${Age};`;

console.log(showvalue);
// parameters and arguements
function funAge (age/*parameters later value will be passed called arguements*/) {
return age;
};
funAge(18/*value is passed called arguements, value is passed to parameter age */);
console.log(funAge);

// arrow function

// etension bable, es6, vs icons
/*
install node js and npm-> package manager(check npm -v)
install react from terminal
-npm install -g create -react-app
- create-reat-app-version
- creat-react-app <projectname>

once creat -g create-react-app(globally)
to check installed create-react-app --version
actually creating app


cmd
d: -drive change 
cd folder name
*/