import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

function Amenities(props) {
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
            <div className="col-4">
            <img src="/assets/images/K_Front Yard.JPG" className="img-fluid" alt="front yard"></img>
            </div>
            <div className="col-4">
            <img src="/assets/images/K_Living Room.jpeg" className="img-fluid" alt="living room"></img>
            </div>
            <div className="col-4">
            <img src="/assets/images/K_Kitchen.jpeg" className="img-fluid" alt="kitchen"></img>
            </div>
            </div>
        </div>
        <div>        
            <h1>Amenities</h1>    
            <ListGroup>
                <ListGroupItem>1 Parking Stall per unit</ListGroupItem>
                <ListGroupItem>Utilities included water, sewer and garbage. Tenant pays electrical</ListGroupItem>
                <ListGroupItem>Secured Laundry Room with coin operated</ListGroupItem>
                <ListGroupItem>Front and back door entrance</ListGroupItem>
                <ListGroupItem>Electric Stove / Oven</ListGroupItem>
                <ListGroupItem>Bathtub</ListGroupItem>
            </ListGroup>
        </div>
        </React.Fragment>
    );

}

export default Amenities;