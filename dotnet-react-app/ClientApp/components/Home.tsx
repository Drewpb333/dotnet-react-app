import * as React from 'react';
import Table from './Table';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
        this.state = {
            rowIsSaved: false
        }
    }


    public render() {
        return <div>
            <div id="btn-menu">
                <button>Add Company</button>
            </div>
            <div className='table'>
                <Table rowIsSaved={this.state.rowIsSaved}/>
            </div>
            <footer>
                Copyright © 2019
            </footer>
        </div>;
    }
}
