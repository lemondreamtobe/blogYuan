'use strice'
const sentences = [
    {sub: 'js', ver: 'is', obj: 'nicer'},
    {sub: 'c++', ver: 'is', obj: 'gooder'},
];
function say({sub, ver, obj}) {
    console.log('${sub} ${ver} ${obj}')
};
for(let s of sentences) {
    say(s);
}