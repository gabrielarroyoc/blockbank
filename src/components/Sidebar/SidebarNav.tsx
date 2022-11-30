import { Stack } from "@chakra-ui/react";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Perfil
        </NavLink>
      </NavSection>
      <NavSection title="RELATÓRIOS">
        <NavLink icon={AiOutlineTransaction} href="/transactions">
          Transações
        </NavLink>
        <NavLink icon={BiWalletAlt} href="/wallet">
          Carteira
        </NavLink>
      </NavSection>
      <NavSection title="GERENCIAMENTO">
        <NavLink icon={IoSettingsOutline} href="/config">
          Configurações
        </NavLink>
        <NavLink icon={RiLogoutBoxRLine} href="/logout">
          Logout
        </NavLink>
      </NavSection>
    </Stack>
  );
}
