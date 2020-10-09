const ParentComponent = (props) => {
  const color = props.isDisabled === true ? '#999999' : '#1274b8';
  const btnClass = props.bu === 'mp' ? 'btn__blue' : 'btn__yellow';
  const onClick = () => { /* do something */ };
  return (
    <Button className={btnClass} onClick={onClick}>
      <Icon
        styles={props.icon}
        width={props.width}
        color={color}
      />
    Compare Me
    </Button>
  );
};