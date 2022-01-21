import React from 'react'
import ProgressBarWrapper from './ProgressBarWrapper'

export default function ValuationsSummary() {
    return (
        <div className="container card p-4 shadow-sm my-4">
          <div className="d-flex px-3 mx-1">
            <div className="d-flex col-sm-3 px-4">
              <h1 className="my-auto totalCountNumber">21</h1>
              <p className="text-nowrap my-auto legendItemText mx-3">Total valuations</p>
            </div>
          <div className="col-sm-9"> <ProgressBarWrapper/></div>
          </div>
        </div>
      );
}
