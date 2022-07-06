import React from 'react'
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgests() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
            
            
        </div>
    )
    
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("My First Clone", "Top news - this clone will be one of many!")}
        {newsArticle("My First Clone", "Top news - this clone will be one of many!")}
        {newsArticle("My First Clone", "Top news - this clone will be one of many!")}
        {newsArticle("My First Clone", "Top news - this clone will be one of many!")}
        {newsArticle("My First Clone", "Top news - this clone will be one of many!")}
    </div>
  )
}

export default Widgests