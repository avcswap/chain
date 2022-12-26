block=[
function(req,res,data){
    
},
function(req,res){
res.rpc={
    jsonrpc:'2.0',
    id:1,
    result:0
}
req.on('data',(chunk)=>{
    
})
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end(JSON.stringify(res.rpc));
}]

require('http').createServer(block[block.length-1]).listen(3000,'localhost',()=>{
console.log('server on http://localhost:3000')
});