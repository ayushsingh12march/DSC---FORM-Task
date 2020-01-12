import React from 'react'
import {CSVLink} from 'react-csv';

const DownloadCSV = (props)=>{
    console.log(props.details)
    return(
            <div>
            <button  className="btn btn-success"><CSVLink id="download" data={props.details} >Download CSV</CSVLink></button>
            </div>
    );
}

export default DownloadCSV