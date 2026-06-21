import React, { useState, useEffect, createRef, useRef } from "react";
import { router } from '@inertiajs/react';
// import Layout from "../Layouts/ContentLayout";
import Layout from "../Layouts/DashboardLayout";

function PhotoUpload() {
    const [selectedTab, setSelectedTab] = useState('photos');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploadedVideos, setUploadedVideos] = useState([]);
    const imageInputRef = useRef(null);
    const videoInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
        console.log('Uploaded images:', imageUrls);
        setUploadedImages(prevImages => [...prevImages, ...imageUrls]);
    }

    const handleVideoUpload = (event) => {
        const files = event.target.files;
        const videoUrls = Array.from(files).map(file => URL.createObjectURL(file));
        console.log('Uploaded videos:', videoUrls);
        setUploadedVideos(prevVideos => [...prevVideos, ...videoUrls]);
    }

    const openImageInput = () => {
        if (imageInputRef.current) {
            imageInputRef.current.click();
        }
    }

    const openVideoInput = () => {
        if (videoInputRef.current) {
            videoInputRef.current.click();
        }
    }

    return (
        <>
            <section className="applications container my-3">
                <div className="row">
                    <div className="col-12 text-center mb-3">
                        <p>Oszd meg a képeidet és a videóidat velünk és a násznéppel! A feltöltött tartalmakat a galériában megtekintheted, és a lagzi utáni napokban is hozzáférhetsz. 
                            Kérjük, hogy a feltöltött anyagok ne tartalmazzanak sértő vagy nem megfelelő tartalmat, és tartsd tiszteletben a többi vendég magánéletét.
                        </p>
                    </div>
                    <div className="col-12 mb-1">
                        <nav className="nav nav-pills nav-justified flex-row">
                            <a className={`flex-sm-fill text-center nav-link ${selectedTab === 'photos' ? 'active' : ''}`} aria-current="page" href="#" onClick={() => setSelectedTab('photos')}>
                                <i className="fas fa-images me-2"></i>
                                Képek
                            </a>
                            <a className={`flex-sm-fill text-center nav-link ${selectedTab === 'videos' ? 'active' : ''}`} href="#" onClick={() => setSelectedTab('videos')}>
                                <i className="fas fa-video me-2"></i>
                                Videók
                            </a>
                        </nav>
                    </div>

                    <div className="col-12">
                        {selectedTab === 'photos' && (
                            <div className="photo-upload">
                                <div className="drag-body" role="button" onClick={openImageInput}>
                                    <i className="fas fa-cloud-upload-alt me-1"></i>
                                    Kattints ide a képek feltöltéséhez
                                    <input ref={imageInputRef} type="file" className="form-control d-none" id="image" name="images" accept="image/*" multiple onChange={handleImageUpload}></input>
                                </div>
                                <div className="drag-footer">
                                    {uploadedImages.map((url, index) => (
                                        <div key={index} className="uploaded-item">
                                            <div className="uploaded-image-delete" onClick={() => {
                                                setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index));
                                            }}>
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </div>
                                            <img src={url} alt={`Uploaded ${index}`} className="uploaded-image" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {selectedTab === 'videos' && (
                            <div className="video-upload">
                                <div className="drag-body" role="button" onClick={openVideoInput}>
                                    <i className="fas fa-cloud-upload-alt me-1"></i>
                                    Kattints ide a videók feltöltéséhez
                                    <input ref={videoInputRef} type="file" className="form-control d-none" id="video" name="videos" accept="video/*" multiple onChange={handleVideoUpload}></input>
                                </div>
                                <div className="drag-footer">
                                    {uploadedVideos.map((url, index) => (
                                        <div key={index} className="uploaded-item">
                                            <div className="uploaded-image-delete" onClick={() => {
                                                setUploadedVideos(prevVideos => prevVideos.filter((_, i) => i !== index));
                                            }}>
                                                <i className="fa-solid fa-circle-xmark"></i>
                                            </div>
                                            <video src={url} className="uploaded-video" muted disablePictureInPicture></video>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {selectedTab === 'photos' && (
                    <div className="row">
                        <div className="col-4" role="button" style={{height: "150px", background: "url('https://images.unsplash.com/photo-1774871111668-e3a76bb786ce?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                        <div className="col-4" role="button" style={{height: "150px", background: "url('https://images.unsplash.com/photo-1765003291278-495489d2d7fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                        <div className="col-4" role="button" style={{height: "150px", background: "url('https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                        <div className="col-4" role="button" style={{height: "150px", background: "url('https://images.unsplash.com/photo-1774286111329-3bdddc7d730e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                        <div className="col-4" role="button"style={{height: "150px", background: "url('https://images.unsplash.com/photo-1761839258513-099c3121d72d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                        <div className="col-4" role="button" style={{height: "150px", background: "url('https://images.unsplash.com/photo-1774637184972-6a12518f12f0?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundPosition: "center", backgroundSize: "cover"}}></div>
                    </div>
                )}
            </section>
        </>
    );}

PhotoUpload.layout = (page) => <Layout children={page} />;

export default PhotoUpload;