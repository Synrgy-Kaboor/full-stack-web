

const dateNow = new Date()
export const notificationData = [
  {
    'id': 1,
    'type': 'price',
    'title': 'Harga Baru Tersedia',
    'detail': 'Harga baru telah ditetapkan untuk produk Y.',
    'createdAt': dateNow,
    'flag': false,
    'priceNotificationId': null
}, 
{
  'id': 2,
  'type': 'approval',
  'title': 'Permintaan Persetujuan Proyek Z',
  'detail': 'Mohon tinjau dan berikan persetujuan untuk proyek Z.',
  'createdAt': dateNow,
  'flag': true,
  'priceNotificationId': 1
}

]

export  const formatDate = (date: { toLocaleString: (arg0: string, arg1: { day: string; month: string; }) => unknown; }) => {
  const optionDate = { day: 'numeric', month: 'short' };
  return date.toLocaleString('id-ID', optionDate)

} 

export interface Notification {
  id: string;
  type: string;
  title: string;
  detail: string;
  flag: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  price_notification_id: string | null;
  user_id: string;
}


export function getDayMonth(dateString:string) {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
}