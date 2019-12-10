import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row">
                <div className="col-md-4">
                    {`${this.props.count} Peliculas Disponibles.`}
                </div>
                <div className="col-md-4">
                    <label>Ordenar por 
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Estrenos</option>
                            <option value="highestprice">Estrenos Recientes</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label > Salas
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="1">2D</option>
                            <option value="2">3D</option>
                            <option value="3">3D MAX</option>
                           
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}
