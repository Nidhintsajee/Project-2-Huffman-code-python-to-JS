//For example our input string is str='aabbbcdddd'.

function frequency(str) { 
var freqs = {};
for (var i in str) {
if(freqs[str[i]]==undefined) {
freqs[str[i]]=1; 
}
else {  
freqs[str[i]]=freqs[str[i]]+1; 
}}
return freqs; 
}
//output for the function freqs= frequency(str) is {a:2,b:3,c:1,d:4}

function sortfreq(freqs){
var tuples=[];
for( var let in freqs){
tuples.push([freqs[let],let]);
}
return tuples.sort();
}
//Output for function tuples=sortfreq(freqs) is [ [ 1, 'c' ], [ 2, 'a' ], [ 3, 'b' ], [ 4, 'd' ] ]

function buildtree(tuples) {
while(tuples.length>1){
var leasttwo = [tuples[0][1] , tuples[1][1]];
var rest = tuples.slice(2, tuples.length);
var combfreq = tuples[0][0] + tuples[1][0];
tuples = rest;
ext = [combfreq, leasttwo];
tuples.push(ext);
tuples.sort();
}
return tuples;
}

//The output from tree=buildtree(tuples) is [10, [[4, "d"], [6, [[3, [[1, "c"], [2, "a"]]],[3,"b"]]]]]


function trimtree(tree) {
return tree[0][1];
}

//output for this function tree=trimtree(tree) is [“d”, [["c", "a"], “b”]]

var codes = {};
function assigncodes(node,pat){
pat=pat || "";
if (typeof node==typeof ""){
codes[node]=pat;
}
else{
assigncodes(node[0],pat+"0");
assigncodes(node[1],pat+"1");
}
}

//output for above function assigncodes(tree) is {d: “0”, c: “100”, a: “101”, b: “11”} .

function encode(str){
var output="";
for(var ch in str){
output=output+codes[str[ch]];
}
return output
}

//The function encode(str) will return 1011011111111000000


function decode(tree,str){
output="";
p=tree;
for (var bit in str){
if (str[bit]==0){
p=p[0]
}
else{
p=p[1]
}
if (typeof p ==typeof ""){
output=output+p
p=tree
}
}
return output
}
//output is same sequence from step one..”aabbbcdddd”.

