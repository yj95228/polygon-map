import styled from '@emotion/styled';

export interface StyledProps {
  submit?: boolean;
}
export const StyledButton = styled.button<StyledProps>`
  display: inline;
  width: 100px;
  height: 45px;
  font-size: 16px;
  border: 1px solid #40a6fd;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  margin-bottom: ${(props) => props.submit && '10px'};
  background-color: ${(props) => (props.submit ? '#40a6fd' : '#fff')};
  color: ${(props) => (props.submit ? '#fff' : '#40a6fd')};
  &:hover {
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.submit && 'dodgerblue'};
  }
`;
