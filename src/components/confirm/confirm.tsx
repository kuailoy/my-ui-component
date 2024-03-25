import { forwardRef } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ConfirmHeader, ConfirmHeaderProps } from './confirm-header';
import { ConfirmBody, ConfirmBodyProps } from './confirm-body';
import { ConfirmFooter, ConfirmFooterProps } from './confirm-footer';
import { useProps } from './use-props';
import { themeConfig } from './confirm-const';

export interface ConfirmProps extends ConfirmHeaderProps, ConfirmBodyProps, ConfirmFooterProps {
  theme?: 'dark' | 'light';
}

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-height: 100vh;
  }
  div, p, span {
    box-sizing: border-box;
  }
`;

// Expose the container for external users to customize styles.
export const ConfirmContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmInnerContainer = styled.div`
  background: ${(props) => props.theme.background};
  width: 400px;
  padding: 13px 15px 4px;
  border-radius: 6px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Confirm = forwardRef<HTMLDivElement, ConfirmProps>(({ theme = 'light', ...props }, ref) => {
  const { headerProps, bodyProps, footerProps } = useProps(props);
  const themeConfigValue = themeConfig[theme];

  return (
    <ThemeProvider theme={themeConfigValue}>
      <GlobalStyle />
      <ConfirmContainer>
        <ConfirmInnerContainer ref={ref}>
          <ConfirmHeader {...headerProps} />
          <ConfirmBody {...bodyProps} />
          <ConfirmFooter {...footerProps} />
        </ConfirmInnerContainer>
      </ConfirmContainer>
    </ThemeProvider>
  );
});
