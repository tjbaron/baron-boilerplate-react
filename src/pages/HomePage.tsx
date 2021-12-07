import { useQuery } from '@apollo/client';
import * as React from 'react';
import { EXAMPLE_QUERY } from '../queries';
import {
    NodeEditor,
    FlumeConfig,
    Controls,
    Colors,
    RootEngine,
    useRootEngine,
    FlumeThemeProvider,
    createFlumeTheme
} from "@tjbaron/flume";
import { Button } from '../components/atoms/Button';

const config: any = new FlumeConfig()
config
  .addPortType({
    type: "string",
    name: "string",
    label: "Text",
    color: Colors.green,
    controls: [
      Controls.text({
        name: "string",
        label: "Text"
      })
    ]
  })
  .addNodeType({
    type: "string",
    label: "Text",
    description: "Outputs a string of text",
    inputs: (ports: any) => [
      ports.string()
    ],
    outputs: (ports: any) => [
      ports.string()
    ]
  })

export const HomePage = () => {
    const [random, setRandom] = React.useState(Math.floor(Math.random()*100));
    const { loading, error, data } = useQuery(EXAMPLE_QUERY, {
        variables: { number: random },
    });
    // if (loading) return <div>loading...</div>;
    // if (error) return <div>error...</div>;
    return <div>
        <Button onClick={() => {
            setRandom(Math.floor(Math.random()*100));
        }} title={JSON.stringify(data)} />
        <div style={{width: "500px", height: "500px"}}>
            <FlumeThemeProvider value={createFlumeTheme({
                grid: {
                    backgroundColor: "white",
                    gridColor: "rgb(224,224,224)"
                }
            })}>
                <NodeEditor
                    portTypes={config.portTypes}
                    nodeTypes={config.nodeTypes} />
            </FlumeThemeProvider>
        </div>
    </div>;
};
