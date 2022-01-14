import React from "react";
import Photo from "./Photo"
import './App.css'

const PhotoContainer = props => {
    const displayPhotos = () =>{
        return props.photos.map(photo => {
            return <Photo key={photo.id} url={photo.src.medium} photographer={photo.photographer} />
        })
    }
    return (
        <>
        <section className="row">{displayPhotos()}</section>
        </>
    )
}

export default PhotoContainer