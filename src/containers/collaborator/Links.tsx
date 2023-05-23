import { LinkMenu } from "../../components/employee/LinkMenu";

export const Links = ({ toggleMenu }: any) => {
  return (
    <>
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="agendamento"
        icon="fa-solid fa-calendar"
        title="Agendamento"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="pacientes"
        icon="fa-solid fa-users"
        title="Pacientes"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="funcionarios"
        icon="fa-solid fa-people-group"
        title="Funcionários"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="convenio"
        icon="fa-solid fa-handshake"
        title="Serviços"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="medicos"
        icon="fa-solid fa-user-doctor"
        title="Médicos"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="materiais"
        icon="fa-solid fa-box"
        title="Materiais"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="guias-atendimento"
        icon="fa-solid fa-file-lines"
        title="Guias de Atendimento"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="receituario"
        icon="fa-regular fa-paste"
        title="Receituário"
      />
      <LinkMenu
        toggleMenu={toggleMenu}
        location={location.pathname}
        routing="financeiro"
        icon="fa-solid fa-dollar-sign"
        title="Financeiro"
      />
    </>
  );
};
