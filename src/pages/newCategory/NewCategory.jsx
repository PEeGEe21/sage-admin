import React, { useState } from 'react'
import { addCategory } from '../../redux/apiCalls'
import './newCategory.css'
import { useDispatch, useSelector } from 'react-redux';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { Publish, PublishOutlined, PublishRounded } from '@material-ui/icons';

import toast, { Toaster } from 'react-hot-toast';
      


export default function NewCategory() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState()
    const [progress, setProgress] = useState()

    const dispatch = useDispatch();

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

    const onSubmit = (e) => {
        e.preventDefault();
        const category = {
            name: name, 
            image:image,
            description:description,

        }
        addCategory(category, dispatch)
    } ;

    

    return (
        <>
<Toaster />
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
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '90%'}}>{progress}</div>
                                    </div>
                                }

                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: {progress}}}>{progress}</div>
                                    </div>
                                {/* {progress && <span style={{color: 'red'}}> {progress} </span>} */}

                                
                            
                            </div>

                            <div className="col-md-12 mb-3">
                                <button className="btn btn-primary btn-wide" onClick={onSubmit}>Add Category</button>

                            </div>

                        </form>
                    </div>            
                </div>
            </div>
        </div>
            
            
        </>
    )
}

