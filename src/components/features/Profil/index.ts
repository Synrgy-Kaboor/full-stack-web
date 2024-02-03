

const dateNow = new Date()
export const notificationData = [
  {createdAt: dateNow,
  id: 'number1',
  message: 'this is firs Notif',
  title: 'this is title'},
  {createdAt: dateNow,
    id: 'number2',
    message: 'this is second Notif',
    title: 'this is 2 title'}
]

export  const formatDate = (date: { toLocaleString: (arg0: string, arg1: { day: string; month: string; }) => unknown; }) => {
  const optionDate = { day: 'numeric', month: 'short' };
  return date.toLocaleString('id-ID', optionDate)

} 