export interface ModalClassSeatProps {
    open: boolean;
    valueChecked: string;
    onClose: () => void;
    onSave: (valueChecked) => void;
}