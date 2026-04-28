import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const items = [
  {
    id: '1',
    name: 'Mohamed Hassan',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'MA',
    email: 'mohamed.ahmed@gmail.com',
    location: 'Zagazig, Egypt',
    status: 'Active',
    balance: 'EGP 10,696.00'
  },
  {
    id: '2',
    name: 'Sara Ali',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'SA',
    email: 'sara.ali@yahoo.com',
    location: 'Alexandria, Egypt',
    status: 'Applied',
    balance: 'EGP 0.00'
  },
  {
    id: '3',
    name: 'Ahmed Mahmoud',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'AM',
    email: 'ahmed.mahmoud@outlook.com',
    location: 'Mansoura, Egypt',
    status: 'Active',
    balance: 'EGP 569.00'
  },
  {
    id: '4',
    name: 'Mona Hassan',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    fallback: 'MH',
    email: 'mona.hassan@gmail.com',
    location: 'Cairo, Egypt',
    status: 'Inactive',
    balance: '-EGP 506.90'
  }
]


const TeamTable = () => {
  return (
    <div className='w-full p-6'>
      <div className='[&>div]:rounded-sm [&>div]:border'>
        <Table>
          <TableHeader>
            <TableRow className='hover:bg-transparent'>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map(item => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className='flex items-center gap-3'>
                    <Avatar>
                      <AvatarImage src={item.src} alt={item.fallback} />
                      <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                    </Avatar>
                    <div className='font-medium'>{item.name}</div>
                  </div>
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell className='text-right'>{item.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className='text-muted-foreground mt-4 text-center text-sm'>Team Table</p>
    </div>
  )
}

export default TeamTable
