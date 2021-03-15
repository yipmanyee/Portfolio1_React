import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const Example = (props) =>{
    return(
        <ListGroup>
            <ListGroupItem>1 Parking Stall per unit</ListGroupItem>
            <ListGroupItem>Utilities included water, sewer and garbage. Tenant pays electrical</ListGroupItem>
            <ListGroupItem>Secured Laundry Room with coin operated</ListGroupItem>
            <ListGroupItem>Front and back door entrance</ListGroupItem>
            <ListGroupItem>Electric Stove / Oven</ListGroupItem>
            <ListGroupItem>Bathtub</ListGroupItem>
        </ListGroup>
    );

}

export default Example;