import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState(null);

  const goBack = () => {
    navigate(-1);
  };

  const handleRemoveNote = async () => {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/Notes/${params.id}`);
      goBack();
    }
  };

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/Notes/${params.id}`);
      setData(response.data);
    };

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemoveNote} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && (
              <Section title="Links Uteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={link.link_id}>
                      <a href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={tag.tag_id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={goBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
