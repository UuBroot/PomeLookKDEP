var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "438",
                    "ToolBoxButtonY": "42",
                    "positions": "{\"1920x1080\":[\"3\"\\,\"17\"\\,\"desktop:/Screenshot_20221116_143819.png\"\\,\"2\"\\,\"7\"]\\,\"1280x720\":[\"\"]}",
                    "sortMode": "-1"
                },
                "/Wallpaper/com.darkeye.animatedImage/General": {
                    "FillMode": "2",
                    "Image": "file:///var/home/trosenbichler/.local/share/wallpapers/moedark.png"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///var/home/trosenbichler/.local/share/wallpapers/moedark.png",
                    "SlidePaths": "/home/trosenbichler/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "509",
                            "popupWidth": "667"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/General": {
                            "length": "926"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/General": {
                            "length": "475"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "76",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.2222222222222223,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "localPath": "/home/trosenbichler/.local/share/plasma_icons/org.kde.konsole (3).desktop",
                            "url": "file:///usr/share/applications/org.kde.konsole.desktop"
                        },
                        "/General": {
                            "localPath": "/home/trosenbichler/.local/share/plasma_icons/org.kde.konsole.desktop",
                            "url": "file:///usr/share/applications/org.kde.konsole.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,applications:org.kde.discover.desktop,preferred://filemanager,applications:com.discordapp.Discord.desktop,applications:firefox.desktop,applications:com.github.xournalpp.xournalpp.desktop,applications:com.vscodium.codium.desktop",
                            "maxStripes": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "76",
                    "DialogWidth": "1920"
                },
                "/Shortcuts": {
                    "global": ""
                }
            },
            "height": 3.7777777777777777,
            "hiding": "autohide",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
