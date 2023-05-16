/**
 * https://www.npmjs.com/package/@types/styled-components
 * npm install --save-dev styled-components @types/styled-components から
 * npm install --save @types/styled-components へ変更
 * 
 * 実際に機能したのはこっち。styled-components@latest で　最新版をインストールする記述内容
 * npm install --save-dev styled-components@latest @types/styled-components
*/

import { GlobalWrapper } from "./components/GlobalWrapper";

export const App = () => {
  return (
    <>
      <GlobalWrapper />
    </>
  );
}