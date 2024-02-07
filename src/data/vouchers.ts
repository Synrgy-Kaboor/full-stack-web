import { Voucher } from '../types/Voucher';

export const vouchers: Voucher[] = [
  {
    maxDiscount: 100000,
    code: 'TEMANKABOOR',
    desc: 'Discount Hingga Rp 100.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-03-02'),
  },
  {
    maxDiscount: 150000,
    code: 'PARTNERTKABOOR',
    desc: 'Discount Hingga Rp 150.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-02-15'),
  },
  {
    maxDiscount: 170000,
    code: 'KABOORYUK',
    desc: 'Discount Hingga Rp 170.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-02-10'),
  },
  {
    maxDiscount: 200000,
    code: 'BARENGKABOOR',
    desc: 'Discount Hingga Rp 200.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-02-03'),
  },
  {
    maxDiscount: 250000,
    code: 'KABOORKALIYA',
    desc: 'Discount Hingga Rp 200.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-02-05'),
  },
  {
    maxDiscount: 300000,
    code: 'KABOORAH',
    desc: 'Discount Hingga Rp 300.000 Buat Keliling Indonesia',
    timeLimit: new Date('2024-02-08'),
  },
];
