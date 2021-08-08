import classes from './Table.module.css';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { SetOrderForEdit } from '../../../Actions/ManageOrders';
import EditDetails from '../../OrderDetails/EditDetails';
import Model from '../Model/Model';

const Table = (props) => {
    const dispatch = useDispatch();
    const [tableState, setTableState] = useState(
        {
            tableHeaders: [],
            tableBody: []
        }
    )

    const [paginationState, setPaginationState] = useState({
        pageIndex: 0,
        itemsPerPage: 5,
        pageSizeArray: [5, 7, 10]
    })

    const[showEditBackdrop, setEditBackdrop] = useState(false);

    useEffect(() => {
        const tempTableData = props.tableData;
        const tempTableHeaders = [];
        if (props.tableData.length > 0) {
            Object.keys(tempTableData[0]).map((item, i) => {
                tempTableHeaders.push(item)
            });

            setTableState(preState => {
                return {
                    tableHeaders: tempTableHeaders,
                    tableBody: tempTableData
                }
            })
        }

    }, [props.tableData])

    const handleSelectChange = (e) => {
        const value = e.target.value;
        let newIndex = paginationState.pageIndex;
        const lowerIndex = paginationState.pageIndex * paginationState.itemsPerPage;

        if (+value > paginationState.itemsPerPage) {
            newIndex = Math.floor(lowerIndex / +value);
        }
        else {
            newIndex = Math.floor(lowerIndex / +value);
        }

        setPaginationState(preState => {
            return {
                ...preState,
                pageIndex: newIndex,
                itemsPerPage: +value
            }
        })
    }

    const handleNextClick = () => {
        setPaginationState(preState => {
            return {
                ...preState,
                pageIndex: preState.pageIndex == Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1 ? Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1 : preState.pageIndex + 1
            }
        })
    }

    const handlePrevClick = () => {
        setPaginationState(preState => {
            return {
                ...preState,
                pageIndex: preState.pageIndex == 0 ? 0 : preState.pageIndex - 1
            }
        })
    }

    const handleFirstClick = () => {
        setPaginationState(preState => {
            return {
                ...preState,
                pageIndex: 0
            }
        })
    }

    const handleLastClick = () => {
        setPaginationState(preState => {
            return {
                ...preState,
                pageIndex: Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1
            }
        })
    }

    const handleTableRowSelect = (selectedRow, checked) => {
        props.getSelectedRow(selectedRow, checked);
    }

    const handleRowEdit =(selectedRow)=>{
        dispatch(SetOrderForEdit(selectedRow));
        handleEditBackdrop();
    }

    const handleEditBackdrop=()=>{
        setEditBackdrop(!showEditBackdrop);
    }
    const handleRowDelete =(selectedRow)=>{
        const tempTableState = tableState.tableBody.slice();
        const index = tempTableState.findIndex(item => item.id == selectedRow.id);
        tempTableState.splice(index,1);
        setTableState(preState=>{
            return{
                ...preState,
                tableBody:tempTableState
            }
        })
    }

    return (
        <Fragment>
            {
                props.tableData.length > 0 &&
                <div className={classes.tableContainer}>
                    <table className={classes.table}>
                        <thead className={classes.tableheader}>
                            <tr className={classes.headerrow}>
                                {props.showSelect && <th>SELECT</th>}
                                {tableState.tableHeaders.map((item, index) => (
                                    <th key={item}>{item.toUpperCase()}</th>
                                ))}
                                {props.showSelect && <th>ACTIONS</th>}
                            </tr>
                        </thead>
                        <tbody className={classes.tablebody}>
                            {tableState.tableBody.slice(
                                paginationState.pageIndex * paginationState.itemsPerPage,
                                paginationState.pageIndex * paginationState.itemsPerPage + paginationState.itemsPerPage
                            ).map((item, index) => (
                                <tr key={item.id} className={classes.bodyrow}>
                                    {props.showSelect && <td data-label="SELECT"><input type="checkbox" checked={props.selectedRows.find((ch) => ch.id == item.id)} onChange={(e) => handleTableRowSelect(item, e.target.checked)}></input></td>}
                                    {Object.keys(item).map((data, i) => (
                                        <td data-label={data.toUpperCase()} key={i}>{item[data]}</td>
                                    ))}
                                    {props.showActionBtn && 
                                    <td data-label="ACTIONS">
                                        <button title="Edit" className={classes.button} onClick={()=> handleRowEdit(item)}>&#9998;</button>
                                        <button title="Delete" className={classes.button} onClick={()=> handleRowDelete(item)}>&#x2702;</button>
                                    </td>}</tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={classes.pagination}>
                        <div className={classes.paginationAction}>
                            <label>Items Per Page</label>
                            <select className={classes.select} onChange={handleSelectChange}>
                                {paginationState.pageSizeArray.map(item => (
                                    <option key={item} className={classes.option} value={item} id={item}>{item}</option>
                                ))}
                            </select>
                            <button title="First Page" disabled={paginationState.pageIndex == 0}
                                onClick={handleFirstClick}
                                className={`${paginationState.pageIndex == 0 ? `${classes.button} ${classes.disabled}` : `${classes.button}`}`}>&laquo;</button>
                            <button title="Previous Page" disabled={paginationState.pageIndex == 0}
                                onClick={handlePrevClick}
                                className={`${paginationState.pageIndex == 0 ? `${classes.button} ${classes.disabled}` : `${classes.button}`}`}>&lt;</button>
                            <button title="Next Page" disabled={paginationState.pageIndex ==
                                Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1}
                                onClick={handleNextClick}
                                className={`${paginationState.pageIndex == Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1 ? `${classes.button} ${classes.disabled}` : `${classes.button}`}`}>&gt;</button>
                            <button title="Last Page" disabled={paginationState.pageIndex ==
                                Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1}
                                onClick={handleLastClick}
                                className={`${paginationState.pageIndex == Math.ceil(tableState.tableBody.length / paginationState.itemsPerPage) - 1 ? `${classes.button} ${classes.disabled}` : `${classes.button}`}`}>&raquo;</button>
                        </div>
                    </div>
                </div>
            }
            {showEditBackdrop && 
            <Model onClose={handleEditBackdrop}>
                <EditDetails onClose={handleEditBackdrop}></EditDetails>
                </Model>}
        </Fragment>
    )
}

export default Table;