import { useAppSelector } from '../../redux/hooks';
import DetailPenumpang from './DetailPenumpang';
import LayananTambahan from './LayananTambahan';
import MetodePembayaran from './MetodePembayaran';

export default function Booking() {
  const { currentPage } = useAppSelector((state) => state.booking);

  return (
    <>
      { currentPage == 1 && <DetailPenumpang/> }
      { currentPage == 2 && <LayananTambahan/> }
      { currentPage == 3 && <MetodePembayaran/> }
    </>
  )
}