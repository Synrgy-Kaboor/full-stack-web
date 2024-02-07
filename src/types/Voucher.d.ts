export type Voucher = {
  discountPercent: number;
  maxDiscount: number;
  code: string;
  desc: string;
  timeLimit: Date;
}