/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Tag } from "../Tag/index";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2> {data.title} </h2>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.tag_id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
