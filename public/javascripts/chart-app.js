var app = angular.module('simple-chart', []);

google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', function($scope, $http) {
  $http.get("https://assignment1-anujupreti.c9users.io/sample").then(function (response) {
  
    var dataArray = formatDataTable(response.data);
    
    var g_data = google.visualization.arrayToDataTable(dataArray);
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(g_data, getOptions());

  });
});

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Year', 'Artists'];
  
  data.push(header);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i]._id.toString());
    temp.push(chartdata[i].value);
    data.push(temp);
  }
  
  return data;
  
}

function getOptions()
{
     var options = {
        title: 'Number of Pieces of Art',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number of Active Artists',
          minValue: 0
        },
        vAxis: {
          title: 'Year'
        }
      };

    return options;
}