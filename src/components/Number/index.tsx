import { NumberComp } from "./styles";

type numeroProps = {
  number: string;
  margin?: string;
  color?: string;
  fontSize?: string;
  padding?: string;
}

export function Number({ number, margin, color, padding, ...rest }: numeroProps) {
  return (
    <NumberComp margin={margin} color={color}
      padding={padding} {...rest}>
      {number}
    </NumberComp>
  );
}
