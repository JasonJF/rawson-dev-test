import React from 'react'
import ProgressBarWrapper from './ProgressBarWrapper'

export default function ValuationsSummary() {
    return (
        <div className="container card p-3 shadow-sm my-3">
          <div className="row px-1 mx-1">
            <div className="col container-fluid">
              <div className="row">
                <div className="col my-auto">
                  <h1 className="my-auto totalCountNumber">21</h1>
                </div>
                <div className="col my-auto">
                  <p className="text-nowrap my-auto legendItemText">Total valuations</p>
                </div>
              </div>
            </div>
            <div className="col-sm-9 m-auto">
              <ProgressBarWrapper/>
            </div>
          </div>
        </div>
      );
}
