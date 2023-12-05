import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "./../../components/ButtonText/index";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { FiPlus, FiSearch } from "react-icons/fi";

export function Home() {
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSelectedTag = (tagName) => {
    if (tagName === "all") {
      return setSelectedTags([]);
    }

    const alreadySelected = selectedTags.includes(tagName);

    setSelectedTags((prevState) =>
      alreadySelected
        ? prevState.filter((tag) => tag !== tagName)
        : [...prevState, tagName]
    );
  };

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchTags = async () => {
      const response = await api.get("/Tags");
      setTags(response.data);
    };

    fetchTags();
  }, []);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await api.get(
        `/Notes?title=${search}&tags=${selectedTags}`
      );
      setNotes(response.data);
    };

    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={selectedTags.length === 0}
            onClick={() => {
              handleSelectedTag("all");
            }}
          />
        </li>
        {tags?.map((tag) => (
          <li key={tag.tag_id}>
            <ButtonText
              title={tag.name}
              onClick={() => {
                handleSelectedTag(tag.name);
              }}
              isActive={selectedTags.includes(tag.name)}
            />
          </li>
        ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {notes?.map((note) => (
            <Note
              key={note.note_id}
              data={note}
              onClick={() => handleDetails(note.note_id)}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
