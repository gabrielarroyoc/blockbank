import { Stack } from "@chakra-ui/react";
import { SiSimpleanalytics } from "react-icons/Si";
import { BiWalletAlt } from "react-icons/bi";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
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
        <NavLink icon={SiSimpleanalytics} href="/analytics">
          Gráficos
        </NavLink>
        <NavLink icon={BiWalletAlt} href="/wallet">
          Carteira
        </NavLink>
      </NavSection>
    </Stack>
  );
}
