import "../styles/Modal.css";
import { useState} from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <form action="">
            <p className="modal-text">
              Привіт!
              <br /> Ви потрапили на сайт інтерактивних ігор та завдань
              <br /> Надіємось, що вам сподобається і ви отримаєте позитивні
              емоції!
              <br /> Бажаємо Вам гарно провести час!
            </p>
            <label>Введіть своє ім’я:</label>
            <input type="text" className="modal-input" />
            <button className="modal-button">Зберегти</button>
          </form>

          <div className="cross">
            <button className="modal-close" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="sword"></div>
          <div className="puzzle"></div>
          <div className="tictactoe"></div>
          <div className="gamedev"></div>
        </div>
      </div>
    </>
  );
}
