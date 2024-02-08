export type Voucher = {
  id: number;
  maxDiscount: number;
  code: string;
  desc: string;
  timeLimit: Date;
}