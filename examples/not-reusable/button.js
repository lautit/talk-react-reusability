const ComparisonButton = ({
  isDisabled,
  icon,
  width,
  bu
}) => {
  const color = isDisabled === true ? '#999999' : '#1274b8';
  const btnClass = bu === 'mp' ? 'btn__blue' : 'btn__yellow';
  return (
    <button className={btnClass}>
      <Icon
        styles={icon}
        width={width}
        color={color}
      />
      Compare Me
    </button>
  );
};