import React, {useState} from "react";
import {
  Banner,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Checkbox,
  Collapsible,
  Text,
  Heading,
  List,
  FormLayout,
  Layout,
  Modal,
  TextContainer,
  TextField,
  TextStyle,
  Page,
  Stack,
  Select,
  Subheading,
} from "@shopify/polaris";
import {ExternalMinor} from '@shopify/polaris-icons';
import { Liquid } from 'liquidjs';

import PageLayout from "../components/layout";
import Editor from "../components/code";

import MockOrder from "../mock/order";
import MockShop from "../mock/shop";
import MockCheckout from "../mock/checkout";
import MockVariables from "../mock/variables";

function IndexPage () {
  const [liquidCode, setLiquidCode] = React.useState(
    `{% assign name = 'John' %}
    Hello, {{ name }}!`
  );
  const [parsedLiquidCode, setParsedLiquidCode] = React.useState('');

  const engine = new Liquid();
  // Register new filter to parse JSON string to object
  engine.registerFilter("jsonToObject", (json) => { 
    return JSON.parse(json)
  });

  const setMockData = (liquidCode) => {
    const mockTemplate = `
    {% capture mock_order %}
    ${ JSON.stringify(MockOrder) }
    {% endcapture %}
    {% assign order = mock_order | jsonToObject %}

    {% capture mock_shop %}
    ${ JSON.stringify(MockShop) }
    {% endcapture %}
    {% assign shop = mock_shop | jsonToObject %}

    {% capture mock_checkout %}
    ${ JSON.stringify(MockCheckout) }
    {% endcapture %}
    {% assign checkout = mock_checkout | jsonToObject %}

    ${ Object.keys(MockVariables).map((key) => {
      return `{% assign ${key} = '${MockVariables[key]}' %}`
    }).join(' ') }
    `;

    return `${mockTemplate}${liquidCode}`;
  };

  const handleCodeChange = (newCode) => {
    setLiquidCode(newCode);
    try {
      const mockedCode = setMockData(newCode);
      const compiledTemplate = engine.parse(mockedCode);
      const renderedTemplate = engine.renderSync(compiledTemplate);
      setParsedLiquidCode(renderedTemplate);
    } catch (e) {
      console.error('Error rendering template:', e);
    }
  };
    return (
      <PageLayout>
          <Page
            title="Shopify Post Order Injection"
            secondaryActions={[
              {
                content: "View Source Code",
                external: true,
                icon: ExternalMinor,
                url: "https://github.com/bangank36/shopify-order-status-editor",
              },
            ]}
          >
            <Layout>
              <Layout.Section>
                <Text size="small">
                  Preview your code injection for Shopify post order status page without Shopify Plus ( $2000/month )
                </Text>
              </Layout.Section>
            </Layout>
            <Divider borderStyle="transparent" />
            <Layout>
              <Layout.Section>
                <Card title="Liquid Editor" sectioned>
                  <Stack distribution="fill">
                    <Editor code={liquidCode} onEdit={handleCodeChange}/>
                  </Stack>
                </Card>
              </Layout.Section>
              <Layout.Section secondary>
                <Card sectioned title="Parsed Liquid">
                  <Stack distribution="leading">
                    <ButtonGroup>
                      <Button onClick={ () => {} }>Reset</Button>
                      <Button  
                          onClick={() => {} }>
                              Copy to Clipboard
                      </Button>
                    </ButtonGroup>
                  </Stack>
                  <Stack distribution="fill">
                  <Editor code={parsedLiquidCode} onEdit={()=>{}}/>
                  </Stack>
                </Card>
              </Layout.Section>
            </Layout>
          </Page>
        </PageLayout>
    );
}

export default IndexPage;
