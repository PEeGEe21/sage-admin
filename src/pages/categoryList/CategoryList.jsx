import React, {useEffect, useState} from 'react'
import './categoryList.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../redux/apiCalls';
import { DeleteOutline, VisibilityOutlined } from '@material-ui/icons';




export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    // const categories = useSelector((state) => state.category.categories)
    const dispatch = useDispatch();
    // console.log(categories)


    useEffect(()=>{
        const getCategories = async ()=>{
            try{
                const res = await axios.get( "https://sage-server.herokuapp.com/api/category/" );
                setCategories(res.data)
                // console.log(res)
            }catch(err){}
        };
        getCategories()
    }, [categories])

    const handleDelete = (id) =>{
        // setCategory(categories.filter((item) => item.id !== id));
        // deleteProduct(id, dispatch)
    }

    // useEffect(()=>{
    //     getCategories(dispatch)
    // }, [dispatch])


    const getCategoryRow = () =>{
        return categories.map((cat)=>{
    
            return(
                <tr key={cat.id}>
                    <th>{cat.id}</th>
                    <td>{cat.name}</td>
                    {/* <td>Total Price</td> */}
                    {/* <td>{cat.date_created}</td> */}
                    {/* <td>$5,350</td> */}
                    <td className="action-btns">
                        <Link to={`/category/${cat.name}`}>
                            <VisibilityOutlined className="categoryListViewItem"/> 
                        </Link>
                                           
                        <DeleteOutline className="categoryListDeleteItem" onClick={()=>handleDelete(cat.id)}/>
                    </td>                        
                                            
                </tr>
            )
            })
        }


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">Categories</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                                <li className="breadcrumb-item active">Categories</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
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
                            {/* <h4 className="card-title d-inline-block">All Projects</h4> */}

                            <div className="table-responsive">
                                <table className="table table-borderless table-hover mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>No</th>
                                            <th>Project Name</th>
                                            {/* <th>No of Meals</th> */}
                                            {/* <th>Date Created</th> */}
                                            {/* <th>Income</th> */}
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
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-end">
                    <Link to="/new-category" className="btn btn-danger btn-wide" type="submit">New Category</Link>

                        
                    </div>
                </div>
            </div>
            
        </>
    )
}

