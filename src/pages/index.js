import React, {useState} from "react";
import {
  Banner,
  Button,
  Card,
  Checkbox,
  Collapsible,
  DisplayText,
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
import faker from "faker";
import { Liquid } from 'liquidjs';

import PageLayout from "../components/layout";
import Editor from "../components/code";

const orderData = {
  email: faker.internet.email(),
  billingAddress: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address1: faker.address.streetAddress(),
    phone: "", //faker.phone.phoneNumber(),
    city: faker.address.city(),
    province: faker.address.state(),
    country: faker.address.country(),
    countryCode: faker.address.countryCode(),
    zip: faker.address.zipCode(),
  },
  shippingAddress: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address1: "123 Fake Street",
    phone: "", //faker.phone.phoneNumber(),
    city: "Fakecity",
    province: "Ontario",
    country: "Canada",
    zip: "K2P 1L4",
  },
  note: faker.hacker.phrase(),
  tags: "gil-shopify-order-wizard",
};

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
    {
        "attributes": {},
        "billing_address": {},
        "cancel_reason": null,
        "cancel_reason_label": null,
        "cancelled": false,
        "cancelled_at": null,
        "cart_level_discount_applications": [],
        "created_at": "2022-04-29 11:15:46 -0400",
        "customer": {},
        "customer_order_url": "https://shopify.com/56174706753/account/orders/4295688749121?locale=en",
        "customer_url": "https://polinas-potent-potions.myshopify.com/account/orders/8be02e56c658bcd1f034d28c496fddd9",
        "discount_applications": [],
        "discounts": null,
        "email": "cornelius.potionmaker@gmail.com",
        "financial_status": "paid",
        "financial_status_label": "Paid",
        "fulfillment_status": "partial",
        "fulfillment_status_label": "Partial",
        "id": 4295688749121,
        "item_count": 6,
        "line_items": [],
        "line_items_subtotal_price": "492.93",
        "metafields": {},
        "name": "#1001",
        "note": null,
        "order_number": 1001,
        "order_status_url": "https://polinas-potent-potions.myshopify.com/56174706753/orders/8be02e56c658bcd1f034d28c496fddd9/authenticate?key=4f9baf2b8ebd0f75ec73eb9bac6e4519",
        "phone": null,
        "shipping_address": {},
        "shipping_methods": [],
        "shipping_price": "0.00",
        "subtotal_line_items": [],
        "subtotal_price": "492.93",
        "tags": [],
        "tax_lines": [],
        "tax_price": "0.00",
        "total_discounts": "0.00",
        "total_duties": null,
        "total_net_amount": "492.93",
        "total_price": "492.93",
        "total_refunded_amount": "0.00",
        "transactions": []
      }
    {% endcapture %}
    
    {% assign order = mock_order | jsonToObject %}
    `;

    return `${mockTemplate}${liquidCode}`;
  };

  const handleCodeChange = (newCode) => {
    setLiquidCode(newCode);
    try {
      const mockTemplate = setMockData(newCode);
      const compiledTemplate = engine.parse(mockTemplate);
      const renderedTemplate = engine.renderSync(compiledTemplate);
      console.log('Rendered template:', renderedTemplate);
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
                icon: "external",
                url: "https://github.com/bangank36/shopify-order-status-editor",
              },
            ]}
          >

            <Layout>
              <Layout.Section>
                <DisplayText size="small">
                  Preview your code injection for Shopify post order status page without Shopify Plus ( $2000/month )
                </DisplayText>
              </Layout.Section>
              <Layout.Section>
                <Card sectioned title="Liquid Editor">
                  <Stack distribution="fill">
                    <Editor code={liquidCode} onEdit={handleCodeChange}/>
                  </Stack>
                  <Stack distribution="fill">
                    <Button>
                      <Subheading>Copy Code</Subheading>
                    </Button>
                    <Button>
                      <Subheading>Preview Code</Subheading>
                    </Button>
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
