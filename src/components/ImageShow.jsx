import React from "react";
import "./ModalShow.css";

const ShowImage = (props) => {
  const Style = {
    backgroundColor: "#ffeaf5"
  }

  return (
    <>
            {/* Modal for image showing */}
      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
          
        >
          <div class="modal-content" style={Style}>
            <div style={{ border: "none" }} class="modal-header">
              <button
                id="close"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div  class="modal-body text-center p-0 m-0">
                    {/* porps for dynamic image src */}
              <img
                id="Image"
                src={props.Src}
                alt="Gallery"
              />
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowImage;
