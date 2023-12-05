import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Header } from "./../../components/Header";
import { Input } from "./../../components/Input";
import { Textarea } from "./../../components/Textarea";
import { Section } from "./../../components/Section";
import { NoteItem } from "./../../components/NoteItem";
import { Button } from "./../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const handleAddLink = () => {
    if (newLink === "") {
      return;
    }
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  };

  const handleRemoveLink = (deleted) => {
    setLinks((prevState) => prevState.filter((_, index) => index !== deleted));
  };

  const handleAddTag = () => {
    if (newTag === "") {
      return;
    }
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  };

  const handleRemoveTag = (deleted) => {
    setTags((prevState) => prevState.filter((_, index) => index !== deleted));
  };

  const handleNewNote = async () => {
    await api.post("/Notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Sucesso ao criar a nota!");
    goBack();
  };

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title="Voltar" onClick={goBack} />
          </header>

          <Input
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={index}
                value={link}
                onClick={() => handleRemoveLink(index)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={index}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(index);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova Tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
