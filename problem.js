var v1=[4,1];
var v2=[-2,8];

function ortho(v1,v2) {
var ps;
ps = (v1[0]*v2[0]) + (v1[1]*v2[1]);

   return(ps); 
}
console.log(ortho(v1,v2));

if(ortho(v1,v2)===0){
alert('The paire of vector are ortoghonal')}
    else 
{
    alert('The paire of vector are not ortoghonal')
}