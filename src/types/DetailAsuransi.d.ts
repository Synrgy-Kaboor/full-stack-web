type TAsuransiLengkap = {
  tanggungan: string;
  kompensasi: string;
};

export interface IDetailAsuransi {
  id: number;
  title: string;
  descriptions: string[];
  price: number;
  details: Array<TAsuransiLengkap>;
  changeState: (payload: boolean) => void;
}