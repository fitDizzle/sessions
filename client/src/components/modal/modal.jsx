import React, { useState, useEffect } from 'react';

const modalStyles = {
  position: 'fixed',
  left: '0',
  right: '0',
  top: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '99999'
};

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div id="modal" className="modal" style={modalStyles} onClick={(e) => handleOffModalClick(e)}>
      <div className="modal-content">
        <div id="modal-body" className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default Modal;