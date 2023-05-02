import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { RecordFill } from 'react-bootstrap-icons';

// Components
import TagComponent from './TagComponent';
import { Tag } from '../App';

// Styles
import styles from '../app.module.css';
import { Badge, Stack } from 'react-bootstrap';

type NotePreviewProps = {
  title: string;
  excerpt: string;
  tags: Tag[];
  date: string;
  id: string;
};

function NotePreview({ id, title, excerpt, date, tags }: NotePreviewProps) {
  return (
    <div className="card border-0">
      <div className="d-flex">
        <div className="ms-4 align-self-center">
          <RecordFill color="#FDA639" size="20" />
        </div>

        <div className="card-body border-bottom">
          <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
            <h5 className={`card-title fw-bold  ${styles.previewTitleHeader}`}>
              {title}
            </h5>
          </Link>
          <p className="card-text" style={{ color: '#6C6C6C' }}>
            <span>{moment(date).format('LT')} </span>
            {excerpt}
          </p>

          {tags.length > 0 && (
            <Stack gap={2} direction="horizontal" className="flex-wrap">
              {tags.map((tag) => (
                <Badge className="text-truncate bg-secondary" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotePreview;
