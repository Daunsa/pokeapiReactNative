import ReactApexChart from 'react-apexcharts'
import React, { PureComponent } from 'react';

class ApexChart extends React.Component {
  state = {
    series: [
      {
        name: 'Series 1',
        data: [this.props.estadisticas[0], this.props.estadisticas[1], this.props.estadisticas[2], this.props.estadisticas[3], this.props.estadisticas[4], this.props.estadisticas[5]],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
        text: 'Estadisticas',
      },
      xaxis: {
        categories: ['HP', 'Ataque', 'Defensa', 'At. Especial', 'Def. Especial', 'Velocidad'],
      },
    },
  };


  render() {
    
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radar"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;