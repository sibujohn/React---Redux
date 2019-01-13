import React from 'react'

import DetailComponent from './detail.component'
import AddComponent from './add.component'

class LineItemComponent extends React.Component{
    render(){
        return (
            <div>
                <div>Detail - Line Items</div>
                {this.props.lineItemMode === 'showDetail' && <button onClick={() => this.props.toggleLineItemMode('showAdd')}>Add</button>}
                {this.props.lineItemMode === 'showAdd' && <button onClick={() => this.props.toggleLineItemMode('showDetail')}>Save</button>}
                <div>
                    {this.props.lineItemMode === 'showDetail' && <DetailComponent selectedOrder={this.props.selectedOrder || (this.props.orders && this.props.orders[0])}></DetailComponent>}
                    {this.props.lineItemMode === 'showAdd' && <AddComponent lineItems={this.props.lineItems} searchLineItems={this.props.searchLineItems}>Save</AddComponent>}
                </div>
            </div>
        )
    }
}

export default LineItemComponent
