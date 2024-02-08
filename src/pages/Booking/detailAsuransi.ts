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
}

export const detailAsuransi: IDetailAsuransi[] = [
  {
    id: 1,
    title: 'Asuransi Perjalanan',
    descriptions: [
      'Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga',
      'Kompensasi hingga Rp 500 Juta untuk berbagai resiko tak terduga',
    ],
    price: 65000,
    details: [
      {
        tanggungan:
          'Santunan sebanyak satu kali jika Anda meninggal dunia atau cacat tetap akibat kecelakaan.',
        kompensasi: 'Hingga Rp 150.000.000',
      },
      {
        tanggungan:
          'Menanggung biaya perawatan medis selama perjalanan Anda yang dibutuhkan akibat kecelakaan.',
        kompensasi: 'Dari Rp 37.500.000 sampai Rp. 150.000.000',
      },
      {
        tanggungan:
          'Menanggung biaya perjalanan dan akomodasi yang hangus jika perjalanan Anda harus dibatalkan setidaknya 30 hari sebelum tanggal keberangkatan Anda, akibat risiko-risiko yang ditanggung.',
        kompensasi: 'Dari Rp 1.000.000 sampai Rp. 5.000.000',
      },
      {
        tanggungan:
          'Menanggung biaya perawatan medis selama perjalanan Anda yang dibutuhkan akibat kecelakaan.',
        kompensasi: 'Dari Rp 37.500.000 sampai Rp. 150.000.000',
      },
    ],
  },
  {
    id: 2,
    title: 'Asuransi Bagasi',
    descriptions: [
      'Lindungi bagasi dari kerusakan atau kehilangan hingga Rp 30 Juta',
      'Kompensasi Keterlambatan Bagasi Pribadi hingga Rp 1 Juta',
    ],
    price: 15000,
    details: [
      {
        tanggungan:
          'Santunan atas Bagasi yang Hilang atau Rusak selama perjalanan setelah check-in, maksimal Rp 5.000.000/barang',
        kompensasi:
          'Hingga Rp 25.000.000 untuk rute domestik atau hingga Rp 30.000.000 untuk rute internasional',
      },
      {
        tanggungan:
          'Kompensasi Keterlambatan Bagasi Pribadi, Rp 250.000 untuk rute domestik atau Rp 500.000 untuk rute internasional minimal 2 jam setelah kedatangan di tempat pengambilan bagasi.',
        kompensasi:
          'Hingga Rp 500.000 untuk rute perjalanan domestik atau hingga Rp 1.000.000 untuk rute perjalanan internasional',
      },
    ],
  },
  {
    id: 3,
    title: 'Proteksi Keterlambatan',
    descriptions: [
      'Kompensasi Rp 200 Ribu per 2 jam untuk segala resiko keterlambatan',
      'Kompensasi hingga Rp 600 Ribu untuk setiap tanggunan',
    ],
    price: 10000,
    details: [
      {
        tanggungan:
          'Santunan Keterlambatan Penerbangan akibat aksi pemogokan, cuaca buruk, dan kerusakan mesin atau struktur. Segala perubahan dari Maskapai Penerbangan tidak termasuk dalam jaminan.',
        kompensasi:
          'Dari Rp 200.000 (setiap 2 jam berturut-turut keterlambatan) hingga Rp 600.000',
      },
      {
        tanggungan:
          'Santunan Keterlambatan Bagasi Pribadi karena keterlambatan, salah tujuan, atau salah ditempatkan oleh perusahaan pengangkutan.',
        kompensasi:
          'Dari Rp 200.000 (setiap 2 jam berturut-turut keterlambatan) hingga Rp 600.000',
      },
    ],
  },
];
