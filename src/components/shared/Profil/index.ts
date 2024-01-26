import MailIcon from './../../../assets/mail.svg'
import OctIcon from './../../../assets/octicon_bell-24.svg'
import PhoneIcon from './../../../assets/ph_phone.svg'
import CsIcon from './../../../assets/ri_customer-service-2-line.svg'
import PlaneIcon from './../../../assets/tabler_plane.svg'
import BellIcon from './../../../assets/tabler_bell-plus.svg'
import PasporIcon from './../../../assets/Group.svg'
import ExitIcon from './../../../assets/iconamoon_exit-light.svg'

export const sideBarItem1 = [
  {icon: MailIcon, text: 'Email Saya', route: '/ganti-email'}, 
  {icon: PhoneIcon, text: 'NO. Telp', route: '/ganti-nomer'},
  {icon: PasporIcon, text: 'Paspor', route: '/'}, 
  {icon: PlaneIcon, text: 'Pesanan', route: '/'},
  {icon: OctIcon, text: 'Notifikasi', route: '/'}, 
  {icon: BellIcon, text: 'Notifikasi Harga', route: '/'},
  {icon: CsIcon, text: 'Pusat Bantuan', route: '/'},
]


export const exitItem = {icon: ExitIcon, text: 'Keluar'};
