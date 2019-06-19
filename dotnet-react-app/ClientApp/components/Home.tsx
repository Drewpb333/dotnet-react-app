import * as React from 'react';
import Table from './Table';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div id="btn-menu">
                <button>Add Company</button>
            </div>
            <div className='table'>
                <Table/>
            </div>
            <footer>
                Copyright @copy; 2019
            </footer>
        </div>;
    }
}
