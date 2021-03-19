import React from "react";

const ShowImage = (props) => {
    return ( 
        <>
           <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
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
            <div class="modal-body">
              <img style={{width:"100%", height:"600px"}} src={props.Src} alt="Image" />
            </div>
            <div style={{ border: "none" }} class="modal-footer"></div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default ShowImage;