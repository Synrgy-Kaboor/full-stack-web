export type PaymentResponseBody = {
  methodName: string;
  accountNumber: string;
  totalPrice: number;
  paymentCompleted: boolean;
  expiredTime: string;
}