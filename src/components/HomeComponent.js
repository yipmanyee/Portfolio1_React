import React from 'react';

function Home(props) {
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                    <div className="col">
                    <h2>General Property Description</h2>
                        <p>Single story apartment complex located 3 mins from <strong>Lakewood Towne Center</strong> and 5 mins from <strong>Lakewood Transit Park
                            and Ride</strong>. Next to bus line on 108th Street. Each unit is allocated 1 parking space.
                        </p>
                        <p>Each unit has both front and back door.  
                            There is a secured laundry room with coin operated washer/dryer and sink for hand wash items.
                        </p>
                </div>
                
                <img src="/assets/images/K_Front.jpg" className="img-fluid" alt="front"></img>
                
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home;   