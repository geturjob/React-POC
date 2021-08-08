import classes from './OrderDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../UI/Table/Table';
import { useState } from 'react';

const OrderDetails = (props) => {
    const orderDetails = useSelector(state => state.Orders.TotalOrders);

    const [selectedRows, setSelectedRows] = useState([]);

    const handleTableSelectedRow = (selectedRow, checked) => {
        if (checked) {
            setSelectedRows(preState => {
                return [
                    ...preState,
                    selectedRow
                ]
            })
        } else {
            const tempData = selectedRows.slice();
            const index = tempData.findIndex(item => item.id == selectedRow.id);
            tempData.splice(index, 1);
            setSelectedRows(tempData);
        }
    }

    return (
        <div className={classes.orderDetailsCon}>
            <Table enableBackdrop={props.enableBackdrop} 
                tableData={orderDetails}
                showSelect={true}
                showActionBtn={true}
                getSelectedRow={handleTableSelectedRow}
                selectedRows={selectedRows}></Table>

            {selectedRows.length > 0 && <div style={{ marginTop: "20px",marginBottom:"30px",fontWeight:"bold", textAlign:"center", width:'100%' }}>
                <span>Selected Rows</span>
            </div>}
            <Table tableData={selectedRows} 
                    showSelect={false} 
                    // showActionBtn={true}
                    ></Table>
        </div>
    )
}

export default OrderDetails;