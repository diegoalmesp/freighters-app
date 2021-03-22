import React from "react";
import Modal from "react-modal";
import StarRatingComponent from "react-star-rating-component";
import { Freighters } from "../../data/types";
import CloseButton from "../Buttons/CloseButton";
import Picture from "../Picture";

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  freighter: Freighters | undefined;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

/**
 * Diego:
 * I could use `children` here and create a new composite, thus making the modal reusable
 * but for the purpose of the excercise I'm gonna leave it like this,
 * to not increase the ammount of files unnecessarily
 */
const DetailsModal: React.FC<Props> = ({
  modalIsOpen,
  closeModal,
  freighter,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Freighter Details"
      style={customStyles}
      /* Diego:
       * ariaHideapp hides to modal for screen readers, this is an accessibility issue
       * but for the purpose of this excersice I'm gonna live it like this
       */
      ariaHideApp={false}>
      <CloseButton onClick={closeModal} />
      <h2>Freighter Details</h2>
      {freighter && (
        <>
          <div>Freighter ID: {freighter.id}</div>
          <div>Rating: {freighter.rating}</div>
          <div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={freighter.rating}
            />
          </div>
          <div>
            <b>Ships From:</b>
            {freighter.base.map((base, index) => (
              <div key={index}>{base}</div>
            ))}
          </div>
          <div>
            <b>Ships To:</b>
            {freighter.destinations.map((base, index) => (
              <div key={index}>{base}</div>
            ))}
          </div>
          <div>
            <b>CBM:</b>
            {freighter.cbm}
          </div>
          <div>
            <b>Cost:</b>${freighter.cost}
          </div>
          <div>
            <Picture search={freighter.transport_type[0]} />
          </div>
          <div>
            Route: <i>{freighter.route}</i> - Transit Time:{" "}
            {freighter.transit_time} days
          </div>
        </>
      )}
      {/* <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form> */}
    </Modal>
  );
};

export default DetailsModal;
