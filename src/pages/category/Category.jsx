import React, {useEffect, useState} from 'react'
import './category.css'
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {DataGrid} from '@material-ui/data-grid'
import { DeleteOutline, VisibilityOutlined } from '@material-ui/icons';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { Publish, PublishOutlined, PublishRounded } from '@material-ui/icons';
import { updateCategory } from '../../redux/apiCalls';
import { Toaster } from 'react-hot-toast';


export default function Category() {
    const location = useLocation();
    const categoryName = (location.pathname.split("/")[2]);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [progress, setProgress] = useState()

    const dispatch = useDispatch();

    

    


    const singleCategory = useSelector((state) => state.category.categories.find((category)=> category.name === categoryName));
    
    const onUpdate = (e) => {
        e.preventDefault();
        const category = {
            name: name, 
            image:image,
            description:description,

        }
        updateCategory(singleCategory.id, category, dispatch)
    } ;

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get( `https://sage-server.herokuapp.com/api/products/?category=${categoryName}` );
                setProducts(res.data)

            }catch(err){}
        };
        getProducts()
    }, [singleCategory])


    const uploadImage = (e) => {
        e.preventDefault();
        const imageName = new Date().getTime() + image.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, imageName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
        }, 
        (error) => {

        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImage(downloadURL)
                console.log(image, "Image")
            });
        }
        );
        
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

        // { field: 'category', headerName: 'Category', width: 180 },
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
                        <DeleteOutline className="productListDeleteItem"/>
                  </div>
                  
              )
          }
        },
      ];

    //   const getCategoryRow = () =>{
    //       if(products){
    //     return products.map((prod)=>{
    
    //         return(
    //             <tr key={prod.id}>
    //                 <th>{prod.id}</th>
    //                 <td><img src={prod.image} /></td>
    //                 <td>{prod.name}</td>
    //                 <td>{prod.price}</td>
    //                 <td>{prod.deleted_price}</td>
    //                 <td>{prod.in_stock}</td>
    //                 <td>{prod.is_recommended}</td>
    //                 <td>{prod.is_popular}</td>

    //                 {/* <td>Total Price</td> */}
    //                 {/* <td>{cat.date_created}</td> */}
    //                 {/* <td>$5,350</td> */}
    //                 <td className="action-btns">
    //                     <Link to={"/product/"+ prod.id}>
    //                     <button className="productListEdit btn btn-sm btn-label-success btn-bold">View</button>
    //                     </Link>
                                           
    //                     <DeleteOutline className="categoryListDeleteItem"/>
    //                 </td>                        
                                            
    //             </tr>
    //         )
    //         })

    //     }else{
    //         return(
    //             <span>no products</span>
    //         )
    //     }
    //     }

    return (
        <>
        <Toaster/>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">{singleCategory.name}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                                <li className="breadcrumb-item"><Link to="/categories">Category</Link></li>
                                <li className="breadcrumb-item active">{singleCategory.name}</li>
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

            <div className="row">
                <div className="col-lg-7">
                    <div className="card">
                        <div className="card-body">
                        <form className="needs-validation" noValidate>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                            </div>

                            <div className="col-md-12 mb-3">
                                <label htmlFor="desc">Description</label>
                                <input type="text" className="form-control" id="desc" placeholder="Description"  onChange={(e) => setDescription(e.target.value)}/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>

                            <div className="col-md-12 mb-5">
                                <label htmlFor="image">Image</label>
                                <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.files[0])}/>

                                <button className="btn btn-primary btn-wide mt-3 py-2" onClick={uploadImage} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <PublishRounded/> Upload</button>

                                {progress &&
                                
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}}>{progress}</div>
                                    </div>
                                }

                                    {/* <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: {progress}}}>{progress}</div>
                                    </div> */}
                                {/* {progress && <span style={{color: 'red'}}> {progress} </span>} */}

                                
                            
                            </div>

                            <div className="col-md-12 mb-3">
                                <button className="btn btn-primary btn-wide" onClick={onUpdate}>Update</button>

                            </div>

                        </form>
                    </div>            
                </div>
            </div>
        </div>



            {/* <div className="row">
                <div className="col-lg-12">
                    <div className="card card-animate">
                        <div className="card-body">
                            <div className="dropdown float-right position-relative">
                                <a href="#" className="dropdown-toggle h4 text-muted" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i className="mdi mdi-dots-vertical"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="#" className="dropdown-item">Action</a></li>
                                    <li><a href="#" className="dropdown-item">Another action</a></li>
                                    <li><a href="#" className="dropdown-item">Something else here</a></li>
                                    <li className="dropdown-divider"></li>
                                    <li><a href="#" className="dropdown-item">Separated link</a></li>
                                </ul>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-borderless table-hover mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Deleted Price</th>
                                            <th>In Stock</th>
                                            <th>Is Recommended</th>
                                            <th>Is Popular</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {getCategoryRow()}

                                        
                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>   
            </div> */}
        </>
    )
}
