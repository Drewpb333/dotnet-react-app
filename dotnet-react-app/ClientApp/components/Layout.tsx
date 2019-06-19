import * as React from 'react';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            //<div className='row'>
                <div id="banner">
                    //<NavMenu />
                </div>
                <div id="main-content">
                    {this.props.children}
                </div>
            //</div>
        </div>
        //return
        //<div>
        //    <div id="banner"><h1>Prospective Company App</h1></div>
        //        <div id="main-content">
        //            { this.props.children }
        //        </div>
        //    </div>
        //</div>;
    }
}
