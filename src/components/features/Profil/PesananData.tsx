interface Pesanan {
  id: string;
  airport1: string;
  airport2: string;
  Tanggal: string;
  Jam: string;
  status: string;
}

const PesananData: Pesanan[] = [
  {
    id: '12122023994',
    airport1: 'Surabaya (SUB)',
    airport2: 'Jakarta (CGK)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'Selesai'
  },
  {
    id: '12122023995',
    airport1: 'Jakarta (CGK)',
    airport2: 'Surabaya (SUB)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'Sedang di Proses'
  },
  {
    id: '12122023996',
    airport1: 'Surabaya (SUB)',
    airport2: 'Jakarta (CGK)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'E-Tiket Terbit'
  },
];

export default PesananData;
