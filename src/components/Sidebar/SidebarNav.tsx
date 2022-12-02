import { Button, Stack } from "@chakra-ui/react";
import { BiWalletAlt } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";

export const SidebarNav = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
      </NavSection>
      <NavSection title="RELATÓRIOS">
        <NavLink icon={BiWalletAlt} href="/wallet">
          Transações
        </NavLink>
      </NavSection>
      <NavSection title="Conta">
        <NavLink icon={RiContactsLine} href="/users">
          Perfil
        </NavLink>

        <NavLink
          onClick={() => supabaseClient.auth.signOut()}
          icon={RiLogoutBoxRLine}
          href="/logout"
        >
          Logout
        </NavLink>
      </NavSection>
    </Stack>
  );
};
