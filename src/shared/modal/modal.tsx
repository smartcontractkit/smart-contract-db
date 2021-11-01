import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import styles from './modal.module.css';

export enum Positions {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
  CENTER = 'center',
}

export type ModalProps = {
  show: boolean;
  modalStyles?: string;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ show, modalStyles = '', onClose, children }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);

  useOutsideClick(modalRef, onClose);

  return (
    <>
      <div ref={modalRef} className={classNames([styles.modal_container, modalStyles])}>
        <div className={styles.modal}>{children}</div>
      </div>
    </>
  );
};
