import styled from 'styled-components';
import { SizeType } from '../types/types';

const Container = styled.div`
  border: solid 2px #5e262b;
  border-radius: 1.25rem;
`;

const Title = styled.h4<{ size: SizeType; color: string }>`
  font-family: Cooper, Arial, serif;
  color: #5e262b;
  font-size: ${(props) => (props.size === 'md' ? '1.5rem' : '1.125rem')};
  background-color: ${(props) => props.color};
  border-radius: 1.25rem 1.25rem 0 0;
  padding: 0.938rem 5.563rem;
  text-transform: uppercase;
`;

const TextContainer = styled.div`
  padding: 2.5rem 5.625rem;
`;

const Paragraph = styled.p<{ size: SizeType }>`
  font-size: ${(props) => (props.size === 'md' ? '1.25rem' : '1.125rem')};
  line-height: 1.875rem;
`;

const Bold = styled.span`
  font-weight: bold;
`;

interface BoxProps {
  title: string;
  text: (string | { label: string; value: string })[];
  color: string;
  size?: SizeType;
}

const Box = ({ title, text, color, size = 'md' }: BoxProps) => {
  const isOptionObject = (
    obj: any
  ): obj is { label: string; value: string } => {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      'label' in obj &&
      'value' in obj
    );
  };

  return (
    <Container>
      <Title size={size} color={color}>
        {title}
      </Title>
      <TextContainer>
        {text.map((paragraph, index) =>
          isOptionObject(paragraph) ? (
            <div key={index}>
              <Paragraph size={size}>
                <Bold>{paragraph.label}:</Bold> {paragraph.value}
              </Paragraph>
            </div>
          ) : (
            <Paragraph size={size} key={index}>
              {paragraph}
            </Paragraph>
          )
        )}
      </TextContainer>
    </Container>
  );
};
export default Box;
