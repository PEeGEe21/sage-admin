import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Link} from 'react-router-dom'
import Chart from '../../components/chart/chart'
import { productData } from '../../dummyData'
import './product.css'

import { publicRequest } from '../../requestMethods'
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, getProducts, updateProduct } from '../../redux/apiCalls';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import app from '../../firebase';
import { Publish, PublishOutlined, PublishRounded } from '@material-ui/icons';


export default function Product() {
    
    const [image, setImage] = useState()
    const [featured1, setFeatured1] = useState()
    const [featured2, setFeatured2] = useState()
    const [featured3, setFeatured3] = useState()
    const [inputs, setInputs] = useState({})


    const [progressOne, setProgressOne] = useState()
    const [progressTwo, setProgressTwo] = useState()
    const [progressThree, setProgressThree] = useState()
    const [progressFour, setProgressFour] = useState()
    const location = useLocation();
    const productId = (location.pathname.split("/")[2]);
    const categories = useSelector((state) => state.category.categories)



    // const product = useSelector((state) => state.product.products.find((product)=> product._id === productId)
    // );
    // console.log(product)
    const [product, setProduct] = useState({});




    useEffect(() => {
        const getProduct = async() => {
            try{
                const res = await publicRequest.get("/products/" + productId)
                setProduct(res.data);
            }catch{

            }
        }
        getProduct()
    }, [productId])

    // const updateProduct = (e) => {
    //     e.preventDefault()
    //     const product = {
    //         ...inputs, 
    //         image: image, 
    //         featured_image1:featured1,
    //         featured_image2:featured2,
    //         featured_image3:featured3,
    //     }
    //     updateProduct(product, dispatch)
        
    //     console.log(product)

    // }


    // const categories = useSelector((state) => state.category.categories)
    
    // const [cat, setCat] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const uploadImage = (e) => {
        e.preventDefault();
        const imageName = new Date().getTime() + image.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, imageName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressOne(progress)
        }, 
        (error) => {
            setTimeout(() => {
                Swal.fire('Sorry!', 'An error occured', 'error');
              }, 1000);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImage(downloadURL)
                console.log(image, "Image")

            });
        }
        );
        
    }

    const uploadFeaturedImage1 = (e) => {
        e.preventDefault();
        const featured_name1 = new Date().getTime() + featured1.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, featured_name1);

        const uploadTask = uploadBytesResumable(storageRef, featured1);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressTwo(progress)
        }, 
        (error) => {
            setTimeout(() => {
                Swal.fire('Sorry!', 'An error occured', 'error');
              }, 1000);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFeatured1(downloadURL)
                console.log(featured1, "featured1")
            });
        }
        );
        
    }

    const uploadFeaturedImage2 = (e) => {
        e.preventDefault();
        const featured_name2 = new Date().getTime() + featured2.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, featured_name2);

        const uploadTask = uploadBytesResumable(storageRef, featured2);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressThree(progress)


            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            // case 'paused':
            //     console.log('Upload is paused');
            //     break;
            // case 'running':
            //     console.log('Upload is running');
            //     break;
            // default:
            // }
        }, 
        (error) => {
            setTimeout(() => {
                Swal.fire('Sorry!', 'An error occured', 'error');
              }, 1000);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            setFeatured2(downloadURL);
            console.log(featured2, "featured2")
            });
        }
        );
        
    }

    const uploadFeaturedImage3 = (e) => {
        e.preventDefault();
        const featured_name3 = new Date().getTime() + featured3.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, featured_name3);

        const uploadTask = uploadBytesResumable(storageRef, featured3);

        uploadTask.on('state_changed', 
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressFour(progress)

            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            // case 'paused':
            //     console.log('Upload is paused');
            //     break;
            // case 'running':
            //     console.log('Upload is running');
            //     break;
            // default:
            // }
        }, 
        (error) => {
            setTimeout(() => {
                Swal.fire('Sorry!', 'An error occured', 'error');
              }, 1000);
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                // console.log('File available at', downloadURL);
                setFeatured3(downloadURL);
                console.log(featured3, "featured3")
            });
        }
        );
        
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const product = {
            ...inputs, 
            image: image, 
            featured_image1:featured1,
            featured_image2:featured2,
            featured_image3:featured3,
        }
        updateProduct(productId, product, dispatch)
        
        console.log(product)

    }
    return (
        <>
        <Toaster/>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">{product.name}</h4>

                        {/* <div className="page-title-right">
                            <Link to="/new-product">
                                <button type="button" className="btn btn-success btn-wide">Create</button>
                            </Link>                     
                        </div> */}

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-5">
                        <div className="card ">
                        <div className="card-body">
            
                            <h4 className="card-title mb-4">{product.name}</h4>

                            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <img className="d-block img-fluid" src={product.image} alt="First slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* <h3 className="text-white">Second slide label</h3> */}
                                            <p>Main Image</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={product.featured_image1} alt="Second slide"/>

                                        <div className="carousel-caption d-none d-md-block">
                                            {/* <h3 className="text-white">Second slide label</h3> */}
                                            <p>Featured Image 1</p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={product.featured_image2} alt="Third slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* <h3 className="text-white">Second slide label</h3> */}
                                            <p>Featured Image 2</p>
                                        </div>
                                    </div>
                                    {product.featured_image2 &&  
                                    <div className="carousel-item">
                                        <img className="d-block img-fluid" src={product.featured_image2} alt="Third slide"/>
                                        <div className="carousel-caption d-none d-md-block">
                                            {/* <h3 className="text-white">Second slide label</h3> */}
                                            <p>Featured Image 3</p>
                                        </div>
                                    </div>
                                    }
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
            
                        </div> 
                    </div> 
                </div>

                <div className="col-xl-7">
                        <div className="card ">
                        <div className="card-body">
            
                            <h4 className="card-title mb-4">Product Info</h4>

                            <div className="productDetail">
                                <div className="productDetailItem">
                                    <span className="productItemLabel">id: </span>
                                    <span className="productItemDetail">{product.id}</span>
                                </div>

                                <div className="productDetailItem">
                                    <span className="productItemLabel">Name: </span>
                                    <span className="productItemDetail">{product.name}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Category:</span>
                                    <span className="productItemDetail">{product.category}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Price:</span>
                                    <span className="productItemDetail">$ {product.price}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Deleted Price:</span>
                                    <span className="productItemDetail">$ {product.deleted_price}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">In Stock:</span>
                                    <span className="productItemDetail">{String(product.in_stock)}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Is Recommended:</span>
                                    <span className="productItemDetail">{String(product.is_recommended)}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Is Popular:</span>
                                    <span className="productItemDetail">{String(product.is_popular)}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Date Added:</span>
                                    <span className="productItemDetail">{product.date_added}</span>
                                </div>

                            </div>
            
                        </div> 
                    </div> 
                </div>
            
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card ">
                        <div className="card-body">
            
                            <h4 className="card-title mb-4">Product Description</h4>

                            <div className="productDetail">
                                
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Short Description:</span>
                                    <span className="productItemDetail">{product.short_description}</span>
                                </div>
                                <div className="productDetailItem">
                                    <span className="productItemLabel">Description:</span>
                                    <span className="productItemDetail">{product.description}</span>
                                </div>

                            </div>
            
                        </div> 
                    </div> 
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <Chart data={productData} dataKey="Sales" grid title="Sales Performance" extra price="14500" total_number="67"/>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-md-6">
                    <div className="kt-portlet">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">
                                    Update Product
                                </h3>
                            </div>
                        </div>

                        <div className="kt-portlet__body">
                            <form className="needs-validation" noValidate>
                                <div className="form-row mb-3">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={handleChange} />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="cat">Category</label>
                                        <select id="cat" className="form-control" onChange={handleChange} name="category">
                                        {categories.map((cat)=>{
    
                                            return(
                                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                                            )
                                            }
                                        )}
                                            {/* <option value="Dinner">Dinner</option>
                                            <option value="Contemporary">Contemporary</option>
                                            <option value="Snacks">Snacks</option>
                                            <option value="Drinks">Drinks</option>
                                            <option value="Traditional">Traditional</option> */}
                                        </select>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="shortDes">Short Description</label>
                                        <input type="text" className="form-control" id="shortDes" placeholder="Short Description" onChange={handleChange} name="short_description"/>
                                        <div className="invalid-feedback">
                                        Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="form-row mb-3">
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="desc">Description</label>
                                        <input type="text" className="form-control" id="desc" placeholder="Description" name="description" onChange={handleChange}/>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                    
                                </div>

                                <div className="form-row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={handleChange}/>
                                        <div className="invalid-feedback">
                                            Please provide a valid Number.
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="deleted_price">Deleted Price</label>
                                        <input type="text" className="form-control" id="deleted_price" name="deleted_price" placeholder="Deleted Price" onChange={handleChange}/>
                                        <div className="invalid-feedback">
                                            Please provide a valid Number.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-row mb-3">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="stock">In Stock</label>
                                        <select id="stock" className="form-control" name="in_stock" onChange={handleChange}>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="reco">Is Recommended</label>
                                        <select id="reco" className="form-control" name="is_recommended" onChange={handleChange}>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="popular">Is Popular</label>
                                        <select id="popular" className="form-control" name="is_popular" onChange={handleChange}>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </div>

                                </div>


                                <div className="form-row mb-3">
                                    <div className="col-xl-6 mb-3">
                                        
{/* 
                                        <FilePond files={files} onupdatefiles={setFiles} allowMultiple={false}  name="Main-image" labelIdle="Drag and Drop" />  */}
                                        <label htmlFor="image">Image</label>


                                        <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.files[0])}/>

                                        <button className="btn btn-secondary mt-3 py-2" onClick={uploadImage} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressOne && <span style={{color: 'red'}}> {progressOne} </span>}

                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_imgae1">Featured Image 1 </label>
                                        <input type="file" className="form-control" id="featured_image1" name="featured_image1" onChange={(e) => setFeatured1(e.target.files[0])}/>

                                        <button className="btn btn-secondary mt-3 py-2" onClick={uploadFeaturedImage1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressTwo && <span style={{color: 'red'}}> {progressTwo} </span>}

                                    </div>
                                    
                                </div>

                                <div className="form-row mb-3">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_image2">Featured Image 2</label>
                                        <input type="file" className="form-control" id="featured_image2" name="featured_image2" onChange={(e) => setFeatured2(e.target.files[0])}/>

                                        <button className="btn btn-secondary mt-3 py-2" onClick={uploadFeaturedImage2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressThree && <span style={{color: 'red'}}> {progressThree} </span>}

                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_image3">Featured Image 3</label>
                                        <input type="file" className="form-control" id="featured_image3" name="featured_image3" onChange={(e) => setFeatured3(e.target.files[0])}/>


                                        <button className="btn btn-secondary mt-3 py-2" onClick={uploadFeaturedImage3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressFour && <span style={{color: 'red'}}> {progressFour} </span>}

                                    </div>
                                    
                                </div>


                                <div style={{display: 'flex', alignItems:'center', marginTop: '100px'}}>

                                <button className="btn btn-outline-danger btn-wide py-3 px-4 " onClick={handleSubmit} >Update</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}
