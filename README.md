[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![Donate Paypal]][paypal] [![Wishlist amazon]][amazon] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription] [![GitHub followers]][followers] [![Follow Jon on Twitter]][twitter]

# Jonnitto.PrettyEmbedYoutube

Prettier embeds for your YouTube videos and playlists in [Neos CMS] - with nice options like high-res preview images, lightbox feature and advanced customization of embed options.

| Version  | Neos           |
| -------- | -------------- |
| 2.\*     | 2.\*           |
| > 4.1.\* | 3.\* + 4.\*    |
| 5.\*     | 3.3.\* + 4.\*  |
| 6.\*     | ^4.2.\* + 5.\* |
| 7.\*     | ^4.2.\* + 5.\* |

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require jonnitto/prettyembedyoutube --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## PrettyEmbedCollection

This package is member of the [PrettyEmbedCollection] which contains following packages:

-   [PrettyEmbedVideo]
-   [PrettyEmbedVimeo]
-   [PrettyEmbedYoutube]

If you install the PrettyEmbedCollection the video players get grouped into a own group in the node inspector, otherwise they will be in the default group.

## FAQ

**What are the differences from the PrettyEmbed series to [Jonnitto.Plyr]?**

|                                    | PrettyEmbed series |  Plyr  |
| ---------------------------------- | :----------------: | :----: |
| YouTube Video                      |         ✓          |   ✓    |
| YouTube Playlist                   |         ✓          |        |
| Vimeo                              |         ✓          |   ✓    |
| Native Audio                       |         ✓          |   ✓    |
| Native Video                       |         ✓          |   ✓    |
| Advanced captions for native video |         ✓          |        |
| Preview image                      |         ✓          |        |
| Lightbox included                  |         ✓          |        |
| Preview image (for videos)         |         ✓          |        |
| Javascript API                     |                    |   ✓    |
| Filesize (JS & CSS)                |      smaller       | bigger |

All packages from the PrettyEmbed series have the benefit of a better frontend performance since the player gets only loaded on request. So, no iframe/video get's loaded until the user wants to watch a video.

## Customization

### Configuration

If you want to customize the default settings, take a look at the [Settings.Jonnitto.yaml] file. If no node property is giving, these default values will be taken. If you, for example, don't want to let the editor choose if the video is a playlist or just a video you can deactivate the mixin in your Configuration folder like this:

```yaml
"Jonnitto.PrettyEmbedYoutube:Content.Youtube":
    superTypes:
        "Jonnitto.PrettyEmbedYoutube:Mixin.Type": false
```

These are the available mixins:

| Mixin name                                         | Description                                                           | Enabled |
| -------------------------------------------------- | --------------------------------------------------------------------- | :-----: |
| `Jonnitto.PrettyEmbedHelper:Mixin.Groups`          | Enables the inspector groups                                          |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.IncludeAssets`   | Include the frontend resources                                        |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.Image`           | Add the preview image property                                        |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.Lightbox`        | Open the video in a lightbox, defaults to `false`                     |    ✓    |
| `Jonnitto.PrettyEmbedYoutube:Mixin.Type`           | Choose between `playlist` and `video`, defaults to `video`            |    ✓    |
| `Jonnitto.PrettyEmbedYoutube:Mixin.VideoID`        | Let the user enter the video id or youtube url                        |    ✓    |
| `Jonnitto.PrettyEmbedYoutube:Mixin.BackendLabel`   | Read the title of the video and set this as label in the content tree |    ✓    |
| `Jonnitto.PrettyEmbedHelper:Mixin.AllowFullScreen` | Allow fullscreen or not, defaults to `true`                           |         |
| `Jonnitto.PrettyEmbedHelper:Mixin.Loop`            | Loop the video, defaults to `false`                                   |         |
| `Jonnitto.PrettyEmbedHelper:Mixin.Controls`        | Show the controls, defaults to `true`                                 |         |
| `Jonnitto.PrettyEmbedYoutube:Mixin.ShowInfo`       | Show the info bar, defaults to `false`                                |         |
| `Jonnitto.PrettyEmbedYoutube:Mixin.ClosedCaptions` | Show captions, defaults to `false`                                    |         |
| `Jonnitto.PrettyEmbedYoutube:Mixin.ShowRelated`    | Show related videos at the end, defaults to `false`                   |         |

### Fusion

If you want to use the player as a pure component, you can use the [`Jonnitto.PrettyEmbedYoutube:Component.Youtube`] fusion prototype.

If you want to read the node properties and let the package handle all for you, you should use the [`Jonnitto.PrettyEmbedYoutube:Content.Youtube`] prototype. For easier including in your own node types, you can disable the content element wrapping with `contentElement = false`. This is useful if you want to create for example a text with video node type.

## Update from older versions

To update from version 5 or older, you have to run following command in your cli:  
`./flow node:migrate --version 20190619204500`

To check the current state of the migrations, you can run  
`./flow node:migrationstatus`

If you want to update from version 4 or older, you have to run following command:  
`./flow node:migrate --version 20181029203246`

After all those migrations you have to flush your frontend cache:  
`./flow cache:flushone --identifier Neos_Fusion_Content`

[packagist]: https://packagist.org/packages/jonnitto/prettyembedyoutube
[latest stable version]: https://poser.pugx.org/jonnitto/prettyembedyoutube/v/stable
[total downloads]: https://poser.pugx.org/jonnitto/prettyembedyoutube/downloads
[license]: https://poser.pugx.org/jonnitto/prettyembedyoutube/license
[github forks]: https://img.shields.io/github/forks/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Fork
[donate paypal]: https://img.shields.io/badge/Donate-PayPal-yellow.svg
[wishlist amazon]: https://img.shields.io/badge/Wishlist-Amazon-yellow.svg
[amazon]: https://www.amazon.de/hz/wishlist/ls/2WPGORAVYF39B?&sort=default
[paypal]: https://www.paypal.me/Jonnitto/20eur
[github stars]: https://img.shields.io/github/stars/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Watch
[github followers]: https://img.shields.io/github/followers/jonnitto.svg?style=social&label=Follow
[follow jon on twitter]: https://img.shields.io/twitter/follow/jonnitto.svg?style=social&label=Follow
[twitter]: https://twitter.com/jonnitto
[fork]: https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/fork
[stargazers]: https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/stargazers
[subscription]: https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/subscription
[followers]: https://github.com/jonnitto/followers
[license]: LICENSE
[neos cms]: https://www.neos.io
[prettyembedcollection]: https://github.com/jonnitto/Jonnitto.PrettyembedCollection
[prettyembedvideo]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVideo
[prettyembedvimeo]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVimeo
[prettyembedyoutube]: https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube
[jonnitto.plyr]: https://github.com/jonnitto/Jonnitto.Plyr
[settings.jonnitto.yaml]: Configuration/Settings.Jonnitto.yaml
[`jonnitto.prettyembedyoutube:component.youtube`]: Resources/Private/Fusion/Component/Youtube.fusion
[`jonnitto.prettyembedyoutube:content.youtube`]: Resources/Private/Fusion/Content/Youtube.fusion
