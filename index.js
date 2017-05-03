$(document).ready(function(){
  const $form  = $("form#stock-search");
    function displayTable(stockJSON){
    const table = $("table");
    const query = $("#query").val();
    var link = "https://www.google.com/finance?q=NASDAQ:" + stockJSON.Symbol
    var tableData =
      `<tr>
        <td><a href=${link} target="_blank">${stockJSON.Name}</a></td>
        <td>${stockJSON.Symbol}</td>
        <td>${stockJSON.MarketCap}</td>
        <td>${stockJSON.LastPrice}</td>
        <td>${stockJSON.Volume}</td>
        <td>${stockJSON.Open}</td>
        <td>${stockJSON.High}</td>
        <td>${stockJSON.Low}</td>
      </tr>`
    table.append(tableData)
  }

  function fetchAndRenderTable(e){
    e.preventDefault();
    const query = $("#query").val();
    const url = `http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=${query}`;
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      success: displayTable
    });
  };
  $form.on('submit', fetchAndRenderTable);
});//end doc ready
