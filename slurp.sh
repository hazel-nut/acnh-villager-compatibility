#!/bin/bash

curl -s "https://nookipedia.com/w/api.php?action=cargoquery&format=json&limit=500&tables=nh_villager&fields=name,image_url,species,personality,sub_personality,gender,birthday,sign,quote,catchphrase,clothing,fav_color1,fav_color2,fav_style1,fav_style2" -H "Accept: application/json" | jq ".cargoquery | [ (.[] | .title | .) ]" > blob.json
