import { redirect } from 'next/navigation'


const DashboardPage = () => {
  redirect('/dashboard/forms');
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage