import { PassangerSearch } from './ModalPassagerProps';

export interface CardFilterPlaneSchedule  {
    deparature: string,
    arrival: string,
    deparatureDate: Date | null,
    arrivalDate?: Date | null,
    passanger: PassangerSearch,
    class: string,
    priceRange: number[] | null,
}
export interface CardFilterPlaneScheduleProps {
    sliderOn : boolean;
    textSubmit : string;
    onSubmit : (value: Partial<CardFilterPlaneSchedule>) => void;
}

