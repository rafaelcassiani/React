// import { Modal } from "bootstrap"
// function Frmeditar(props){
//     return (
//         <>
//         {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//             <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Formulario De Registrar</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//                 <form>
//                 <div className="mb-3">
//                     <label for="recipient-name" className="col-form-label">Nombre:</label>
//                     <input type="text" name="nombre" id="" className="form-control" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="message-text" className="col-form-label">Apellido</label>
//                     <input type="text" name="nombre" id="" className="form-control" />
//                 </div>
//                 </form>
//             </div>
//             <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary">Registar</button>
//             </div>
//             </div>
//         </div>
//         </div> */}
//         </>
//       )
// }
// export default Frmeditar

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Example;
