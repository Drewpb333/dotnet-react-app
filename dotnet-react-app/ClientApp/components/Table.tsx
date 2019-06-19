import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface TableDataState {
    rows: any[];
    newRow: {};
}

export default class Table extends React.Component<{}, TableDataState> {
    constructor() {
        super();
        this.state = {
            rows: [{'name': 'MSFT', 'status': 'Pending', 'contact': 'John B.', 'performance': 'Strong'}],
            newRow: {}
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

    createNewRow() {
        return (<tr>
            <td><input name="company" onChange={this.updateNewRow}></input></td>
            <td><input name="status" onChange={this.updateNewRow}></input></td>
            <td><input name="contact" onChange={this.updateNewRow}></input></td>
            <td><input name="performance" onChange={this.updateNewRow}></input></td>
            <td><button onClick={this.createSavedRow}>Save</button></td>
        </tr>);
    }

    updateNewRow(event: { target: { name: string | number; value: any; }; }) {
        this.setState(prevState => {
            let row = {...prevState.newRow};
            (row as any)[event.target.name] = event.target.value;                                     
            return { row };                                 
        })
    }

    createSavedRow() {
        this.setState(prevState => {
            let newSavedRow = { ...prevState.newRow }; 
            let newRows = [...prevState.rows];
            newRows.push(newSavedRow);
            return newRows;
        });
        this.renderRows();
    }

    renderRows() {
        this.state.rows.forEach(row => {
            return (
                <tr>
                    <td>{row.name}</td>
                    <td>{row.status}</td>
                    <td>{row.contact}</td>
                    <td>{row.performance}</td>
                    <td><input>Edit</input><input>Delete</input></td>
                </tr>
            );
        })
    }

    render() {

        return (
            <div>
                <div id="btn-menu">
                    <button onClick={this.createNewRow}>Add Company</button>
                </div>
                <table>
                    {this.createHeading()}
                    {this.state.rows.length > 0 ? this.renderRows() : null}
                </table>
            </div>
        );
    }
}