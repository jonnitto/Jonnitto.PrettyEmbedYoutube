[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![Donate Paypal]][paypal] [![Wishlist amazon]][amazon] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription] [![GitHub followers]][followers] [![Follow Jon on Twitter]][twitter]

# Jonnitto.PrettyEmbedYoutube

> There is a successor of this package: [PrettyEmbedVideoPlatforms]
> It includes automatic detection of Vimeo or YouTube videos. To update, [follow these instructions].

Prettier embeds for your YouTube videos and playlists in [Neos CMS] - with helpful options like high-res preview images, lightbox feature, and advanced customization of embed options.

![Screenshot]

| Version  | Neos           | Maintained |
| -------- | -------------- | :--------: |
| 2.\*     | 2.\*           |            |
| > 4.1.\* | 3.\* + 4.\*    |            |
| 5.\*     | 3.3.\* + 4.\*  |            |
| 6.\*     | ^4.2.\* + 5.\* |            |
| 7.\*     | ^4.2.\* + >= 5 |      ✓     |
| 8.\*     | >= 5.3         |      ✓     |

## Installation

Most of the time, you have to make small adjustments to a package (e.g., configuration in `Settings.yaml`). Because of that, it is essential to add the corresponding package to the composer from your theme package. Mostly this is the site package located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require jonnitto/prettyembedyoutube --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

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

All packages from the PrettyEmbed series have the benefit of a better frontend performance since the player gets only loaded on request. So, no iframe/video gets loaded until the user wants to watch a video.

## Customization

### [Settings.Jonnitto.yaml]

#### JS API / Usage of youtube-nocookie.com

If you want to use the JavaScript API from youtube (e.g., for tracking), you have to enable set `enableJsApi` to `true`.

```yaml
Jonnitto:
  PrettyEmbedYoutube:
    enableJsApi: true
```

or, if you want to use the youtube-nocookie.com domain you can also edit the entries in your `Settings.yaml` file like this:

```yaml
Jonnitto:
  PrettyEmbedYoutube:
    url:
      playlist:
        embed: 'https://www.youtube-nocookie.com/embed/videoseries?list=%id%'
        href: 'https://www.youtube-nocookie.com/playlist?list=%id%'
      video:
        embed: 'https://www.youtube-nocookie.com/embed/%id%'
        href: 'https://www.youtube-nocookie.com/watch?v=%id%'
```

Be aware that you need to provide the placeholder for the ID (`%id%`) of the playlist or video.

#### Global settings for the whole PrettyEmbed series

Some settings will be set globally from the [PrettyEmbedHelper] package. These are the default settings:

```yaml
Jonnitto:
  PrettyEmbedHelper:
    # If you want to use your own assets, set this to false (Backend.js and Backend.css will be always be included in the backend)
    includeAssets:
      css: true
      js: true

    # If you want to save the duration of YouTube videos and playlists into the
    # property metadataDuration you have to add a API key from YouTube Data API v3
    # You can create this key on https://console.cloud.google.com/
    youtubeApiKey: null

    # For Vimeo and Youtube you can enable here the option the show a confirm dialog
    # that external content get loaded and the user may be tracked
    enableGdprMessage: false

    # This is the maximum width of a custom preview image
    maximumWidth: 1920

    # If this is set to a string, the element gets wrapped with a div and the class with the giving string.
    # If set to true, the element gets wrapped with a div without any class.
    # If set to false, the element get not wrapped at all
    wrapper: 'jonnitto-prettyembed-wrapper'

    # The buttons which get injected (file content) to the player.
    button:
      play: 'resource://Jonnitto.PrettyEmbedHelper/Public/Assets/PlayButton.svg'
      pause: 'resource://Jonnitto.PrettyEmbedHelper/Public/Assets/PauseButton.svg'
```

#### Disable inclusion of the CSS and/or JS files

The Javascript and CSS files get loaded via [Sitegeist.Slipstream]:

If you want to load your own CSS, you can disable it like that:

```yaml
Jonnitto:
  PrettyEmbedHelper:
    includeAssets:
      css: false
```

If you want to load your own Javascript, you can disable it like that:

```yaml
Jonnitto:
  PrettyEmbedHelper:
    includeAssets:
      js: false
```

If you use SCCS in your build pipeline, you can adjust the look and feel of [`Main.scss`] with following variables:

```scss
// Buttons (play / pause)
$prettyembed-button-play-size: 72px !default;
$prettyembed-button-pause-size: round(
  $prettyembed-button-play-size / 2
) !default;
$prettyembed-button-pause-margin: round(
  $prettyembed-button-pause-size / 2
) !default;
$prettyembed-button-opacity: 0.9 !default;
$prettyembed-button-scale: 0.8 !default;
$prettyembed-button-scale-hover: 1 !default;
$prettyembed-button-scale-active: 0.9 !default;
$prettyembed-button-foreground-color: #fff !default;
$prettyembed-button-background-color: #000 !default;
$prettyembed-button-background-opactiy: 0.4 !default;

// Lightbox
$prettyembed-lightbox-include: true !default;
$prettyembed-lightbox-overlay-color: #0b0b0b !default;
$prettyembed-lightbox-overlay-opacity: 0.8 !default;
$prettyembed-lightbox-padding: 15px !default;
$prettyembed-lightbox-max-width: 900px !default;
$prettyembed-lightbox-shadow: 0 0 8px rgba(#000, 0.6) !default;
$prettyembed-lightbox-z-index: 5500 !default;
$prettyembed-lightbox-close-size: 30px !default;
$prettyembed-lightbox-close-opacity: 0.65 !default;
$prettyembed-lightbox-close-opacity-hover: 1 !default;
$prettyembed-lightbox-close-color: #fff !default;
```

