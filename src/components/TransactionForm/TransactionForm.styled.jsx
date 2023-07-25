import styled from '@emotion/styled';
import { Form } from "react-bootstrap";

export const StyledInput = styled(Form.Control)`
&.error {
    border: 1px solid red;
}
`;
export const ErrorField = styled.div`
font-size: 14px;
color: red;
`;
