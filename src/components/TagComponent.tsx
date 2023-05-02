type TagProps = {
  label: string;
};

function TagComponent({ label }: TagProps) {
  return <span className="badge rounded-pill bg-secondary px-3">{label}</span>;
}

export default TagComponent;
