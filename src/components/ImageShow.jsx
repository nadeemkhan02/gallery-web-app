import React from "react";
import "../ModalShow.css";

const ShowImage = (props) => {
  const Style = {
    backgroundColor: "#ffeaf5"
  }

  return (
    <>
            {/* Modal for image showing */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
          
        >
          <div className="modal-content" style={Style}>
            <div style={{ border: "none" }} className="modal-header">
              <button
                id="close"
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div  className="modal-body text-center p-0 m-0">
                    {/* porps for dynamic image src */}
              <img
                id="Image"
                src={props.Src}
                alt="Gallery"
              />
            </div>
            <div style={{ border: "none" }} className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowImage;
