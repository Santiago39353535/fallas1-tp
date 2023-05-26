import React from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';
import './layoutStyles.css';


const DefaultLayout = ({children}) => {
    return (
        <>
            <DefaultHeader />
            <main style={{minHeight:'100vh'}}>{children}</main>
            <DefaultFooter />
        </>
    )
}

export default DefaultLayout;