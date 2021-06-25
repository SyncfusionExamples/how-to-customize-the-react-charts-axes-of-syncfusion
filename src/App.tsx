import React from 'react';
import './App.css';
import {chartData} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category,
  Inject, LineSeries, AxesDirective, AxisDirective} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div style={{textAlign:"center", margin:'5% 25%'}}>
    {/* use isInversed:true to render axis in inversed manner*/}
      <ChartComponent title="Weather Forecast Data"
      primaryXAxis={{valueType:"Category", title:"Days of the week", crossesAt:30, crossesInAxis:"yAxis1"}}
      primaryYAxis={{title:"Temperature", labelFormat:'{value}F', crossesAt:2,
      majorGridLines:{color:"green", width:1}, majorTickLines:{color:'red', width:2},
      }}>
        <Inject services={[ColumnSeries, Category, LineSeries]}></Inject>
        <AxesDirective>
          <AxisDirective name="yAxis1" opposedPosition={true} labelFormat="{value}°C" majorTickLines={{color:"blue"}}></AxisDirective>
        </AxesDirective>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" dataSource={chartData} name="Germany"
          xName="day" yName="value"></SeriesDirective>
          <SeriesDirective type="Line" dataSource={chartData} name="Japan"
          xName="day" yName="value1" marker={{visible:true}} yAxisName="yAxis1"></SeriesDirective>
          <SeriesDirective></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

