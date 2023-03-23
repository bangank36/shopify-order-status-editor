/*
    Liquid: 
    {%  assign shopAttr = 'accepts_gift_cards,address,collections_count,currency,customer_accounts_enabled,customer_accounts_optional,description,domain,email,enabled_currencies,enabled_locales,enabled_payment_types,id,locale,metafields,metaobjects,money_format,money_with_currency_format,name,password_message,permanent_domain,phone,policies,privacy_policy,products_count,published_locales,refund_policy,secure_url,shipping_policy,subscription_policy,taxes_included,terms_of_service,types,url,vendors' %}
    {% assign shopObject = shopAttr | split: "," %}
*/

export default {
    "accepts_gift_cards": false,
    "address": {
        "first_name": null,
        "address1": "4/3 Nui Thanh",
        "phone": "0347193711",
        "city": "Ho Chi Minh",
        "zip": "70000",
        "province": "",
        "country": "Vietnam",
        "last_name": null,
        "address2": "",
        "company": "",
        "latitude": 10.7469721,
        "longitude": 106.6698874,
        "name": "",
        "country_code": "VN",
        "province_code": null
    },
    "collections_count": 1,
    "currency": "USD",
    "customer_accounts_enabled": true,
    "customer_accounts_optional": true,
    "description": "",
    "domain": "beyondspace.store",
    "email": "admin@beyondspace.studio",
    "enabled_currencies": [
        {
            "error": "json not allowed for this object"
        }
    ],
    "enabled_locales": [
        {
            "error": "json not allowed for this object"
        }
    ],
    "enabled_payment_types": [
        "paypal"
    ],
    "id": 69827330334,
    "locale": "en",
    "metafields": {
        "error": "json not allowed for this object"
    },
    "metaobjects": null,
    "money_format": "${{amount}}",
    "money_with_currency_format": "${{amount}} USD",
    "name": "Beyondspace",
    "password_message": null,
    "permanent_domain": "59b774-3.myshopify.com",
    "phone": "0347193711",
    "policies": [],
    "privacy_policy": null,
    "products_count": 3,
    "published_locales": [
        {
            "error": "json not allowed for this object"
        }
    ],
    "refund_policy": null,
    "secure_url": "https://beyondspace.store",
    "shipping_policy": null,
    "subscription_policy": null,
    "taxes_included": false,
    "terms_of_service": null,
    "types": [
        ""
    ],
    "url": "https://beyondspace.store",
    "vendors": [
        "Beyondspace"
    ]
}
