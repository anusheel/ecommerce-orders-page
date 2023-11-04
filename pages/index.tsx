import AdminDashboard from '../components/AdminDashboard';

const orders = [
  {
    title: 'Order 1',
    description: 'This is order 1',
    date: '2022-01-01',
    price: 100,
  },
  {
    title: 'Order 2',
    description: 'This is order 2',
    date: '2022-01-02',
    price: 200,
  },
  {
    title: 'Order 3',
    description: 'This is order 3',
    date: '2022-01-03',
    price: 300,
  },
  {
    title: 'Order 4',
    description: 'This is order 4',
    date: '2022-01-04',
    price: 400,
  },
  {
    title: 'Order 5',
    description: 'This is order 5',
    date: '2022-01-05',
    price: 500,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AdminDashboard orders={orders} />
    </main>
  );
}