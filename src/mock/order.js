/*
    Liquid: 
    {%  assign orderAttr = 'attributes,billing_address,cancel_reason,cancel_reason_label,cancelled,cancelled_at,cart_level_discount_applications,created_at,customer,customer_order_url,customer_url,discount_applications,discounts,email,financial_status,financial_status_label,fulfillment_status,fulfillment_status_label,id,item_count,line_items,line_items_subtotal_price,metafields,name,note,order_number,order_status_url,phone,shipping_address,shipping_methods,shipping_price,subtotal_line_items,subtotal_price,tags,tax_lines,tax_price,total_discounts,total_duties,total_net_amount,total_price,total_refunded_amount,transactions' %}
    {% assign orderObject = orderAttr | split: "," %}
*/

export default {
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
        "latitude": 10.7469721,
        "longitude": 106.6698874,
        "name": "Ngan Le",
        "country_code": "VN",
        "province_code": null
    },
    "cancel_reason": null,
    "cancel_reason_label": null,
    "cancelled": false,
    "cancelled_at": null,
    "cart_level_discount_applications": [],
    "created_at": "2022-12-26 11:30:19 +0700",
    "customer": {
        "error": "json not allowed for this object"
    },
    "customer_order_url": "https://shopify.com/69827330334/account/orders/5226579394846",
    "customer_url": "https://beyondspace.store/account/orders/97eff116e153061f69b07968147bc381",
    "discount_applications": [],
    "discounts": null,
    "email": "antitkeer+order@gmail.com",
    "financial_status": "paid",
    "financial_status_label": "Paid",
    "fulfillment_status": "unfulfilled",
    "fulfillment_status_label": "Unfulfilled",
    "id": 5226579394846,
    "item_count": 1,
    "line_items": [
        {
            "id": 13686275670302,
            "title": "Squarespace Plugin: Pinch zoom Lightbox",
            "price": "45.00",
            "line_price": "45.00",
            "quantity": 1,
            "sku": "",
            "grams": 0,
            "properties": [],
            "vendor": "Beyondspace",
            "requires_shipping": false,
            "applied_discounts": [],
            "tax_lines": [
                {
                    "tax_line": {
                        "title": "VAT",
                        "price": "4.50",
                        "rate": 0.1,
                        "price_set": {
                            "shop_money": {
                                "amount": "4.50",
                                "currency_code": "USD"
                            },
                            "presentment_money": {
                                "amount": "4.50",
                                "currency_code": "USD"
                            }
                        }
                    }
                }
            ],
            "taxable": true,
            "gift_card": false,
            "variant_id": 44215601234206,
            "variant": {
                "id": 44215601234206,
                "product_id": 8060569420062,
                "title": "Default Title",
                "price": "45.00",
                "sku": "",
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": "",
                "fulfillment_service": "manual",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2022-12-25T21:28:26+07:00",
                "updated_at": "2023-03-21T20:03:16+07:00",
                "taxable": true,
                "barcode": "",
                "grams": 0,
                "image_id": null,
                "weight": 0,
                "weight_unit": "kg",
                "inventory_quantity": 971,
                "old_inventory_quantity": 971,
                "requires_shipping": false
            },
            "url": "/products/squarespace-plugin-pinch-zoom-lightbox?variant=44215601234206",
            "product": {
                "id": 8060569420062,
                "title": "Squarespace Plugin: Pinch zoom Lightbox",
                "body_html": "<p>Replace default Squarespace Lightbox to enable pinch zoom</p>\n<p> </p>\n<p>Visit website for check the plugin in live site: https://beyondspace-showcase.squarespace.com/lightbox-demo?password=12345</p>\n<p> </p>\n<p>Squarespace lightbox feature is provided but it not allow to zoom closer to the image, this plugin will help user to zoom in/out the images on touch devices or desktop</p>\n<ul>\n<li>Basic gestures supported: swipe to next or previous image, spread to zoom in, drag to pan, pinch to zoom out, double tap...</li>\n<li>Replace all images and gallery lightbox</li>\n<li>Can group images of one section or blog into single lightbox gallery</li>\n</ul>\n<p>Lightbox zoom feature may suitable for photographer, food blogger, store owner... or anyone who wants to bring the zoom feature to their lightbox gallery.</p>\n<p>Work well with Squarespace 7.0 (Brine) and Squarespace 7.1 template. Replace lightbox on gallery block, gallery section, image block and summary block (which linked with a gallery page)</p>\n<p>Contact store owner for demo request before buying.</p>\n<p>License for single site only.</p>",
                "vendor": "Beyondspace",
                "product_type": "",
                "created_at": "2022-12-25T21:28:25+07:00",
                "handle": "squarespace-plugin-pinch-zoom-lightbox",
                "updated_at": "2023-03-21T20:05:14+07:00",
                "published_at": "2022-12-25T21:28:27+07:00",
                "template_suffix": "",
                "published_scope": "web",
                "tags": "code injection, custom code, squarepsace plugins, squarespace customisation",
                "variants": [
                    {
                        "id": 44215601234206,
                        "product_id": 8060569420062,
                        "title": "Default Title",
                        "price": "45.00",
                        "sku": "",
                        "position": 1,
                        "inventory_policy": "deny",
                        "compare_at_price": "",
                        "fulfillment_service": "manual",
                        "inventory_management": "shopify",
                        "option1": "Default Title",
                        "option2": null,
                        "option3": null,
                        "created_at": "2022-12-25T21:28:26+07:00",
                        "updated_at": "2023-03-21T20:03:16+07:00",
                        "taxable": true,
                        "barcode": "",
                        "grams": 0,
                        "image_id": null,
                        "weight": 0,
                        "weight_unit": "kg",
                        "inventory_quantity": 971,
                        "old_inventory_quantity": 971,
                        "requires_shipping": false
                    }
                ],
                "options": [
                    {
                        "id": 10241628963102,
                        "product_id": 8060569420062,
                        "name": "Title",
                        "position": 1,
                        "values": [
                            "Default Title"
                        ]
                    }
                ],
                "images": [
                    {
                        "id": 40155726840094,
                        "product_id": 8060569420062,
                        "position": 1,
                        "created_at": "2022-12-25T21:28:28+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 2399,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2820414546_81af.webp?v=1671978508",
                        "variant_ids": []
                    },
                    {
                        "id": 40155726872862,
                        "product_id": 8060569420062,
                        "position": 2,
                        "created_at": "2022-12-25T21:28:28+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 1350,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2866181267_f19j.webp?v=1671978508",
                        "variant_ids": []
                    },
                    {
                        "id": 40155726774558,
                        "product_id": 8060569420062,
                        "position": 3,
                        "created_at": "2022-12-25T21:28:27+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 1405,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2818518550_3mek.webp?v=1671978508",
                        "variant_ids": []
                    }
                ],
                "image": {
                    "id": 40155726840094,
                    "product_id": 8060569420062,
                    "position": 1,
                    "created_at": "2022-12-25T21:28:28+07:00",
                    "updated_at": "2022-12-25T21:28:28+07:00",
                    "alt": null,
                    "width": 1588,
                    "height": 2399,
                    "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2820414546_81af.webp?v=1671978508",
                    "variant_ids": []
                }
            },
            "fulfillment": null
        }
    ],
    "line_items_subtotal_price": 4500,
    "metafields": {
        "error": "json not allowed for this object"
    },
    "name": "#1001",
    "note": "|siteId=63e9b49b57beb42d270e6350|siteUrl=beyondspace-settings-ui.squarespace.com",
    "order_number": 1001,
    "order_status_url": "https://59b774-3.myshopify.com/69827330334/orders/97eff116e153061f69b07968147bc381/authenticate?key=de962f3fb793c346581692388760ffe2",
    "phone": null,
    "shipping_address": null,
    "shipping_methods": [],
    "shipping_price": 0,
    "subtotal_line_items": [
        {
            "id": 13686275670302,
            "title": "Squarespace Plugin: Pinch zoom Lightbox",
            "price": "45.00",
            "line_price": "45.00",
            "quantity": 1,
            "sku": "",
            "grams": 0,
            "properties": [],
            "vendor": "Beyondspace",
            "requires_shipping": false,
            "applied_discounts": [],
            "tax_lines": [
                {
                    "tax_line": {
                        "title": "VAT",
                        "price": "4.50",
                        "rate": 0.1,
                        "price_set": {
                            "shop_money": {
                                "amount": "4.50",
                                "currency_code": "USD"
                            },
                            "presentment_money": {
                                "amount": "4.50",
                                "currency_code": "USD"
                            }
                        }
                    }
                }
            ],
            "taxable": true,
            "gift_card": false,
            "variant_id": 44215601234206,
            "variant": {
                "id": 44215601234206,
                "product_id": 8060569420062,
                "title": "Default Title",
                "price": "45.00",
                "sku": "",
                "position": 1,
                "inventory_policy": "deny",
                "compare_at_price": "",
                "fulfillment_service": "manual",
                "inventory_management": "shopify",
                "option1": "Default Title",
                "option2": null,
                "option3": null,
                "created_at": "2022-12-25T21:28:26+07:00",
                "updated_at": "2023-03-21T20:03:16+07:00",
                "taxable": true,
                "barcode": "",
                "grams": 0,
                "image_id": null,
                "weight": 0,
                "weight_unit": "kg",
                "inventory_quantity": 971,
                "old_inventory_quantity": 971,
                "requires_shipping": false
            },
            "url": "/products/squarespace-plugin-pinch-zoom-lightbox?variant=44215601234206",
            "product": {
                "id": 8060569420062,
                "title": "Squarespace Plugin: Pinch zoom Lightbox",
                "body_html": "<p>Replace default Squarespace Lightbox to enable pinch zoom</p>\n<p> </p>\n<p>Visit website for check the plugin in live site: https://beyondspace-showcase.squarespace.com/lightbox-demo?password=12345</p>\n<p> </p>\n<p>Squarespace lightbox feature is provided but it not allow to zoom closer to the image, this plugin will help user to zoom in/out the images on touch devices or desktop</p>\n<ul>\n<li>Basic gestures supported: swipe to next or previous image, spread to zoom in, drag to pan, pinch to zoom out, double tap...</li>\n<li>Replace all images and gallery lightbox</li>\n<li>Can group images of one section or blog into single lightbox gallery</li>\n</ul>\n<p>Lightbox zoom feature may suitable for photographer, food blogger, store owner... or anyone who wants to bring the zoom feature to their lightbox gallery.</p>\n<p>Work well with Squarespace 7.0 (Brine) and Squarespace 7.1 template. Replace lightbox on gallery block, gallery section, image block and summary block (which linked with a gallery page)</p>\n<p>Contact store owner for demo request before buying.</p>\n<p>License for single site only.</p>",
                "vendor": "Beyondspace",
                "product_type": "",
                "created_at": "2022-12-25T21:28:25+07:00",
                "handle": "squarespace-plugin-pinch-zoom-lightbox",
                "updated_at": "2023-03-21T20:05:14+07:00",
                "published_at": "2022-12-25T21:28:27+07:00",
                "template_suffix": "",
                "published_scope": "web",
                "tags": "code injection, custom code, squarepsace plugins, squarespace customisation",
                "variants": [
                    {
                        "id": 44215601234206,
                        "product_id": 8060569420062,
                        "title": "Default Title",
                        "price": "45.00",
                        "sku": "",
                        "position": 1,
                        "inventory_policy": "deny",
                        "compare_at_price": "",
                        "fulfillment_service": "manual",
                        "inventory_management": "shopify",
                        "option1": "Default Title",
                        "option2": null,
                        "option3": null,
                        "created_at": "2022-12-25T21:28:26+07:00",
                        "updated_at": "2023-03-21T20:03:16+07:00",
                        "taxable": true,
                        "barcode": "",
                        "grams": 0,
                        "image_id": null,
                        "weight": 0,
                        "weight_unit": "kg",
                        "inventory_quantity": 971,
                        "old_inventory_quantity": 971,
                        "requires_shipping": false
                    }
                ],
                "options": [
                    {
                        "id": 10241628963102,
                        "product_id": 8060569420062,
                        "name": "Title",
                        "position": 1,
                        "values": [
                            "Default Title"
                        ]
                    }
                ],
                "images": [
                    {
                        "id": 40155726840094,
                        "product_id": 8060569420062,
                        "position": 1,
                        "created_at": "2022-12-25T21:28:28+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 2399,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2820414546_81af.webp?v=1671978508",
                        "variant_ids": []
                    },
                    {
                        "id": 40155726872862,
                        "product_id": 8060569420062,
                        "position": 2,
                        "created_at": "2022-12-25T21:28:28+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 1350,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2866181267_f19j.webp?v=1671978508",
                        "variant_ids": []
                    },
                    {
                        "id": 40155726774558,
                        "product_id": 8060569420062,
                        "position": 3,
                        "created_at": "2022-12-25T21:28:27+07:00",
                        "updated_at": "2022-12-25T21:28:28+07:00",
                        "alt": null,
                        "width": 1588,
                        "height": 1405,
                        "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2818518550_3mek.webp?v=1671978508",
                        "variant_ids": []
                    }
                ],
                "image": {
                    "id": 40155726840094,
                    "product_id": 8060569420062,
                    "position": 1,
                    "created_at": "2022-12-25T21:28:28+07:00",
                    "updated_at": "2022-12-25T21:28:28+07:00",
                    "alt": null,
                    "width": 1588,
                    "height": 2399,
                    "src": "https://cdn.shopify.com/s/files/1/0698/2733/0334/products/il_1588xN.2820414546_81af.webp?v=1671978508",
                    "variant_ids": []
                }
            },
            "fulfillment": null
        }
    ],
    "subtotal_price": 4500,
    "tags": [
        "licensed"
    ],
    "tax_lines": [
        {
            "error": "json not allowed for this object"
        }
    ],
    "tax_price": 450,
    "total_discounts": 0,
    "total_duties": null,
    "total_net_amount": 4950,
    "total_price": 4950,
    "total_refunded_amount": 0,
    "transactions": [
        {
            "error": "json not allowed for this object"
        }
    ]
}
