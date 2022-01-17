import React, {useState, useEffect} from 'react'
import './productlist.css'

import {DataGrid} from '@material-ui/data-grid'
import { DeleteOutline, VisibilityOutlined } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../redux/apiCalls';

export default function ProductList() {

    // const [products, setProducts] = useState([]);
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch();


    // useEffect(()=>{
    //     const getProducts = async ()=>{
    //         try{
    //             const res = await axios.get( "http://127.0.0.1:8000/api/products/" );
    //             setProducts(res.data)
    //             // console.log(res)
    //         }catch(err){}
    //     };
    //     getProducts()
    // }, [products])

    useEffect(()=>{
        getProducts(dispatch)
    }, [dispatch])

    // console.log(dispatch)


    // const [data, setData] = useState(products);
    
    const handleDelete = (id) =>{
        // setProducts(products.filter((item) => item.id !== id));
        deleteProduct(id, dispatch)
    }

    
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 95 },


        { field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
                return(
                    <div className="productListProduct">
                        <img className="productListImg" src={params.row.image} alt="" />

                        {params.row.name}
                    </div>
                )
            } 
        },
        
        // {
        //   field: 'product',
        //   headerName: 'product',
        //   width: 220,
        // },

        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 120,
        },
        {
            field: 'deleted_price',
            headerName: 'Deleted Price',
            type: 'number',
            width: 150,
        },

        { field: 'category', headerName: 'Category', width: 180, renderCell: (params) => {
            return (
                <div className="productListLink">
                      <Link to={"/category/"+params.row.category}>
                          {/* <VisibilityOutlined /> */}

                          {params.row.category}
                          
                      </Link>
                </div>
                
            )
        }
     },
        { field: 'in_stock', headerName: 'In Stock', width: 180 },
        { field: 'is_recommended', headerName: 'Is Recommended', width: 180 },
        { field: 'is_popular', headerName: 'Is Popular', width: 180 },

        {
          field: 'actions',
          headerName: 'Actions',
          width: 190,
          renderCell: (params) => {
              return (
                  <div className="action-btns">
                        <Link to={"/product/"+params.row.id}>
                            {/* <VisibilityOutlined /> */}

                            <button className="productListEdit btn btn-sm btn-label-success btn-bold">View</button>
                            
                        </Link>
                        <DeleteOutline className="productListDeleteItem" onClick={()=>handleDelete(params.row.id)}/>
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
                        <h4 className="mb-0 font-size-18">Products</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                                <li className="breadcrumb-item active">Products</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card">
                <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={products}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection 
                    disableSelectionOnClick
                />
                </div>
            </div>
        </>
    )
}
