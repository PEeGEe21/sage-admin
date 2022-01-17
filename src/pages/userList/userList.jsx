import React, { useState } from 'react'
import {DataGrid} from '@material-ui/data-grid'
import './userList.css'
import { DeleteOutline, VisibilityOutlined } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import {Link} from 'react-router-dom'

export default function UserList() {
    const [data, setData] = useState(userRows);
    
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'avatar', headerName: 'Avatar', width: 150, renderCell: (params) => {
                return(
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                    </div>
                )
            } 
        },
        { field: 'username', headerName: 'UserName', width: 180 },
        
        {
          field: 'email',
          headerName: 'Email',
          width: 220,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          type: 'number',
          width: 190,
        },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 190,
          renderCell: (params) => {
              return (
                  <div className="action-btns">
                        <Link to={"/user/"+params.row.id}>
                            {/* <VisibilityOutlined /> */}

                        <button className="userListEdit btn btn-sm btn-label-success btn-bold">View</button>

                        </Link>
                        <DeleteOutline className="userListDeleteItem" onClick={()=>handleDelete(params.row.id)}/>
                  </div>
                  
              )
          }
        },
      ];
      
      
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">Users</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                                <li className="breadcrumb-item active">Users</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card">
                <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[5]}
                    checkboxSelection 
                    disableSelectionOnClick
                />
                </div>
            </div>
            


        </>
    )
}
