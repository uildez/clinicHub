export function SelectedProfessional() {
  return (
    <div className="flex gap-2 items-end justify-between">
      <div className="lg:w-3/6 w-full">
        <h2 className="font-bold text-blue-600 text-lg mb-4">
          <i className="w-[30px] fa-solid fa-user-doctor"></i>
          Selecione o Especialista:
        </h2>
        <select
          name="professional"
          id="professional"
          className="text-blue-600 w-full px-4 py-2 rounded-full focus-visible:outline-none"
        >
          <option value="Profissional 1">Dro. Olavo Costa | CRA 5469-6</option>
          <option value="Profissional 2">
            Dra. Gleice Marinho | CRA 5452-8
          </option>
          <option value="Profissional 3">
            Dro. Marcelo Apolinário | CRA 7845-6
          </option>
          <option value="Profissional 4">
            Dra. Talita Rodrigues | CRA 8891-6
          </option>
        </select>
      </div>
    </div>
  );
}
