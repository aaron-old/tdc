/**
 * Created by aaron on 6/5/2017.
 */

import React from 'react';

import Banner from '../Navbar/Banner';
import ContentPane from './ContentPane';

const PageContainer = (props) => {

    return (
        <div id="pageContentWrapper" className="container-fluid">
            <Banner onClick={props.sidebarToggleClick}/>
            <ContentPane/>
        </div>
    )
};

export default PageContainer;