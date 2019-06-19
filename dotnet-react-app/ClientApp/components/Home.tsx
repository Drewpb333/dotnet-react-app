import * as React from 'react';
import Table from './Table';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    constructor() {
        super();
    }

    public render() {
        return <div>
            <div className='table'>
                <Table />
            </div>
            <footer>
                Copyright © 2019
            </footer>
        </div>;
    }
}
