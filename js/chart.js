Highcharts.chart('chart', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'U.S. Direct Investment to Asian Countries in 2016'
  },

  xAxis: {
      type: 'category'
  },
  yAxis: {
      title: {
          text: 'Millions of Dollors'
      }

  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '${point.y:.2f} M'
          }
      }
  },

  tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f} million<br/>'
  },

  "series": [
      {
          "name": "Sections",
          "colorByPoint": true,
          "data": [

              {
                  "name": "South Korea",
                  "y": 38493,
              },
              {
                  "name": "China",
                  "y": 97287,
              },
              {
                  "name": "Hong Kong",
                  "y": 68944,
              },
              {
                  "name": "India",
                  "y": 38634,
              },
              {
                  "name": "Japan",
                  "y": 124550,
              },
              {
                  "name": "Singapore",
                  "y": 255344,
              },
              {
                  "name": "Taiwan",
                  "y": 17031,
              }
          ]
      }
  ]
});