Because all variables have the `!default` flag, the variables don't get overwritten if you declare them before you import [`Main.scss`]. Like that, most of the frequent adjustments can be easily achieved.

### NodeTypes and Mixins

If you want to customize the default settings, take a look at the [Settings.Jonnitto.yaml] file. If no node property is given, these default values will be taken. If you, for example, don't want to let the editor choose if the video is a playlist or just a video you can deactivate the mixin in your Configuration folder like this:

```yaml
'Jonnitto.PrettyEmbedYoutube:Content.Youtube':
  superTypes:
    'Jonnitto.PrettyEmbedYoutube:Mixin.Type': false
```

These are the available mixins:

| Mixin name (Prefix: `Jonnitto.PrettyEmbed`) | Description                                                                 | Default value | Enabled per default |
| ------------------------------------------- | --------------------------------------------------------------------------- | :-----------: | :-----------------: |
| `Helper:Mixin.Groups`                       | Enables the inspector groups                                                |               |          ✓          |
| `Helper:Mixin.Image`                        | Add the preview image property                                              |               |          ✓          |
| `Helper:Mixin.Lightbox`                     | Open the video in a lightbox                                                |    `false`    |          ✓          |
| `Helper:Mixin.PreserveAspectRatio`          | If the lightbox is active, the preview image can preserve his aspect ratio. |    `true`     |          ✓          |
| `Helper:Mixin.BackendLabel`                 | Read the title of the video and set this as label in the content tree       |               |          ✓          |
| `Youtube:Mixin.Type`                        | Choose between `playlist` and `video`                                       |    `video`    |          ✓          |
| `Youtube:Mixin.VideoID`                     | Let the user enter the video id or youtube url                              |               |          ✓          |
| `Helper:Mixin.AllowFullScreen`              | Allow fullscreen or not                                                     |    `true`     |                     |
| `Helper:Mixin.Loop`                         | Loop the video                                                              |    `false`    |                     |
| `Helper:Mixin.Controls`                     | Show the controls                                                           |    `true`     |                     |
| `Youtube:Mixin.ClosedCaptions`              | Show captions                                                               |    `false`    |                     |
| `Youtube:Mixin.ShowRelated`                 | Show related videos at the end                                              |    `false`    |                     |

If you want to include the youtube video in your node type, you should use at least the mixin `Jonnitto.PrettyEmbedYoutube:Mixin.VideoID`. This add besides the `videoID` property also the properties for the metadata fetched from the oembed service. This mixin is also necessary to fetch/update the data from the service.

### Fusion

If you want to use the player as a pure component, you can use the [`Jonnitto.PrettyEmbedYoutube:Component.Youtube`] fusion prototype.

If you want to read the node properties and let the package handle all for you, you should use the [`Jonnitto.PrettyEmbedYoutube:Content.Youtube`] prototype. For more comfortable including in your node types, you can disable the content element wrapping with `contentElement = false`. This is useful if you want to create, for example, a text with a video node type.

## Get metadata

To get the metadata, you can run the flow command `./flow prettyembed:metadata`. This command search for nodes with the `VideoID` mixin, and tries to get the metadata. If for some reason, it is not possible to fetch the metadata (Perhaps the video is set to private, or the ID does not exist), you will get a table with the name of the node type, the type, the video ID and the node path.  
The task comes with two options:

- `--workspace` Workspace name, default is 'live'
- `--remove` Is set, all metadata will be removed

To get an overview of the options in the cli, you can run `./flow help prettyembed:metadata`

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
[neos cms]: https://www.neos.ioe
[prettyembedhelper]: https://github.com/jonnitto/Jonnitto.PrettyEmbedHelper
[jonnitto.plyr]: https://github.com/jonnitto/Jonnitto.Plyr
[settings.jonnitto.yaml]: Configuration/Settings.Jonnitto.yaml
[`jonnitto.prettyembedyoutube:component.youtube`]: Resources/Private/Fusion/Component/Youtube.fusion
[`jonnitto.prettyembedyoutube:content.youtube`]: Resources/Private/Fusion/Content/Youtube.fusion
[`main.scss`]: https://github.com/jonnitto/Jonnitto.PrettyEmbedHelper/blob/master/Resources/Private/Assets/Main.scss
[screenshot]: https://user-images.githubusercontent.com/4510166/76709350-6fb3c480-66fe-11ea-853f-630499f626a2.png
[prettyembedvideoplatforms]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVideoPlatforms
[follow these instructions]: https://github.com/jonnitto/Jonnitto.PrettyEmbedVideoPlatforms#merge-prettyembedyoutube-and-prettyembedvimeo
[sitegeist.slipstream]: https://github.com/sitegeist/Sitegeist.Slipstream
