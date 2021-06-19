import React from 'react';

const Modal = (props) => {
    const {onClose, currentPhoto } = props;
    console.log(currentPhoto);
    

    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{currentPhoto.name}</h3>
                <img src={require(`../../assets/large/${currentPhoto.category}/${currentPhoto.index}.jpg`)} alt="current Category" />
                <p>
                    {currentPhoto.description}
                </p>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;