import React from 'react';
import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {
    const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
    const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()
    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt='Preview Product' />

            {
                props.currentSelectedFeature === 1 ?

                    <div className={classes.HeartBeatSection}>
                        <i className="fa-solid fa-heart-pulse"></i>
                        <p>80</p>
                    </div>
                    :
                    <div className={classes.TimeSection}>
                        <p>{`${currentHours} : ${currentMinute}`}</p>
                    </div>
            }
        </div>
    );
}
export default ProductPreview;