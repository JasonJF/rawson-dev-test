import React from 'react'

export default function SellerItem(props) {

    let sellers = props.value.cell.value;
    // console.log(sellers);
    return (
        <div className="sellerContainer d-flex flex-column justify-content-center mx-auto">
            {sellers && sellers.map((seller) => {
               return <p className="text-center text-wrap mx-0 px-0">{seller}</p>
            })}
        </div>
    );
}
