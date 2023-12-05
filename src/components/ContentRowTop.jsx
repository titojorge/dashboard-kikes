import React, { useState } from 'react'
import ContentRowCenter from './ContentRowCenter';
import ContentRowTotals from './ContentRowTotals';
import Chart from './Chart';

function ContentRowTop(){
    return (
        <>
            <div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">KIKE Dashboard</h1>
					</div>
					{/*<!-- Content Row Movies-->*/}
					<ContentRowTotals />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}
            
        </>
    )
}

export default ContentRowTop