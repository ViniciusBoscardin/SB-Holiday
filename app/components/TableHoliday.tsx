import { IHoliday } from "@/types/holiday";

interface TableHolidayProps {
  holidays: IHoliday[];
}

const TableHoliday: React.FC<TableHolidayProps> = ({ holidays }) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Data
              </th>
              <th scope="col" className=" py-3">
                Color
              </th>

              <th scope="col" className=" py-3">
                Ação
                <span className="sr-only m-0">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday) => (
              <tr
                key={holiday.id}
                className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {holiday.name}
                </th>

                <td className="px-6 py-4">{holiday.date}</td>

                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableHoliday;
