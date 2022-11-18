import { TextComp } from "./styles";

type TitleProprs = {
  description: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export function Title({ description, color, fontSize,fontWeight, ...rest }: TitleProprs) {
  return (
    <TextComp color={color} fontWeight={fontWeight}
      {...rest}>
      {description}
    </TextComp>
  );
}
