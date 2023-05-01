import React, { useRef, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CreateableReactSelect from 'react-select/creatable';

// Types
import { NoteData, Tag } from '../App';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title"></Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control required ref={titleRef} />
          </Col>
          <Col>
            <Form.Group controlId="tags"></Form.Group>
            <Form.Label>Tags</Form.Label>
            <CreateableReactSelect isMulti />
          </Col>
        </Row>
        <Form.Group controlId="markdown"></Form.Group>
        <Form.Label>Body</Form.Label>
        <Form.Control required as="textarea" rows={15} ref={markdownRef} />
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}

export default NoteForm;
