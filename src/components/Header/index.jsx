import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const handleLogOut = () => {
    signOut();
    navigate("/");
  };

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleLogOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
