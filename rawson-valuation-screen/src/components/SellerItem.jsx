import React from 'react'

export default function SellerItem(props) {

    let sellers = props.value.cell.value;
    return (
        <div className="sellerContainer d-flex">
            <p className="text-wrap">{sellers}</p>
        </div>
    );
}
