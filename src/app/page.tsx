
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
      <main >
       <h1 className="text-xl ml-40">Home Pages {new Date().toTimeString()}</h1>
         <AddCompanyButton/>
      </main>
  );
}
