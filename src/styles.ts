import { createGlobalStyle } from 'styled-components'

export const cores = {
    vermelho: '#E66767',
    rosa: '#FFEBD9',
    branco: '#FFFFFF',
    dourado: '#FFB930',
    bege: '#FFF8F2'
}
export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
body{
  background-color: ${cores.bege};
  color: ${cores.vermelho};
}
`
