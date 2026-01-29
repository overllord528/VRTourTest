var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-hallway",
      "name": "Main Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16984068046629375,
          "pitch": 0.20008568203469324,
          "rotation": 0,
          "target": "1-storms-a-brewin"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3002059196593425,
          "pitch": 0.05904736933605115,
          "title": "Exit Door",
          "text": "This is a door."
        }
      ]
    },
    {
      "id": "1-storms-a-brewin",
      "name": "Storms a\" Brewin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.299141981011525,
          "pitch": 0.24525718496442828,
          "rotation": 0,
          "target": "0-main-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6533078152425542,
          "pitch": 0.25464146126545373,
          "title": "Snack Bar",
          "text": "Yummy"
        }
      ]
    }
  ],
  "name": "VRTourTest",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
