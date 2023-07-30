request_body = {
    "api_key": "670676118b7e5dc1dde1ad03b7e649b3",
    "events": [
        {
            "device_id": "f064362b-9082-47a2-a274-12ce2a00b668",
            "session_id": 1690737188516,
            "time": 1690737188516,
            "platform": "Web",
            "language": "en-US",
            "ip": "$remote",
            "insert_id": "92c6047c-b5e1-4ae4-98f7-18704663b7b2",
            "event_type": "session_start",
            "event_id": 0,
            "library": "amplitude-ts/2.0.0",
            "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        },
        {
            "device_id": "f064362b-9082-47a2-a274-12ce2a00b668",
            "session_id": 1690737188516,
            "time": 1690737188521,
            "platform": "Web",
            "language": "en-US",
            "ip": "$remote",
            "insert_id": "0834614c-6a6f-4160-afc0-c8db6b135faf",
            "event_type": "$identify",
            "user_properties": {
                "$setOnce": {
                    "initial_utm_campaign": "EMPTY",
                    "initial_utm_content": "EMPTY",
                    "initial_utm_id": "EMPTY",
                    "initial_utm_medium": "EMPTY",
                    "initial_utm_source": "EMPTY",
                    "initial_utm_term": "EMPTY",
                    "initial_referrer": "EMPTY",
                    "initial_referring_domain": "EMPTY",
                    "initial_dclid": "EMPTY",
                    "initial_gbraid": "EMPTY",
                    "initial_gclid": "EMPTY",
                    "initial_fbclid": "EMPTY",
                    "initial_ko_click_id": "EMPTY",
                    "initial_li_fat_id": "EMPTY",
                    "initial_msclkid": "EMPTY",
                    "initial_rtd_cid": "EMPTY",
                    "initial_ttclid": "EMPTY",
                    "initial_twclid": "EMPTY",
                    "initial_wbraid": "EMPTY"
                },
                "$unset": {
                    "utm_campaign": "-",
                    "utm_content": "-",
                    "utm_id": "-",
                    "utm_medium": "-",
                    "utm_source": "-",
                    "utm_term": "-",
                    "referrer": "-",
                    "referring_domain": "-",
                    "dclid": "-",
                    "gbraid": "-",
                    "gclid": "-",
                    "fbclid": "-",
                    "ko_click_id": "-",
                    "li_fat_id": "-",
                    "msclkid": "-",
                    "rtd_cid": "-",
                    "ttclid": "-",
                    "twclid": "-",
                    "wbraid": "-"
                }
            },
            "event_id": 1,
            "library": "amplitude-ts/2.0.0",
            "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        },
        {
            "device_id": "f064362b-9082-47a2-a274-12ce2a00b668",
            "session_id": 1690737188516,
            "time": 1690737188522,
            "platform": "Web",
            "language": "en-US",
            "ip": "$remote",
            "insert_id": "e4bdc95a-8556-4656-b022-631c9cc3b6be",
            "event_type": "[Amplitude] Page Viewed",
            "event_properties": {
                "[Amplitude] Page Domain": "pre-flop-all-in.com",
                "[Amplitude] Page Location": "https://pre-flop-all-in.com/",
                "[Amplitude] Page Path": "/",
                "[Amplitude] Page Title": "Pre-flop all-in",
                "[Amplitude] Page URL": "https://pre-flop-all-in.com/"
            },
            "event_id": 2,
            "library": "amplitude-ts/2.0.0",
            "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
        }
    ],
    "options": {}
}

if ("events" in request_body) {
    request_body.events.forEach(event => {
        if ("event_type" in event) {
            console.log("event_type:", event.event_type)
        }    
        if ("event_properties" in event) {
            console.log(event.event_properties);
        }
    })
}