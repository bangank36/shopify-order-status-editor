/*
    Liquid: 
    {%  assign checkoutAttr = 'applied_gift_cards,attributes,billing_address,buyer_accepts_marketing,cart_level_discount_applications,currency,customer,discount_applications,discounts_amount,discounts_savings,email,gift_cards_amount,id,line_items,line_items_subtotal_price,name,note,order,order_id,order_name,order_number,requires_shipping,shipping_address,shipping_method,shipping_price,tax_lines,tax_price,total_price,transactions' %}
    {% assign checkoutObject = checkoutAttr | split: "," %}
*/
export default {
    "applied_gift_cards": [],
    "attributes": {},
    "billing_address": {
        "first_name": "Ngan",
        "address1": "4/3 Nui Thanh",
        "phone": null,
        "city": "Ho Chi Minh",
        "zip": "70000",
        "province": null,
        "country": "Vietnam",
        "last_name": "Le",
        "address2": null,
        "company": null,
        "latitude": null,
        "longitude": null,
        "name": "Ngan Le",
        "country_code": "VN",
        "province_code": null
    },
    "buyer_accepts_marketing": false,
    "cart_level_discount_applications": [],
    "currency": "USD",
    "customer": {
        "error": "json not allowed for this object"
    },
    "discount_applications": [],
    "discounts_amount": 0,
    "discounts_savings": 0,
    "email": "antitkeer+order@gmail.com",
    "gift_cards_amount": 0,
    "id": 36535001874718,
    "line_items": [
        null
    ],
    "line_items_subtotal_price": 4500,
    "name": "#36535001874718",
    "note": null,
    "order": {
        "error": "json not allowed for this object"
    },
    "order_id": 5226579394846,
    "order_name": "#1001",
    "order_number": 1001,
    "requires_shipping": false,
    "shipping_address": null,
    "shipping_method": null,
    "shipping_price": 0,
    "tax_lines": [
        {
            "error": "json not allowed for this object"
        }
    ],
    "tax_price": 450,
    "total_price": 4950,
    "transactions": [
        {
            "error": "json not allowed for this object"
        }
    ]
}
