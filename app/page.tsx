import { getHolidays } from "@/api";
import AddHolidays from "./components/AddHolidays";
import TableHoliday from "./components/TableHoliday";

export default async function Home() {
  const holiday = await getHolidays();
  return (
    <html className="bg-white">
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center  flex flex-col gap-4 text-black bg-white">
          <h1 className="text-2xl font-bold">Feriados Bancários</h1>
          <AddHolidays />
        </div>
        <TableHoliday />
      </main>
    </html>
  );
}
