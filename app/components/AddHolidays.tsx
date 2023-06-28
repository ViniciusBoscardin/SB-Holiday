import { AiOutlinePlus } from "react-icons/ai";

const AddHolidays = () => {
  return (
    <div className="mb-8">
      <button className="btn btn-primary w-full">
        Adicionar Feriado
        <AiOutlinePlus className="ml-2" size={18} />
      </button>
    </div>
  );
};

export default AddHolidays;
