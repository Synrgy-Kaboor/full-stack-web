interface Pesanan {
  id: string;
  airport1: string;
  jam1: string;
  jam2: string;
  airport2: string;
  Tanggal: string;
  Jam: string;
  status: string;
  kode: string;
  nama: string;
  kelas: string;
  durasi: string;
  penumpang: Penumpangpesanan[]; 
}

interface Penumpangpesanan {
  name: string;
  age: string;
}

const PesananData: Pesanan[] = [
  {
    id: '12122023994',
    airport1: 'Surabaya (SUB)',
    airport2: 'Jakarta (CGK)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'Selesai',
    kode: '1111',
    jam1: '10.00 WIB',
    jam2: '10.00 WIB',
    nama: 'air asia',
    kelas: 'ekonomi',
    durasi: '4 jam',
    penumpang: [
      { name: 'John Doe', age: 'Dewasa' },
      { name: 'Jane Doe', age: 'Anak' }
    ]
  },
  {
    id: '12122023995',
    airport1: 'Jakarta (CGK)',
    airport2: 'Surabaya (SUB)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'Sedang di Proses',
    kode: '1111',
    jam1: '10.00 WIB',
    jam2: '10.00 WIB',
    nama: 'air asia',
    kelas: 'ekonomi',
    durasi: '4 jam',
    penumpang: [
      { name: 'Alice', age: 'Bayi' },
      { name: 'Bob', age: 'Dewasa' }
    ]
  },
  {
    id: '12122023996',
    airport1: 'Surabaya (SUB)',
    airport2: 'Jakarta (CGK)',
    Tanggal: 'Sel, 25 Des 2023',
    Jam: '08.00 WIB',
    status: 'E-Tiket Terbit',
    kode: '1111',
    jam1: '10.00 WIB',
    jam2: '10.00 WIB',
    nama: 'air asia',
    kelas: 'ekonomi',
    durasi: '4 jam',
    penumpang: [
      { name: 'Charlie', age: 'Dewasa' },
      { name: 'Diana', age: 'Dewasa' }
    ]
  },
];

export default PesananData;
