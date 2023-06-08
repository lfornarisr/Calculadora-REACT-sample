import "../styles/Key.css";

export function Key(props) {

  return (
    <button onClick={() => props.onPress(props.children)}
      className={
        "key" +
        (Number.isNaN(parseInt(props.children))
          ? props.children === "CE"
            ? " clear"
            : " operator"
          : "")
      }
    >
      {props.children}
    </button>
  );
}
