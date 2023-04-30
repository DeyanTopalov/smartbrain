import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return (
        <div>
          <p className ='f2'>
          {`This magic Brain will detect faces in your pictures.
           Give it a try!`}
          </p>
          <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
            <input className ='f4 pa2 w-60 center' type='text' />
            <button className='center w-25 grow f3 link ph3 pv1 dib white bg-blue'>
                Detect
            </button>
            </div>
          </div>
        </div>
          
    );
}

export default ImageLinkForm;