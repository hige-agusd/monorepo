// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Accordion, Button,  ThemeProvider} from "@monorepo/hige-ds";

import { Typography } from "libs/hige-ds/lib/components/typography";
import { themeLight } from "libs/hige-ds/lib/themes";

export function App() {
  return (
    <ThemeProvider theme={themeLight}>

    <div>
      <Button prefixContent={<div>@</div>} variant="secondary" onClick={() => alert('click')}>Botonazo</Button>
      <Accordion.Wrapper type="single">
      <Accordion.Item value={'0'} label='Accordion label' text='Text'>
        <Typography>Content...</Typography>
      </Accordion.Item>
      </Accordion.Wrapper>
    </div>
    </ThemeProvider>
  );
}

export default App;
