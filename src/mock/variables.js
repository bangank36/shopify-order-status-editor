import mockOrder from './order';
import mockShop from './shop';
import mockCheckout from './checkout';

// Available liquid variables on Post order checkout page
// https://github.com/bangank36/shopify-order-status-editor/issues/5#issuecomment-1479376340

export default {
    shop_name: mockShop.name,
    order_number: mockOrder.order_number,
    order_name: mockOrder.name,
    name: mockOrder.name,
    date: mockOrder.created_at,
    created_at: mockOrder.created_at,
    billing_address: mockOrder.billing_address,
    shipping_address: mockOrder.shipping_address,
    shipping_methods: mockOrder.shipping_methods,
    shipping_lines: mockOrder.shipping_methods,
    customer: mockOrder.customer,
    email: mockOrder.email,
    financial_status: mockOrder.financial_status,
    fulfillment_status: mockOrder.fulfillment_status,
    discounts_amount: mockCheckout.discounts_amount,
    discounts_savings: mockCheckout.discounts_savings,
    gateways: null, // TODO: findout gateways value on other shopify store
    gateway: null, // TODO: findout gateway value on other shopify store
    subtotal_price: mockOrder.subtotal_price,
    shipping_price: mockOrder.shipping_price,
    total_discounts: mockOrder.total_discounts,
    total_tax: mockOrder.tax_price,
    tax_price: mockOrder.tax_price,
    total_price: mockOrder.total_price,
    total_paid: null, // TODO: findout this value
    transactions: mockCheckout.transactions,
    attributes: mockOrder.attributes,
    note: mockCheckout.note,
    currency: mockCheckout.currency,
    line_items: mockOrder.line_items,
}
