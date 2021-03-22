import React, { Suspense, useEffect, useState } from "react";
import { Freighters } from "../../data/types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectFreighterDetails,
  selectFreigtersList,
} from "../../reducers/selectors";
import FreightListItem from "../../components/FreightListItem";
import Message, { MessageType } from "../../components/Message";
import { search } from "../../reducers/freightersSlice";

// Diego:
// I don't need this component the first time I render the app
// bundling helps to reduce loading times
// https://es.reactjs.org/docs/code-splitting.html
const DetailsModal = React.lazy(() => import("../../components/Modal"));

const FreightersList: React.FC = () => {
  const [freighters, setFreighters] = useState<Freighters[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFreighter, setSelectedFreighter] = useState<Freighters>();
  const dispatch = useAppDispatch();

  const selectedLoadFreighters = useAppSelector(selectFreigtersList);
  const selectedFreighterDetails = useAppSelector(selectFreighterDetails);

  /**
   * Diego:
   * for a bigger app this could be a custom hook
   */
  useEffect(() => {
    if (
      selectedLoadFreighters &&
      selectedLoadFreighters.length !== freighters.length
    ) {
      setTimeout(() => {
        setFreighters(selectedLoadFreighters);
      }, 500);
    }
  }, [selectedLoadFreighters, freighters.length]);

  /**
   * Diego:
   * for a bigger app this could be a custom hook
   */
  useEffect(() => {
    if (
      selectedFreighterDetails !== null &&
      selectedFreighterDetails.id !== selectedFreighter?.id
    ) {
      setSelectedFreighter(selectedFreighterDetails);
    }
  }, [selectedFreighterDetails, selectedFreighter]);

  function handleListItemClick(id: string) {
    dispatch(search(id));
    setModalOpen(true);
  }

  return (
    <section>
      {!freighters.length && (
        <Message type={MessageType.Warning}>
          we couldn't find any data, try again with different filters...
        </Message>
      )}
      {!!freighters.length && (
        <Message>Currently displaying {freighters.length} results</Message>
      )}
      {freighters.map((f, index) => (
        <FreightListItem {...f} key={index} onClick={handleListItemClick} />
      ))}
      {/* suspense provides a fallback WHILE the modal is being loaded in the DOM */}
      <Suspense fallback={<div>Loading...</div>}>
        <DetailsModal
          modalIsOpen={modalOpen}
          closeModal={() => setModalOpen(false)}
          freighter={selectedFreighter}
        />
      </Suspense>
    </section>
  );
};

export default FreightersList;
