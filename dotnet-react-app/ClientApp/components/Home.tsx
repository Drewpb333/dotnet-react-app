import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div id="btn-menu">
                <button>Add Company</button>
                <button>Edit Company</button>
                <button>Delete Company</button>
            </div>
            <p>
                Copyright 2019
            </p>
        </div>;
    }
}
