import StatusLabel, {Status} from "@/app/components/status-label";
import { headers } from 'next/headers';

export default function Home() {
  return (
      <main >
       <h1 className="text-xl ml-40">Home Pages {new Date().toTimeString()}</h1>
          <StatusLabel status={Status.Active}>Active</StatusLabel>
          <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
          <StatusLabel status={Status.Pending}>Pending</StatusLabel>
          <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      </main>
  );
}
