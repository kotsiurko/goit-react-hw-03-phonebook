import { List, ListItem, Title, ParagraphText } from './ContactList.styled';
import { Button } from '../App.styled';

export const ContactList = ({ contacts, deleteTodo }) => {
  return (
    <div>
      <Title>Contact List</Title>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div style={{ textAlign: 'left' }}>
              <p>
                <ParagraphText>Contact name:</ParagraphText> {name}
              </p>
              <p>
                <ParagraphText>Tel. number:</ParagraphText> {number}
              </p>
            </div>
            <Button type="button" onClick={() => deleteTodo(id)}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
