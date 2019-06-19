import * as React from 'react';
import Row from './Row';

export default class Table extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: [],
            newRow: ["","","",""],
            isRowSaved: false
        }
    }

    createHeading() {
        return (
            <tr>
                <th>Company</th>
                <th>Status</th>
                <th>Key Contact</th>
                <th>Financial Performance</th>
                <th>Edit/Delete/Save</th>
            </tr>
        );
    }

    createUnsavedRow() {
        let potentialRow = [];

        return (<tr>
            <td><input value="Company" onChange={this.updateNewRow}></input></td>
            <td><input value="Status" onChange={this.updateNewRow}></input></td>
            <td><input value="Key Contact" onChange={this.updateNewRow}></input></td>
            <td><input value="Financial Performance" onChange={this.updateNewRow}></input></td>
            <td><button onClick={this.createSavedRow}>Save</button></td>
        </tr>);
    }

    createSavedRow() {
        this.setState()
    }

    renderRows() {
        this.state.rows
    }

    render() {

        return (
            <div>
                <div id="btn-menu">
                    <button onClick={this.createRow()}>Add Company</button>
                </div>
                <table>
                    {this.createHeading()}
                    {this.state.rows.length > 0 ? this.renderRows() : null}
                </table>
            </div>
        );
    }
}