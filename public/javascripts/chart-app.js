var app = angular.module('app', []);

app.controller('dataController', function($scope, $http) {
  $http.get("https://assignment1-anujupreti.c9users.io/sample").then(function (response) {
    
       google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
      });
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
  
  console.table(data);
  
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
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

/*

var app = angular.module('simple-chart', []);

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
    $http.get('/data').success(function(data){
        google.load("visualization", "1", {packages:["corechart"]});
        
        var dataArray = formatDataForView(data);
        var table = google.visualization.arrayToDataTable(dataArray, false);
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        
        var options = {
            'title': 'art',
            hAxis: { format:''}
        }; 
        
        chart.draw(table, options);
        
    });
}]);

function formatDataForView(data) {
  
    var dataArray = [], keysArray = [];
    
    //get the keys
    for(var prop in data[0]) {
      keysArray.push(prop);
    }
    
    dataArray.push(keysArray);
    
    //get the values
    data.forEach(function(value){
        var dataEntry = [];
        for(var prop in value) {
          dataEntry.push(parseInt(value[prop], 0));
        }
        dataArray.push(dataEntry);
    });
  
    return dataArray;
}

*/