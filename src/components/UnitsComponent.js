import React from 'react';
import { Table } from 'reactstrap';

const Units = (props) => {
    return (
        <div>
            <h2>Bedroom Information</h2>
        <Table striped>
            <thead>
                <tr>
                    <th>No of Bedroom</th>
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
                    <th scope="row">2 Bedroom</th>
                    <td>2 Bath</td>
                    <td>6</td>
                    <td>800 Sq Feet</td>
                </tr>
            </tbody>
        </Table>
        </div>
    );
}

export default Example;