const ul = document.getElementById('authors');
const url = 'https://api.binance.com/api/v1/exchangeInfo';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  var allsymbols = data.symbols;
  var totalsymbols = allsymbols.length;
  //var symbols = obj.symbols;
  var i;
  for(i=0;i<totalsymbols;i++){
      console.log(allsymbols[i].baseAsset+" = "+allsymbols[i].symbol);
  }  
    //console.log(totalsymbols);
  //document.getElementById("btc-price").innerHTML = data;
  
})
.catch(function(error) {
  console.log(error);
});   

