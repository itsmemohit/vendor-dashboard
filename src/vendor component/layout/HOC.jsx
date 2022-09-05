import React from "react";
import Topbar from './topbar/Topbar'

const HOC = (Wcomponenet) => {
    return function Component() {
        return (
            <>
                <Topbar />
                <div >
                    <Wcomponenet />
                </div>
            </>
        );
    };
};

export default HOC;
