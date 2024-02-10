export type PaymentAttributes = {
  methodName: string;
  accountNumber: string;
  totalPrice: number;
  paymentCompleted: boolean;
  expiredTime: number;
}