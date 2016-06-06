import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

class WeatherList extends Component{

  average(data){
    return _.round(_.sum(data)/data.length);
  }


  renderWeather(cityData){
    const name = cityData.city.name;
    const id   = cityData.city.id;
    const temp = cityData.list.map(list=>list.main.temp);
    const pressure = cityData.list.map(list=>list.main.pressure);
    const humidity = cityData.list.map(list=>list.main.humidity);

    return(
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Sparklines data={temp}>
            <SparklinesLine color="red" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="">{this.average(temp)}</div>
        </td>
        <td>
          <Sparklines data={pressure}>
            <SparklinesLine color="green" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="">{this.average(pressure)}</div>
        </td>
        <td>
          <Sparklines data={humidity}>
            <SparklinesLine color="blue" />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <div className="">{this.average(humidity)}</div>
        </td>
      </tr>
    );
  }
  render(){
    if(!this.props.weather){
      return(<div>Search a City</div>);
    }
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>city</th>
            <th>Temprature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  // console.log(weather);
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);