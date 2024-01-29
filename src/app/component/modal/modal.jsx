import { Form } from "../form/form"




export const Modal = () => {


    return (
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg">Intermitate Fasting Tracker</h3>
       
          <div className="modal-action flex flex-row w-full">
            <form className="w-full" method="dialog">
           
              <Form  />
            </form>
          </div>
        </div>
      </dialog>
    );
  };
  