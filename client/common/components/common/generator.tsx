type generatorProps = {
  name: string
  description: string
  link: string
}

export const Generator = ({ name, description, link }: generatorProps) => {
  return (
    <div className="support-topic-item card card-bordered">
      <a className="support-topic-block card-inner" href={link}>
        <div className="support-topic-context">
          <h5 className="support-topic-title title">{name}</h5>
          <div className="support-topic-info">{description}</div>
          <div className="support-topic-count">общаяя статистика по записям в БД.</div>
        </div>
        <div className="support-topic-action">
          <em className="icon ni ni-chevron-right" />
        </div>
      </a>
    </div>
  );
};
