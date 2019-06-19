import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Prospective Company App</h1>
            <h4>Going further</h4>
            <p>
                For larger applications, or for server-side prerendering (i.e., for <em>isomorphic</em> or <em>universal</em> applications), you should consider using a Flux/Redux-like architecture.
                You can generate an ASP.NET Core application with React and Redux using <code>dotnet new reactredux</code> instead of using this template.
            </p>
        </div>;
    }
}
