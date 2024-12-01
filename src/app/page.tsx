
import AddCompanyButton from '@/app/components/add-company-button';
import ClientComponent from '@/app/components/client-component';
import MagisButton from '@/app/components/magis-button';



export default function Home() {
  return (
      <main >
       <h1 className="text-xl ml-40">Home Pages </h1>
         <AddCompanyButton/>
        <MagisButton/>
      </main>
  );
}
