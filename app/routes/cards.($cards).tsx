import { useParams } from "react-router-dom";
import { cards } from "./data";
import { useLocation } from "@remix-run/react";

export default function CardDetails() {
  const { cardId } = useParams<{ cardId?: string }>();

  const card = cardId ? cards.find(card => card.id.toString() === cardId) : null;

  return (
    <div className="p-4">
      {card ? (
        <>
          <h1 className="text-xl font-bold">Card Details:</h1>
          <p><strong>ID:</strong> {card.id}</p>
          <p><strong>Name:</strong> {card.name}</p>
          <p><strong>Bio:</strong> {card.biog}</p>
          <p><strong>Background:</strong> <img src={card.bgProf} alt="Background" className="w-32 h-32 object-cover" /></p>
          <p><strong>Icon:</strong> <img src={card.userIcon} alt="User Icon" className="w-10 h-10 rounded-full" /></p>
          <p><strong>Username:</strong> {card.userName}</p>
          <p><strong>Created At:</strong> {card.createdAt}</p>
        </>
      ) : (
        <p>No card found with id {cardId}</p>
      )}
    </div>
  );
}