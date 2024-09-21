#!/bin/python3

import json

compatibility = {}
with open('blob.json', 'r') as f:
    data = json.load(f)
    for i in range(len(data)):
        target = data[i]
        target_name = target['name']
        compatibility.setdefault(target_name, {})

        for villager in data[i+1:]:
            villager_name = villager['name']
            compatibility.setdefault(villager_name, {})
            relationship = {
                'points': len(villager['name']),
                'compatibility': 'average'
            }
            compatibility[target_name][villager_name] = relationship
            compatibility[villager_name][target_name] = relationship

#print(json.dumps(compatibility, indent=2))

with open('compatibility.json', 'w') as f:
    json.dump(compatibility, f, indent=2)
