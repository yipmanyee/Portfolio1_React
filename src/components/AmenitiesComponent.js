import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import { Table } from 'reactstrap';
import ApartImages from './CarouselComponent';

function Amenities(props) {
    return(
        <React.Fragment>            
            <div className="container">
                <div className="text-center">
                    <ApartImages />
            </div>    
                
            <div>
                <div className="col">
                    <h2>Bedroom Information</h2>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Configuration</th>
                                    <th>Bath</th>
                                    <th># of Units</th>
                                    <th>Average Sq Feet</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">One Bedroom</th>
                                        <td>1 Bath</td>
                                        <td>4</td>
                                        <td>600 Sq Feet</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Two Bedroom</th>
                                        <td>2 Bath</td>
                                        <td>6</td>
                                        <td>800 Sq Feet</td>
                                    </tr>
                                </tbody>
                        </Table>
                </div>
        
                <div className="row">
                    <div className="col">        
                        <h2>Amenities</h2>    
                            <ListGroup>
                                <ListGroupItem>1 Parking Stall per unit</ListGroupItem>
                                <ListGroupItem>Utilities included water, sewer and garbage. Tenant pays electrical</ListGroupItem>
                                <ListGroupItem>Secured Laundry Room with coin operated</ListGroupItem>
                                <ListGroupItem>Front and back door entrance</ListGroupItem>
                                <ListGroupItem>Electric Stove / Oven</ListGroupItem>
                                <ListGroupItem>Bathtub</ListGroupItem>
                            </ListGroup>
                        <hr />
                    </div>
                </div>
                
            </div>
        </div>
        
        </React.Fragment>
    );
}

export default Amenities;