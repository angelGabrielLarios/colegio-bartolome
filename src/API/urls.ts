export const url_facebook = `https://graph.facebook.com`

export const url_page = `https://www.facebook.com/246471728550678/posts`

/* 
    ==== Query
curl - i - X GET \
"https://graph.facebook.com/v19.0/246471728550678/feed?access_token=<access token sanitized>"
    ==== Access Token Info
{
    "perms": [
        "email",
        "pages_show_list",
        "pages_read_engagement",
        "public_profile"
    ],
        "page_id": 246471728550678,
            "user_id": 781271579772512,
                "app_id": 491826195888874
}
==== Parameters
    - Query Parameters


{ }
- POST Parameters


{ }
==== Response
{
    "data": [
        {
            "created_time": "2024-02-24T04:01:04+0000",
            "id": "246471728550678_122097894338225935"
        },
        {
            "created_time": "2024-02-24T04:00:49+0000",
            "id": "246471728550678_122097894182225935"
        }
    ],
        "paging": "--sanitized--"
}
==== Debug Information from Graph API Explorer
    - https://developers.facebook.com/tools/explorer/?method=GET&path=246471728550678%2Ffeed&version=v19.0 */