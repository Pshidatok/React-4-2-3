
import { Anchor, Avatar, Button, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-circle">
  hh
</div>

          <Text className="logo-text">
            FrontEnd
          </Text>
        </div>

        <nav className="header-menu">
          <Anchor href="#" className="menu-link">
            Вакансии FE
          </Anchor>

          <Button
            className="menu-button"
            variant="subtle"
            color="dark"
            leftSection={<IconUser size={16} />}
          >
            Обо мне
          </Button>
        </nav>
      </div>
    </header>
  );
}
