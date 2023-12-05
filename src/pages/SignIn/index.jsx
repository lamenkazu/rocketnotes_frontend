import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form, Background } from "./styles";
import { Input } from "./../../components/Input";
import { Button } from "./../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn({ email, password });
  };

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar Conta</Link>
      </Form>

      <Background />
    </Container>
  );
}
