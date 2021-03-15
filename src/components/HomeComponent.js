import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Desc(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>General Property Description</h2>
                        <p>Single story apartment complex located 3 mins from Lakewood Towne Center and 5 mins from Lakewood Transit Park
                            and Ride. Next to bus line on 108th Street. Each unit is allocated 1 parking space.
                        </p>
                        <p>Each unit has both front and back door.  
                            There is a secured laundry room with coin operated washer/dryer and sink for hand wash items.
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Home;   