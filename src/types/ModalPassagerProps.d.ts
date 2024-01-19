export interface PassangerSearch {
  adult: {
    value: number;
  };
  child: {
    value: number;
  };
  baby: {
    value: number;
  };
}

export interface ModalPassagerProps {
  Passanger: PassangerSearch;
  open: boolean;
  onClose: () => void;
  onSave: (Passanger: PassangerSearch) => void;
}
