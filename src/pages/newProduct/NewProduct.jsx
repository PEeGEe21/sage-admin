import React,{useState} from 'react'
import './newproduct.css'
import {FilePond, File, registerPlugin} from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addProduct } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import app from '../../firebase';
import { Publish, PublishOutlined, PublishRounded } from '@material-ui/icons';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview )


// const api = "/api/products/";
export default function NewProduct() {
    const [image, setImage] = useState()
    const [featured1, setFeatured1] = useState()
    const [featured2, setFeatured2] = useState()
    const [featured3, setFeatured3] = useState()
    const [inputs, setInputs] = useState({})


    const [progressOne, setProgressOne] = useState()
    const [progressTwo, setProgressTwo] = useState()
    const [progressThree, setProgressThree] = useState()
    const [progressFour, setProgressFour] = useState()
    const categories = useSelector((state) => state.category.categories)
    
    // const [cat, setCat] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    // const uploadFile = (e) =>{
    //     setInputs(prev => {
    //         return {...prev, [e.target.name]:e.target.value}
    //     })
    // }
    // console.log(featured1)
    // console.log(file)
    // console.log(featured2)
    // console.log(featured3)

    
    // const handleCat = (e) =>{
    //     setCat(e.target.value.split(","));
    // }

    // const getCategoryRow = () =>{
    //     return 
    //     }

    const uploadImage = (e) => {
        e.preventDefault();
        const imageName = new Date().getTime() + image.name;
        const storage = getStorage(app)

        const storageRef = ref(storage, imageName);

        const uploadTask = uploadBytesResumable(storageRef, image);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressOne(progress)
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
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
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

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressTwo(progress)

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
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
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

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', 
        (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
            // Handle unsuccessful uploads
        }, 
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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
        addProduct(product, dispatch)
        
        console.log(product)

    }


    
    
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">Add Meal</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                                <li className="breadcrumb-item active">Create</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-12 col-md-12">
                    <div className="kt-portlet">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">
                                    New Meal
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

                                        <button className="btn btn-primary btn-wide mt-3 py-2" onClick={uploadImage} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressOne && <span style={{color: 'red'}}> {progressOne} </span>}

                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_imgae1">Featured Image 1 </label>
                                        <input type="file" className="form-control" id="featured_image1" name="featured_image1" onChange={(e) => setFeatured1(e.target.files[0])}/>

                                        <button className="btn btn-primary btn-wide mt-3 py-2" onClick={uploadFeaturedImage1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressTwo && <span style={{color: 'red'}}> {progressTwo} </span>}

                                    </div>
                                    
                                </div>

                                <div className="form-row mb-3">
                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_image2">Featured Image 2</label>
                                        <input type="file" className="form-control" id="featured_image2" name="featured_image2" onChange={(e) => setFeatured2(e.target.files[0])}/>

                                        <button className="btn btn-primary btn-wide mt-3 py-2" onClick={uploadFeaturedImage2} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressThree && <span style={{color: 'red'}}> {progressThree} </span>}

                                    </div>

                                    <div className="col-xl-6 mb-3">
                                        <label htmlFor="featured_image3">Featured Image 3</label>
                                        <input type="file" className="form-control" id="featured_image3" name="featured_image3" onChange={(e) => setFeatured3(e.target.files[0])}/>


                                        <button className="btn btn-primary btn-wide mt-3 py-2" onClick={uploadFeaturedImage3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <Publish/> Upload</button>

                                        {progressFour && <span style={{color: 'red'}}> {progressFour} </span>}

                                    </div>
                                    
                                </div>


                                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '40px'}}>

                                <button className="btn btn-outline-dark btn-wide py-3 px-4 " onClick={handleSubmit} >Add Meal</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
