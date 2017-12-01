'use strice'
const sentences = [
    {sub: 'js', ver: 'is', obj: 'nice'},
    {sub: 'c++', ver: 'is', obj: 'good'},
];
function say({sub, ver, obj}) {
    console.log('${sub} ${ver} ${obj}')
};
for(let s of sentences) {
    say(s);
}